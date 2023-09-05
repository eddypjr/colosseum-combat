import Image from 'next/image';
import AboutImage from '../../images/about/about.jpeg';

const About: React.FC = () => {

  return (
    <section className="about-section">
      <div className="container page-padding  flex flex-row maxLg:flex-col maxLg:items-center  py-[12.5rem] gap-3">
        <div className="bg-black flex flex-col justify-evenly text-white px-12 py-8 w-1/2 maxLg:w-full">
          <h2 className="text-5xl maxXl:text-3xl font-semibold mb-4 uppercase text-left">
            About Colosseum Combat
          </h2>
          <p className="text-3xl mb-6  maxLg:text-xl">
            Since 2011, we have been providing high-quality, kickboxing
            instruction that showcases how effective kickboxing is as a martial
            art and as a killer workout. Whether you&apos;re looking to shed a
            few pounds, pick up a fun new hobby, or just get in the best shape
            of your life, you&apos;ll find what you&apos;re looking for at FF
            Academy.
          </p>
          <p className="text-3xl maxLg:text-xl">
            Conveniently located in Los Angeles, we offer a 7,000 square foot
            open gym, top of the line equipment, and a safe, learning
            environment where you can learn kickboxing with the help of
            knowledgeable instructors and helpful, like-minded training
            partners.
          </p>
        </div>

        <Image src={AboutImage} alt="About Us" className="w-1/2 maxLg:w-full" blurDataURL='URL' placeholder='blur' />
      </div>
    </section>
  );
};

export default About;
