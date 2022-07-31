import {ProgressBar} from '@adobe/react-spectrum';

function Loading() {
  return (
    <div className={' z-50 flex justify-center items-center bg-bgcolor inset-0 fixed h-screen w-screen'}>
      <ProgressBar label="加载中，请稍后..." isIndeterminate />
    </div>
  );
}
export default Loading;
