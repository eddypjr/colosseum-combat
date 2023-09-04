import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Logo from '../../icon.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container page-padding py-[10rem] maxSm: py-[5rem]">
        <div className="flex justify-between maxSm:flex-col maxSm:items-center maxSm:text-center maxSm:gap-[5rem] !text-left">
          {/* left column */}
          <div className="flex flex-col w-1/3 gap-8 maxSm:w-4/5">
            {/* social media */}
            <Image src={Logo} alt="logo" className="w-[75px] h-[75px]" />
            <p className="text-[15px] font-medium text-[#646464]">
              At Colosseum Combat, we believe that fitness is key to a happy and
              healthy life, and we invite you to experience our classes that
              offer fun and intense full-body workouts for all ages.
            </p>
            <div className="flex gap-7 text-[18px] text-[#646464] maxSm:justify-start maxMd:justify-center">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ffb703] hover:text-white"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ffb703] hover:text-white"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ffb703] hover:text-white"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ffb703] hover:text-white"
              />
            </div>
            <p className="text-[16px] font-medium text-[#646464] maxSm:text-center">
              Privacy Policy | © {new Date().getFullYear()} Colosseum Combat
            </p>
          </div>

          {/* middle div */}
          <div className="flex flex-col gap-8 relative">
            <p className="text-[22px] font-bold footer-main">Our Classes</p>

            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ffb703]"></span>

            <Link
              href="schedule/monday"
              className="text-[16px] hover:text-[#ffb703] cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Boxing Classes
            </Link>
            <Link
              href="schedule/tuesday"
              className="text-[16px] hover:text-[#ffb703] cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Kickboxing Classes
            </Link>
            <Link
              href="schedule/wednesday"
              className="text-[16px] hover:text-[#ffb703] cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Brazilian Jiu Jitsu Classes
            </Link>
            <Link
              href="schedule/thursday"
              className="text-[16px] hover:text-[#ffb703] cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              No Gi Grappling
            </Link>
            <Link
              href="schedule/friday"
              className="text-[16px] hover:text-[#ffb703] cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Strength & Conditioning
            </Link>
          </div>

          {/* right div */}
          <div className="flex flex-col gap-8 relative">
            <p className="text-[22px] font-bold footer-main">Working Hours</p>

            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ffb703]"></span>

            <p className="text-[16px]  text-[#646464] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 10:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
            <p className="text-[16px] text-[#646464] font-medium">
              8:00am - 6:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold ">
              Sunday: Closed
            </p>
          </div>

          <span></span>
        </div>
      </div>
    </footer>
  );
}
