import '../styles/globals.css';
import type {AppProps} from 'next/app';
import HomeFooter from '../components/home/HomFooter';
import NavBar from '../components/home/NavBar';
import {SSRProvider, Provider, useLocale, defaultTheme} from '@adobe/react-spectrum';
import Loading from '../components/Loading';
function MyApp({Component, pageProps}: AppProps) {
  const {locale} = useLocale();
  return (
    <SSRProvider>
      <Provider locale={locale} theme={defaultTheme} colorScheme="dark" >
        <div className='relative min-h-screen'>
          <Loading/>
          <NavBar />
          <Component {...pageProps} />
          <HomeFooter />
        </div>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
