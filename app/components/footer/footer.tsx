import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container page-padding py-[10rem]">
        <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
          {/* left column */}
          <div className="flex flex-col w-1/3 gap-8">
            {/* social media */}
            <p>
              At Fusion Fight Academy, we believe that fitness is key to a happy
              and healthy life, and we invite you to experience our classes that
              offer fun and intense full-body workouts for all ages.
            </p>
            <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
              <p>socials</p>
            </div>
            <p className="text-[16px] font-medium text-[#646464]">
              Privacy Policy | © {new Date().getFullYear()} Fusion Fight Academy
            </p>
          </div>

          {/* middle div */}
          <div className="flex flex-col gap-8 relative">
            <p className="text-[22px] font-bold footer-main">Our Classes</p>

            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Fitness Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Aerobics Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Power Yoga
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Learn Machines
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Full-body Strength
            </p>
          </div>

          {/* right div */}
          <div className="flex flex-col gap-8 relative">
            <p className="text-[22px] font-bold footer-main">Working Hours</p>

            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

            <p className="text-[16px]  text-[#646464] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 21:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 19:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold ">
              Sunday - Closed
            </p>
          </div>

          <span></span>
        </div>
      </div>
    </footer>
  );
}
