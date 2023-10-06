import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Sun, Moon } from 'react-feather';

interface HeaderProps {
  mounted: any,
  resolvedTheme: any,
  setTheme: any,
  scrolled: any
}
const Header = ({ mounted, resolvedTheme, setTheme, scrolled }: HeaderProps): JSX.Element => {
  return (
    <header className={`z-10 pt-10 pb-1 mb-10 pl-0 top-0 right-0 left-0 transition border-b bg-transparent border-transparent sticky w-screen backdrop-filter`}>
      <div className="h-0 pb-9 pl-5 max-w-4xl w-full flex items-center justify-between m-auto">
      </div>
    </header>

  );
};



export default Header;
