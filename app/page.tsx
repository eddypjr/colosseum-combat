import Hero from './components/hero/hero';
import About from './components/about/about';
import CallToActionTop from './components/call-to-action/call-to-action-top';
import Coaches from './components/coaches/coaches';
import Gallery from './components/gallery/gallery';
import Pricing from './components/pricing/pricing';
import Classes from './components/classes/classes';
import CallToActionBottom from './components/call-to-action/call-to-action-bottom';
import Spacer from './components/spacer/spacer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <CallToActionTop />
      <Coaches />
      <Pricing />
      <Gallery />
      <CallToActionBottom />
      <Spacer />
    </main>
  );
}
