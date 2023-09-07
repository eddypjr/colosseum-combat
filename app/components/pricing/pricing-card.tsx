import Button from '../button/button';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { StaticImageData } from 'next/image';

type PricingCardProps = {
  image: StaticImageData | string;
  price: number;
  title: string;
  descriptions: string[];
};

export default function PricingCard({
  image,
  price,
  title,
  descriptions,
}: PricingCardProps) {
  return (
    <>
      <div className="flex flex-col w-1/4 maxXl:w-full bg-white shadow-xl relative">
        <div
          style={{ transition: 'all 0.3s' }}
          className="relative grayscale hover:grayscale-0"
        >
          <Image
            className="w-full h-[450px] maxSm:h-[350px]"
            width={450}
            height={350}
            src={image}
            alt="pricing_img"
          />
          <div className="bg-white text-[24px] font-bold w-[25rem] text-center py-6 text-[#ffb703] left-0 right-0 mx-auto">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[5px] pb-[50px]">
          <p className="text-center text-[55px] font-bold relative py-[2px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              $
            </span>

            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">
              {title !== 'Drop In Class' ? '/mo.' : ''}
            </span>
          </p>
          <div className="flex flex-col text-[16px] maxLg:text-[20px] font-medium text-center gap-8 text-[#646464]">
            {descriptions.map((desc) => (
              <div
                key={crypto.randomUUID()}
                className="flex gap-2 h-full items-baseline"
              >
                <FontAwesomeIcon
                  icon={faCaretRight}
                  size="sm"
                  className="text-[#ffb703]"
                />
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <Button
            text="Sign Up Now"
            goTo="/contact"
            className="text-[15px] mt-[15%] text-black hover:text-white bg-[#ffb703] text-center mt-5 pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2"
          />
        </div>
      </div>
    </>
  );
}
