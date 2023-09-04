import Button from '../button/button';

export default function Hero() {
  return (
    <section className="hero-section min-h-screen bg-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-right maxSm:text-center uppercase">
          <h1 className="maxSm:text-3xl maxMd:text-5xl text-7xl text-white font-bold mb-4">
            Unleash Your Inner Warrior
          </h1>
          <p className="maxSm:text-lg text-4xl text-gray-300 mb-8">
            Train Hard, Fight Strong at Colosseum Combat
          </p>

          <Button
            text="Learn More"
            goTo="/about"
            className="text-[15px] bg-[#ffb703] text-center px-12 py-4 font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta ml-2 hover:text-white"
          />
        </div>
      </div>
    </section>
  );
}
