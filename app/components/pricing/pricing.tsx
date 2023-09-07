import PricingCard from './pricing-card';
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

        <div className="flex gap-3 maxLg:gap-5 maxXl:flex-col maxXl:items-center  mt-20">
          <PricingCard
            image="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887113/drop-in_f9cblo.webp"
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
            image="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887109/boxing_jdy0ft.webp"
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
            image="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887111/kb_vd06uc.webp"
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
            image="https://res.cloudinary.com/dxzi6ahcb/image/upload/f_auto,q_auto/v1693887107/bjj_rdbimi.webp"
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
