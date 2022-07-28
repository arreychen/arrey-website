import type {NextPage} from 'next';

import Image from 'next/image';
import faceImage1 from '../public/home/faceimage1.png';
import Head from 'next/head';
const Home: NextPage = () => {
  return (

    <main className=' flex flex-col justify-center '>
      <Head>
        <title>(◍’౪`◍)ﾉﾞ~hi, buddy~</title>
      </Head>
      <Image alt='face' src={faceImage1} width='1920' height='1080' priority={true} />
      <div className='text-5xl text-titlcolor pt-20 pb-20 px-10'>
        <Image
          alt='errui'
          src={`${process.env.IMG_HOST}errui.jpg`}
          width='150'
          height='150'
          className='rounded-3xl'
          priority={true}
        />
        <p className='pt-10'>Hi! My name is Arrey Chan.</p>
        <p>A frontend and independent game developer.</p>
      </div>
    </main>
  );
};

export default Home;
