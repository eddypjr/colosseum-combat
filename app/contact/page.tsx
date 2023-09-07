import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../components/button/button';

export default function Contact() {
  return (
    <>
      <section>
        <div className="pages-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact
          </h1>
        </div>
        {/* contact */}
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center maxLg:grid-cols-1">
          {/* first col */}
          <div className="maxLg:flex maxLg:flex-col maxLg:mx-auto maxMd:w-[90%] maxSm:!w-full maxLg:w-3/5">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              We're Here to Help Unleash Your Fighter Potential.
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              At Colosseum Combat, we're dedicated to helping you achieve your
              ultimate fighting form. Our team of seasoned trainers and combat
              experts will collaborate closely with you to design a personalized
              training regimen that covers all aspects of MMA, boxing, and
              kickboxing, propelling you toward your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 maxSm:gap-y-15 maxSm:grid-cols-1 maxSm:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Los Angeles, CA</h3>
                <span className="bg-[#ffb703] w-[50px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  9623 Santa Monica Blvd
                  <br /> Los Angeles, CA, 90210
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Opening Hours</h3>
                <span className="bg-[#ffb703] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Monday - Friday: 7:30am — 1:00am</p>
                  <p>Saturday: 8:00am — 6:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#ffb703] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>(323)555-9567</p>
                  <p>&nbsp;ffacademyla@gymail.com</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
                <span className="bg-[#ffb703] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-black flex gap-5">
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
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative maxLg:w-[65%] maxLg:flex maxLg:flex-col maxLg:mx-auto maxLg:mt-14 maxMd:w-[90%] maxSm:!w-full">
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <span className="bg-[#ffb703] w-[50px] h-[4px] absolute top-[77px]"></span>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Class</option>
              <option>Boxing</option>
              <option>Brazilian Jiu Jitsu</option>
              <option>Kickboxing</option>
              <option>MMA</option>
              <option>No Gi Grappling</option>
              <option>Strength & Conditioning</option>
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <Button
              type="submit"
              goTo="/"
              text="Submit Now"
              className="text-black bg-[#ffb703] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6 hover:text-white"
            />
          </form>
        </div>
      </section>
    </>
  );
}
