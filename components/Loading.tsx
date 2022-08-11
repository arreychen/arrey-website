import {ProgressCircle} from '@adobe/react-spectrum';
interface Loadcss {
  opachild: boolean;
}
function Loading(props:Loadcss) {
  const loadopa = props.opachild;
  return (
    <div className={` z-50 flex justify-center items-center bg-bgcolor inset-0 fixed h-screen w-screen gap-[1rem] font-black text-lg
    ${loadopa?'opacity-100':'opacity-0'}`}>
      <ProgressCircle aria-label="Loading…" isIndeterminate variant="overBackground"/> 加载中...
    </div>
  );
}
export default Loading;
