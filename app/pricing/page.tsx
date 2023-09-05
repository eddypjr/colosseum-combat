import PersonalTraining from '../components/personal-training/personal-training';
import Pricing from '../components/pricing/pricing';

export default function PricingPage() {
  return (
    <section className="">
      <div className="pages-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Plans & Pricing
        </h1>
      </div>
      <Pricing />
      <PersonalTraining />
    </section>
  );
}
