import '../styles/globals.css';
import type {AppProps} from 'next/app';
import HomeFooter from '../components/home/HomFooter';
import NavBar from '../components/home/NavBar';
import {SSRProvider, Provider, defaultTheme} from '@adobe/react-spectrum';
import Loading from '../components/Loading';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Fstloading from '../components/Fstloading';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const [loading, setLoading]=useState(false);
  const [fstloading, setFstloading] = useState(false);
  useEffect(()=>{
    setTimeout(() =>{
      setFstloading(true);
    }, 1000);
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: string) => (url === router.asPath) && setTimeout(() =>{
      setLoading(false);
    }, 1000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    <>
      {fstloading ?
      <SSRProvider>
        <Provider locale={'en-US'} theme={defaultTheme} colorScheme="dark" >
          {loading?<Loading opachild={loading}/>:
       (<div className='relative min-h-screen will-change-transform'>
         <NavBar />
         <Component {...pageProps} />
         <HomeFooter />
       </div>)}
        </Provider>
      </SSRProvider>:<Fstloading/>}
    </>
  );
}

export default MyApp;
