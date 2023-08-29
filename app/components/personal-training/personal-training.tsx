import React from 'react'
import Button from '../button/button';

export default function PersonalTraining() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-white">
          <h2 className="text-[36px] font-bold">Need a Fitness Trainer?</h2>
          <h3 className="text-[28px] font-bold mb-20">
            <span className="text-[#FF0336]">Call:</span> +123-456789
          </h3>
          <Button
            text="purchase now"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
}
