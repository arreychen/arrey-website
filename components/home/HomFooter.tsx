import {Footer} from '@adobe/react-spectrum';

const HomeFooter = () =>{
  return (
    <Footer >
      <div className='w-full h-40 flex flex-col md:flex-row justify-center items-center  gap-[1rem] text-bordcolor font-bold select-none'>
        <p>
          <a href='https://beian.miit.gov.cn/' target='_blank' rel='noreferrer'>
            皖ICP备2021008083号
          </a>
        </p>
        <p >&copy; 2022 ArreyChan, All rights reserved</p></div>
    </Footer>
  );
};
export default HomeFooter;
