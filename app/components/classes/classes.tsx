import Image from 'next/image';
import TitleBg from '../../images/title-bg.svg';
import BJJ from '../../images/classes/bjj.jpg';
import Boxing from '../../images/classes/boxing.jpg';
import KB from '../../images/classes/kb.jpg';
import MMA from '../../images/classes/mma.jpg';
import NoGi from '../../images/classes/no-gi.jpg';
import Strength from '../../images/classes/strength.jpg';
import Link from 'next/link';

export default function Classes() {
  return (
    <section id="featured" className="classes-section">
      <div
        className="container page-padding flex flex-col items-center relative gap-[0rem] maxXl:flex-wrap py-[12rem]"
        style={{ margin: '0 auto' }}
      >
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          Classes
        </p>
        <Image
          src={TitleBg}
          alt="stroke"
          className="color-logo w-[21rem] absolute -top-[-8px]"
        />
        <h2 className="text-[34px] text-black font-bold my-10">
          Unleash Your Potential with Our Versatile Class Offerings
        </h2>

        <div className="grid grid-cols-4 grid-rows-2 gap-5 h-full mt-7 maxMd:flex maxMd:flex-col">
          <Link href={'/schedule/monday'} className="item-0-div relative">
            <Image
              src={BJJ}
              alt="bjj"
              blurDataURL="URL"
              placeholder="blur"
              className="item-0 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">
                Brazilian Jiu Jitsu
              </p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5">
                Wednesday: 9:00am-10:00am
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-1-div relative">
            <Image
              src={MMA}
              alt="MMA"
              blurDataURL="URL"
              placeholder="blur"
              className="item-1 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">MMA</p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5">
                Friday: 10:00am-11:00am
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-2-div relative">
            <Image
              src={Boxing}
              alt="Boxing"
              blurDataURL="URL"
              placeholder="blur"
              className="item-2 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">Boxing</p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5">
                Saturday: 9:00am-10:00am
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-3-div relative">
            <Image
              src={NoGi}
              alt="No Gi Grappling"
              blurDataURL="URL"
              placeholder="blur"
              className="item-3 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">
                No Gi Grappling
              </p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5">
                Friday: 1:00pm-2:00pm
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-4-div relative">
            <Image
              src={KB}
              alt="Kickboxing"
              blurDataURL="URL"
              placeholder="blur"
              className="item-4 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">Kickboxing</p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5">
                Sunday: 6:00pm-7:00pm
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-5-div relative">
            <Image
              src={Strength}
              alt="Strength & Conditioning"
              blurDataURL="URL"
              placeholder="blur"
              className="item-5 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">
                Strength & Conditioning
              </p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5">
                Monday: 4:00pm-5:00pm
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
