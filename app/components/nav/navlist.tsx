import Link from 'next/link';

export default function NavList() {
  return (
    <>
      <ul className="flex gap-9 text-[16px] font-medium xl:none">
        <li className="cursor-pointer hover:text-[#ffb703]">
          <Link href="/" className="text-gray-300 hover:text-[#ffb703]">
            Home
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#ffb703]">
          <Link href="/about" className="text-gray-300 hover:text-[#ffb703]">
            About
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#ffb703]">
          <Link
            href="/schedule/monday"
            className="text-gray-300 hover:text-[#ffb703]"
          >
            Schedule
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#ffb703]">
          <Link
            href="/gallery/page-1"
            className="text-gray-300 hover:text-[#ffb703]"
          >
            Gallery
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#ffb703]">
          <Link href="/pricing" className="text-gray-300 hover:text-[#ffb703]">
            Pricing
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#ffb703]">
          <Link href="/contact" className="text-gray-300 hover:text-[#ffb703]">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
