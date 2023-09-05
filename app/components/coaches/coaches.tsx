'use client';
import { useState } from 'react';
import Image from 'next/image';
import EddieBravo from '../../images/coaches/eddie-bravo.png';
import WonderBoy from '../../images/coaches/wonderboy.png';
import Floyd from '../../images/coaches/floyd.png';
import TitleBg from '../../images/title-bg.svg';

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
    <section className="classes-section">
      <div
        className="container page-padding flex flex-col items-center relative gap-[0rem] maxXl:flex-wrap py-[12rem]"
        style={{ margin: '0 auto' }}
      >
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          Coaches
        </p>
        <Image
          src={TitleBg}
          alt="stroke"
          className="color-logo w-[21rem] absolute -top-[-10px]"
        />
        <h2 className="text-[34px] text-black font-bold mb-4 ">
          Meet Our World Class Coaches
        </h2>
        <p className="text-[#646464] font-medium text-[15px] ">
          Team up with our remarkable coaching experts to reach new heights.
          Benefit
          <br />
          from personalized guidance and an endless reservoir of motivation!
        </p>
        <div className="flex gap-3 maxLg:gap-y-16 mt-20 justify-center maxLg:items-center maxLg:flex-col w-full">
          {trainers.map((train, id) => (
            <div
              onMouseEnter={hoverBox}
              onMouseLeave={hoverBoxRemove}
              key={id}
              className="relative cursor-pointer w-[35rem] maxXs:w-full flex flex-col select-none h-[350px]"
            >
              <Image
                src={train.img}
                alt="trainer"
                blurDataURL='URL'
                placeholder='blur'
                style={{ transition: 'all 0.3s' }}
                className={`w-[22rem] z-10 absolute grayscale mx-auto flex place-self-center h-3/4 py-5 ${
                  imgHover ? 'hover:grayscale-0' : ''
                }`}
              />
              <div className="image-background absolute top-[4px] h-full w-full scale-[1]" />
              <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
                <h3 className="font-bold text-[2.4rem] ">{train.name}</h3>
                <p className="font-medium text-[1.5rem] text-[#646464]">
                  {train.job}
                </p>
                <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
