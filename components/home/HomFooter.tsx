import {ActionButton, Content, Divider, Footer, Heading} from '@adobe/react-spectrum';
import {DialogTrigger, Dialog} from '@adobe/react-spectrum';
import Info from '@spectrum-icons/workflow/InfoOutline';

const HomeFooter = () =>{
  return (
    <Footer >
      <div className='w-full h-40 flex flex-col md:flex-row justify-center items-center  gap-[0.7rem] text-bordcolor font-bold select-none'>
        <p>
          <a href='https://beian.miit.gov.cn/' target='_blank' rel='noreferrer'>
            皖ICP备2021008083号
          </a>
        </p>
        <p >&copy; 2022 ArreyChan, All rights reserved</p>
        <DialogTrigger type="tray">

          <ActionButton isQuiet>
            <Info />
            More Info</ActionButton>
          <Dialog>
            <Heading>关于网站</Heading>
            <Divider />
            <Content>
              本网站由Cloudflare提供CDN加速服务<br />
              本网站涉及到的原创艺术内容遵循
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target='_blank' rel='noreferrer'>
              CC 4.0 BY-NC-SA
              </a>版权协议<br />
              首页图画师：清楚ノ囚人
            </Content>
          </Dialog>
        </DialogTrigger>
      </div>


    </Footer>
  );
};
export default HomeFooter;
