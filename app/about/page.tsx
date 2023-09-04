import About from '../components/about/about';
import Coaches from '../components/coaches/coaches';

export default function AboutPage() {
  return (
    <section className="">
      <div className="schedule-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          About
        </h1>
      </div>
      <About />
      <Coaches />
    </section>
  );
}
