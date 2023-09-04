import React from 'react';
import PersonalTrainingCard from './personal-training-card';
import Image from 'next/image';
import TitleBg from '../../images/title-bg.svg';

export default function PersonalTraining() {
  return (
    <section className="classes-section">
      <div className="container page-padding py-[12rem] flex flex-col text-center relative items-center">
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          Private Classes
        </p>
        <Image
          src={TitleBg}
          alt="stroke"
          className="color-logo w-[21rem] absolute top-3"
        />
        <div className="grid grid-cols-3 gap-5 maxSm:grid-cols-1">
          <PersonalTrainingCard
            price={85}
            title="one-on-one personal training"
            descriptions={[
              'Maximum privacy',
              'Personalized training routine',
              'Tailored advice',
              'Individual attention to improve problem areas and ensure that you get the most out of every workout',
            ]}
          />
          <PersonalTrainingCard
            price={130}
            title="small group private classes (2 people)"
            descriptions={[
              'Perfect for couples',
              'Great way to supplement group classes and accelerate your learning',
              'Enjoy focused attention from experienced instructors, allowing for immediate feedback and corrections',
              "Whether it's for self-defense, competition, or fitness, private classes help you work towards specific goals",
            ]}
          />
          <PersonalTrainingCard
            price={165}
            title="small group private classes (3 people)"
            descriptions={[
              'Perfect for small groups',
              'Great way to supplement group classes and accelerate your learning',
              'Confront challenges that match your skill level, ensuring consistent growth and development',
              'Receive personalized coaching tailored to your specific fitness level, goals, and skill set',
            ]}
          />
          <PersonalTrainingCard
            price={200}
            title="medium group private classes (4 people)"
            descriptions={[
              'Perfect for medium sized groups',
              'Arrange sessions at your convenience, making it easier to fit training into your busy lifestyle',
              'Private classes are an excellent way to expedite your progress and grasp martial arts techniques faster',
              'Reduce the risk of injury with personalized warm-ups, stretching, and injury prevention exercises',
            ]}
          />
          <PersonalTrainingCard
            price={225}
            title="medium group private classes (5 people)"
            descriptions={[
              'Perfect for medium sized groups',
              'Build self-assurance in your martial arts abilities as you refine your skills in a private setting',
              'Fine-tune your fighting style and strategies for peak performance in competitions or self-defense scenarios',
              'Enhance mental focus, discipline, and mindfulness through personalized martial arts training',
            ]}
          />
          <PersonalTrainingCard
            price={85}
            title="large group private classes (6+ people)"
            descriptions={[
              'Perfect for large groups',
              'Host an event or grab a group of friends of 6 or more and get special rates',
              'Receive detailed feedback and corrections to refine your technique and optimize performance',
              'Engage in drills and exercises specifically designed to address your unique training needs',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
