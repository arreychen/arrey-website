import Link from 'next/link';
const NavBar = () => {
  return (
    <div className='w-full xl:h-28 h-20 flex justify-center items-center fixed z-50 '>
      <nav className='xl:text-2xl md:text-xl flex gap-[2.7rem] navtitle '>
        <Link href="/">
          <a className='text-titlcolor hover:text-hover-navcolor'>HOME</a>
        </Link>
        <Link href="/works">
          <a className='text-titlcolor hover:text-hover-navcolor'>WORKS</a>
        </Link>
        <Link href="/">
          <a className='text-titlcolor hover:text-hover-navcolor'>BLOG</a>
        </Link>
        <Link href="/">
          <a className='text-titlcolor hover:text-hover-navcolor'>WORUI</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
