import Image from 'next/image';
import TitleBg from '../../images/title-bg.svg';

export default function Gallery() {
  return (
    <section>
      <div
        className="container page-padding flex flex-col items-center relative gap-[0rem] maxXl:flex-wrap py-[12rem]"
        style={{ margin: '0 auto' }}
      >
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          gallery
        </p>
        <Image
          src={TitleBg}
          blurDataURL="URL"
          placeholder="blur"
          alt="text_bg"
          className="color-logo w-[21rem] absolute -top-[-8px]"
        />
        <h2 className="text-[34px] text-black font-bold mb-4 ">
          Moments Captured At Colosseum Combat
        </h2>

        <div className="grid grid-rows-3 grid-cols-5 py-24 gap-[6px] w-full h-auto maxMd:flex maxMd:flex-col">
          <div id="item-0" className="maxMd:h-[41rem] maxMd:w-full"></div>

          <div id="item-1" className="maxMd:h-[41rem] maxMd:w-full"></div>

          <div id="item-2" className="maxMd:h-[41rem] maxMd:w-full"></div>

          <div id="item-3" className="maxMd:hidden"></div>

          <div id="item-4" className="maxMd:hidden"></div>

          <div id="item-5" className="maxMd:hidden"></div>
        </div>
      </div>
    </section>
  );
}
