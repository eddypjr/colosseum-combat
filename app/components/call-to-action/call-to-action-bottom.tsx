import React from 'react'
import Button from '../button/button';

export default function CallToActionBottom() {
  return (
    <>
      <section className="cta-section w-full h-auto maxLg:bg-none maxLg:bg-black">
        <div className="container page-padding py-[7rem] text-white maxLg:text-black maxLg:flex maxLg:flex-col maxLg:gap-12  maxLg:items-center maxLg:text-center">
          <h2 className="text-[36px] font-bold maxLg:text-[#ffb703]">Need Private Lessons?</h2>
          <h3 className="text-[28px] font-bold mb-20 maxLg:text-white">
            <span className="text-[#ffb703] maxLg:text-[#ffb703]">Call:</span>{' '}
            (323)555-9567
          </h3>
          <Button
            text="Enroll Now"
            goTo="/contact"
            className="text-[15px] bg-[#ffb703] text-black text-center px-12 py-4 pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 hover:text-white"
          />
        </div>
      </section>
    </>
  );
}
