'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ScheduleLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const isActive = (pathname: string) => path === pathname;

  const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <>
      <section className="">
        <div className="pages-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Schedule by Day
          </h1>
        </div>
        <div className="container page-padding py-[10rem]">
          <div className="flex flex-wrap gap-4 justify-center">
            {daysOfTheWeek.map((day) => (
              <Link
                href={`/schedule/${day.toLocaleLowerCase()}`}
                key={crypto.randomUUID()}
                className={`text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
                  isActive(`/schedule/${day.toLocaleLowerCase()}`)
                    ? 'bg-[#ffb703] text-white '
                    : 'bg-white'
                } ease-in duration-200 hover:shadow-2xl ${
                  isActive(`/schedule/${day.toLocaleLowerCase()}`)
                    ? 'text-black'
                    : 'hover:text-white hover:bg-[#ffb703]'
                } `}
              >
                {day}
              </Link>
            ))}
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
