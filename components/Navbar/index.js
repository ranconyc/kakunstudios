import { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import useMediaQuery from '../../hooks/useMediaQuery';
import { navLinks as links } from '../../data';

const Navbar = ({ scrolled, ...props }) => {
  const [navLinks] = useState(links);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktop = useMediaQuery('(min-width: 1024px)');

  const handleMenuOpen = () => setIsMenuOpen((pre) => !pre);

  return (
    <>
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-10 bg-sand-100  -translate-x-3 ${
            isMenuOpen && 'bg-sand-200 translate-x-0 transition-all'
          }`}
        >
          <ul className="grid gap-2  place-items-center pt-24 h-full">
            {navLinks.map(({ path, name }) => (
              <li
                key={name}
                className="w-full p-10 text-center hover:cursor-pointe hover:text-primary"
                onClick={handleMenuOpen}
              >
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <header
        className={`bg-transparent flex justify-between items-center pt-2 pb-2 pr-4 pl-4 sm:pr-8 sm:pl-8 left-0 right-0 top-0 z-10 ${
          scrolled ? 'fixed bg-sand-100/50' : 'absolute'
        }`}
      >
        {desktop ? (
          <ul className="h-10 flex justify-between items-center">
            {navLinks.map(({ path, name }) => (
              <li
                key={name}
                className="ml-4 font-bold hover:cursor-pointe hover:text-primary"
              >
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid gap-1">
            <div
              onClick={handleMenuOpen}
              className={`bg-black h-1 w-6 rounded-lg hover:cursor-pointe transition-all ${
                isMenuOpen && ' translate-y-2 rotate-45'
              }`}
            />
            <div
              onClick={handleMenuOpen}
              className={`bg-black h-1 w-6 rounded-lg hover:cursor-pointe transition-all ${
                isMenuOpen && 'bg-orange-500'
              }`}
            />
            <div
              onClick={handleMenuOpen}
              className={`bg-black h-1 w-6 rounded-lg hover:cursor-pointe transition-all ${
                isMenuOpen && '-rotate-45 -translate-y-2'
              }`}
            />
          </div>
        )}
        <Logo />
      </header>
    </>
  );
};

export default Navbar;
