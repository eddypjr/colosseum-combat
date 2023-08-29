'use client';
import Link from 'next/link';
import React from 'react'

type ButtonProps = {
  goTo: string;
  text: string;

}

export default function Button({goTo, text}: ButtonProps) {
    const goTop = () => {
      window.scrollTo({
        top: 0,
      });
    };

  return (
    <Link
      onClick={goTop}
      href={goTo}
      className={`text-[15px] text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 `}
    >
      {text} &nbsp;
    
    </Link>
  );
}
