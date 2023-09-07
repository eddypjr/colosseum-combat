'use client';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  goTo: string;
  text: string;
}

export default function Button({
  goTo,
  text,
  ...props
}: ButtonProps): JSX.Element {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Link onClick={goTop} href={goTo} {...props}>
      {text}
    </Link>
  );
}
