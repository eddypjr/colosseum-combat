import Image from 'next/image';
import AboutImage from './about.jpeg';

const About: React.FC = () => {
  return (
    <section className="bg-[#ffb703] py-16 md:py-24 relative">
      <div className="container mx-auto flex md:flex-row items-center">
        <div className="text-white md:w-1/2 relative">
          <div className="about-text bg-black px-12 py-8 w-2/3 ">
            <h2 className="text-4xl font-semibold mb-4 md:mb-8">
              About FF Academy
            </h2>
            <p className="text-lg mb-6">
              Since 2011, we have been providing high-quality, kickboxing
              instruction that showcases how effective kickboxing is as a
              martial art and as a killer workout. Whether you&apos;re looking
              to shed a few pounds, pick up a fun new hobby, or just get in the
              best shape of your life, you&apos;ll find what you&apos;re looking
              for at FF Academy.
            </p>
            <p className="text-lg">
              Conveniently located in Koreatown, Los Angeles, we offer a 7,000
              square foot open gym, top of the line equipment, and a safe,
              learning environment where you can learn kickboxing with the help
              of knowledgeable instructors and helpful, like-minded training
              partners.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={AboutImage}
            alt="About Us"
            className="w-full h-800  md:mb-0 mb-8"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
