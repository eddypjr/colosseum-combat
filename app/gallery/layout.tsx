'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isActive = (pathname: string) => path === pathname;
  return (
    <section>
      <div className="pages-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Gallery
        </h1>
      </div>
      <div className="container page-padding py-[10rem]">{children}</div>
      <div className="flex justify-center gap-3 mt-8">
        {isActive('/gallery/page-2') && (
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            href="/gallery/page-1"
            className="text-black  bg-white  inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md"
          >
            &#8592;
          </Link>
        )}

        <Link
          onClick={() => window.scrollTo({ top: 0 })}
          href="/gallery/page-1"
          className={`${
            isActive('/gallery/page-1')
              ? 'text-white bg-[#ffb703]'
              : 'text-black bg-white '
          } inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md`}
        >
          1
        </Link>
        <Link
          onClick={() => window.scrollTo({ top: 0 })}
          href="/gallery/page-2"
          className={`${
            isActive('/gallery/page-2')
              ? 'text-white bg-[#ffb703]'
              : 'text-black bg-white '
          } inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md`}
        >
          2
        </Link>

        {isActive('/gallery/page-1') && (
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            href="/gallery/page-2"
            className="text-black  bg-white  inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md"
          >
            &#8594;
          </Link>
        )}
      </div>
    </section>
  );
}
