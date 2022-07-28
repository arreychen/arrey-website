import '../styles/globals.css';
import type {AppProps} from 'next/app';
import HomeFooter from '../components/home/HomFooter';
import NavBar from '../components/home/NavBar';
function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className='relative min-h-screen'>
      <NavBar />
      <Component {...pageProps} />
      <HomeFooter />
    </div>
  );
}

export default MyApp;
