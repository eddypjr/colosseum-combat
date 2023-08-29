import { StaticImageData } from 'next/image';
import Button from '../button/button';
import React from 'react';
import Image from 'next/image';

type PricingCardProps = {
  image: StaticImageData | string;
  price: number;
  title: string;
};

export default function PricingCard({ image, price, title }: PricingCardProps) {
  return (
    <>
      <div className="flex flex-col w-1/4 bg-white shadow-xl relative min540:w-[100%]">
        <div
          style={{ transition: 'all 0.3s' }}
          className="relative grayscale hover:grayscale-0"
        >
          {/* <img src={img} alt="pricing_img" className="w-full h-full" /> */}
          <Image src={image} alt="pricing_img" className="w-full h-[450px]" />
          <div className="bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              $
            </span>

            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">
              {title !== 'Drop In Class' ? '/mo.' : ''}
            </span>
          </p>
          {/* text */}
          <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] ">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>

          <Button text="Sign Up Now" goTo="/contact" />

          {/* <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          /> */}
        </div>
      </div>
    </>
  );
}
