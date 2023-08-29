import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section min-h-screen bg-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-right uppercase">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-4">
            Unleash Your Inner Warrior
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Train Hard, Fight Strong at Fusion Fight Academy!
          </p>
          <Link href="/classes">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Our Classes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
