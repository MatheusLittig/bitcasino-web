import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '@/styles/global';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="/svgs/fav-icon.svg"
            type="image/svg"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
