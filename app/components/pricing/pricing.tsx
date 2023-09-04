import React from 'react';
import PricingCard from './pricing-card';
import BJJ from '../../images/pricing/bjj.jpg';
import KB from '../../images/pricing/kb.jpg';
import Boxing from '../../images/pricing/boxing.jpg';
import DropIn from '../../images/pricing/drop-in.jpg';
import TitleBg from '../../images/title-bg.svg';
import Image from 'next/image';

export default function Pricing() {
  return (
    <section className="pricing-section page-gray-bg">
      <div
        className="container page-padding flex flex-col items-center relative gap-[0rem] maxXl:flex-wrap py-[12rem]"
        style={{ margin: '0 auto' }}
      >
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          Pricing Chart
        </p>
        <Image
          src={TitleBg}
          alt="text_bg"
          className="color-logo w-[21rem] absolute -top-[-8px]"
        />
        <h2 className="text-[34px] font-bold mb-4 maxSm:text-center">
          Membership Pricing Plan
        </h2>
        <p className="text-[#646464] font-medium text-[15px] ">
          Can't decide? Come for a drop in class
          <br /> with no commitment needed!
        </p>

        <div className="flex gap-3 maxXl:flex-col maxXl:items-center  mt-20">
          <PricingCard
            image={DropIn}
            price={30}
            title="Drop In Class"
            descriptions={[
              'No Commitment',
              'Boxing',
              'Kickboxing',
              'Brazilian Jiu Jitsu',
              'Flexible',
            ]}
          />
          <PricingCard
            image={Boxing}
            price={215}
            title="Boxing"
            descriptions={[
              'Full Contact',
              'Footwork',
              'Combos',
              'Core Workout',
              'Cardio Heavy',
            ]}
          />
          <PricingCard
            image={KB}
            price={200}
            title="KickBoxing"
            descriptions={[
              'Heavybag Work',
              'Leg Workouts',
              'Flexibility Training',
              'Cardio Heavy',
              'Shin Guards Required',
            ]}
          />
          <PricingCard
            image={BJJ}
            price={175}
            title="Brazilian Jiu Jitsu"
            descriptions={[
              'Mobility Training',
              'Takedown Defense',
              'Submission Offense',
              'Core Workout',
              'Gi Required',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
