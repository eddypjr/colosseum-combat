'use client';
import { useState } from 'react';
import Image from 'next/image';
import EddieBravo from './eddie-bravo.png';
import WonderBoy from './wonderboy.png';
import Floyd from './floyd.png';

export default function Coaches() {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemove = () => {
    setImgHover(false);
  };

  const trainers = [
    { img: EddieBravo, name: 'Eddie Bravo', job: 'Brazilian Jiu Jitsu Coach' },
    { img: WonderBoy, name: 'Stephen Thompson', job: 'Kickboxing Coach' },
    { img: Floyd, name: 'Floyd Mayweather', job: 'Boxing Coach' },
  ];
  return (
    <>
      <div
        className="flex justify-center gap-[5rem] md1200:flex-wrap bg-[#ffb703]"
        style={{ margin: '0 auto' }}
      >
        {trainers.map((train, id) => (
          <div
            onMouseEnter={hoverBox}
            onMouseLeave={hoverBoxRemove}
            key={id}
            className="relative cursor-pointer w-[35rem] min450:w-full flex flex-col select-none"
          >
            {/* trainer img */}
            <Image
              src={train.img}
              alt="trainer"
              style={{ transition: 'all 0.3s' }}
              className={`w-[22rem] z-10 relative grayscale mx-auto ${
                imgHover ? 'hover:grayscale-0' : ''
              }`}
            />
            {/* trainer description */}
            <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
              <i className="fa-solid fa-angle-up absolute -top-[16px] left-[162px] text-3xl"></i>
              <h3 className="font-bold text-[2.4rem] ">{train.name}</h3>
              <p className="font-medium text-[1.5rem] text-[#646464]">
                {train.job}
              </p>
              <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
