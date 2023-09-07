import Button from '../button/button';
import { Rubik } from 'next/font/google';

export default function CallToActionTop() {
  return (
    <section className="call-to-action h-[21rem] maxMd:h-full maxMd:py-[4rem] flex justify-center text-left items-center maxLg:bg-none maxLg:bg-[#ffb703] ">
      <div className="container page-padding ">
        <div className="flex items-center maxLg:flex-col maxLg:gap-12  maxLg:text-center">
          <h2 className={`text-black font-bold text-[3.7rem] maxLg:text-[3rem] max-w-6xl px-7 leading-[1.2] maxXs:text-[2.4rem]`}>
            Defy Your Limits. Embrace Your Strength.
          </h2>
          <Button
            text="Join Now"
            goTo="/contact"
            className="text-[15px] text-black maxLg:text-white maxLg:hover:text-[#ffb703] hover:text-white bg-[#ffb703] maxLg:bg-black text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2"
          />
        </div>
      </div>
    </section>
  );
}
