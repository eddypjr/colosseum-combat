'use client';
import Link from 'next/link';

export default function Schedule() {
  return (
    <>
      {/* fiter buttons */}

      {/* ---- */}

      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Fitness</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                9:00am - 10:00am
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                David Vila
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full  maxMd:justify-center items-center flex justify-end">
              <Link
                href="/contact"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ffb703] ease-in duration-200  "
              >
                Join Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">
                Body Building
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                10:00pm - 11:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                John Weights
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full maxMd:justify-center items-center flex justify-end">
              <Link
                href="/contact"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 "
              >
                Join Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Running</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                4:00pm - 5:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Junifor Jonas
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end maxMd:justify-center">
              <Link
                href="/contact"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 "
              >
                Join Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Cycling</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                6:00pm - 7:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Robert Louis
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end maxMd:justify-center">
              <Link
                href="/contact"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 "
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}