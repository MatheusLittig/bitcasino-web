import { AppLayout } from '@/components/layouts';
import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default App;
