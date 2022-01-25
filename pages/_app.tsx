import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return <Component {...pageProps} />;
};

export default App;
