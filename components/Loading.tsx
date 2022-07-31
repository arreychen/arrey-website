import {ProgressBar} from '@adobe/react-spectrum';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
function Loading() {
  const router = useRouter();
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: string) => (url === router.asPath) && setTimeout(() =>{
      setLoading(false);
    }, 5000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  if (loading) {
    return (
      <div className={' z-50 flex justify-center items-center bg-bgcolor inset-0 fixed h-screen w-screen'}>
        <ProgressBar label="Loading…" isIndeterminate />
      </div>
    );
  } else {
    return null;
  }
}
export default Loading;
