import Link from 'next/link';
import Hero from './components/hero/hero';
import About from './components/about/about';
import CallToAction from './components/call-to-action/call-to-action';
import Coaches from './components/coaches/coaches';
import Gallery from './components/gallery/gallery';
import Pricing from './components/pricing/pricing';
import Classes from './components/classes/classes';
import PersonalTraining from './components/personal-training/personal-training';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CallToAction />
      <Classes />
      <Coaches />
      <Gallery />
      <Pricing />
      <PersonalTraining />
      <Footer />
    </main>
  );
}
