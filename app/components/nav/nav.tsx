'use client';
import Link from 'next/link';
import Button from '../button/button';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Logo from '../../icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavList from './navlist';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 10 && setSticky(true);
      }
    };

    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const hamburgerMenuHandler = () => {
    setHamburger(!hamburger);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`flex flex-row bg-transparent items-center justify-between z-[9999999999] py-3 px-12  fixed top-0 left-0 right-0 w-full z-50${
        sticky ? 'shadow-xl !bg-black transition duration-300' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-[#ffb703] text-lg font-bold">
          <div onClick={goTop}>
            <Image src={Logo} alt="logo" className="logo hover:color-logo hover:cursor-pointer" />
          </div>
        </div>
        <div className="nav-list">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            <div
              className={`flex top-0 flex-col fixed w-full h-screen z-[9999999999] bg-white py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? 'left-0' : '-left-[100%]'
              }`}
            >
              <FontAwesomeIcon
                icon={faXmark}
                onClick={hamburgerMenuHandler}
                className="hamburger text-[3.3rem] text-[#ffb703] cursor-pointer self-end"
              />

              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenuHandler}>
                  <Link
                    onClick={goTop}
                    className="text-[2rem] font-medium hover:text-[#ffb703] ease-in duration-200"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={hamburgerMenuHandler}>
                  <Link
                    onClick={goTop}
                    className="text-[2rem] font-medium hover:text-[#ffb703] ease-in duration-200"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li onClick={hamburgerMenuHandler}>
                  <Link
                    onClick={goTop}
                    className="text-[2rem] font-medium hover:text-[#ffb703] ease-in duration-200"
                    href="/schedule/monday"
                  >
                    Schedule
                  </Link>
                </li>
                <li onClick={hamburgerMenuHandler}>
                  <Link
                    onClick={goTop}
                    className="text-[2rem] font-medium hover:text-[#ffb703] ease-in duration-200"
                    href="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={hamburgerMenuHandler}>
                  <Link
                    onClick={goTop}
                    className="text-[2rem] font-medium hover:text-[#ffb703] ease-in duration-200"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li onClick={hamburgerMenuHandler}>
                  <Link
                    onClick={goTop}
                    className="text-[2rem] font-medium hover:text-[#ffb703] ease-in duration-200"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <FontAwesomeIcon
              icon={faBars}
              className="hamburger hidden text-white text-4xl cursor-pointer hover:text-[#ffb703] ease-in duration-200"
              onClick={hamburgerMenuHandler}
            />
          </div>
          <Button
            text="Join Now"
            goTo="/contact"
            className="text-[15px] text-black rounded-sm hover:text-white bg-[#ffb703] md:px-12 md:py-4 px-5 py-3 text-center font-[600] uppercase hero-cta relative ml-2"
          />
        </div>
      </div>
    </nav>
  );
}
