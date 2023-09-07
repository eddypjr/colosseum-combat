import Image from 'next/image';
import TitleBg from '../../images/title-bg.svg';
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
              width={706.5}
              height={360}
              src="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887126/bjj_sd6kbv.webp"
              alt="bjj"
              blurDataURL="URL"
              placeholder="blur"
              className="item-0 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">
                Brazilian Jiu Jitsu
              </p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5 maxLg:w-fit">
                Wednesday: 9:00am-10:00am
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-1-div relative">
            <Image
              width={345.75}
              height={360}
              src="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887135/mma_socgrg.webp"
              alt="MMA"
              blurDataURL="URL"
              placeholder="blur"
              className="item-1 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">MMA</p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5 maxLg:w-fit">
                Friday: 10:00am-11:00am
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-2-div relative">
            <Image
              width={345.75}
              height={360}
              src="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887129/boxing_sau01t.webp"
              alt="Boxing"
              blurDataURL="URL"
              placeholder="blur"
              className="item-2 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">Boxing</p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5 maxLg:w-fit">
                Saturday: 9:00am-10:00am
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-3-div relative">
            <Image
              width={345.75}
              height={0}
              src="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887133/no-gi_glhri6.webp"
              alt="No Gi Grappling"
              blurDataURL="URL"
              placeholder="blur"
              className="item-3 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">
                No Gi Grappling
              </p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5 maxLg:w-fit">
                Friday: 1:00pm-2:00pm
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-4-div relative">
            <Image
              width={345.75}
              height={360}
              src="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887130/kb_i54yx9.webp"
              alt="Kickboxing"
              blurDataURL="URL"
              placeholder="blur"
              className="item-4 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">Kickboxing</p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5 maxLg:w-fit">
                Sunday: 6:00pm-7:00pm
              </p>
            </div>
          </Link>

          <Link href={'/schedule/monday'} className="item-5-div relative">
            <Image
              width={706.5}
              height={360}
              src="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887124/strength_ibqcoz.webp"
              alt="Strength & Conditioning"
              blurDataURL="URL"
              placeholder="blur"
              className="item-5 w-full h-full ease-in duration-[0.4s]"
            />
            <div className="absolute z-10 bottom-10 left-10">
              <p className="text-white text-[3rem] font-bold">
                Strength & Conditioning
              </p>
              <p className="text-black bg-[#ffb703] text-[16px] mt-3 py-1 px-5 maxLg:w-fit">
                Monday: 4:00pm-5:00pm
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
