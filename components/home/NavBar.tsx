import styles from '../css/globals.module.scss';
import Link from 'next/link';
import React from 'react';
type StateType = {
  showBg:boolean
};
interface NavBar {
  state: StateType;
}
class NavBar extends React.Component {
  constructor(props:never) {
    super(props);
    this.state = {
      showBg: true,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY>2 ) {
      this.setState({showBg: false});
    } else {
      this.setState({showBg: true});
    }
  };
  render() {
    return (
      <div className={`w-full xl:h-28 h-20 flex justify-center items-center fixed z-40 select-none ${this.state.showBg ? styles.navbghide: styles.navbg}`}>
        <nav className={'2xl:text-3xl xl:text-2xl md:text-xl flex gap-[2.7rem] navtitle ' }>
          <Link href="/">
            <a className='text-titlcolor hover:text-themecolor'>HOME</a>
          </Link>
          <Link href="/works" >
            <a className='text-titlcolor hover:text-themecolor'>WORKS</a>
          </Link>
          <Link href="https://errui.blog.csdn.net/">
            <a className='text-titlcolor hover:text-themecolor'>BLOG</a>
          </Link>
          <Link href="/">
            <a className='text-titlcolor hover:text-themecolor'>WORUI</a>
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
