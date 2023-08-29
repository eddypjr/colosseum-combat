import React from 'react';
import PricingCard from './pricing-card';
import BJJ from './bjj.jpg';
import KB from './kb.jpg';
import Boxing from './boxing.jpg';
import DropIn from './drop-in.jpg';
import Image from 'next/image';
import Button from '../button/button';

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container page-padding py-[12rem]">
        <div className="flex flex-col text-center relative items-center">
          <p className="text-black relative z-10 text-[15px] uppercase font-bold mb-10">
            Plans & Pricing
          </p>
        </div>
        <div className="flex gap-10">
          <PricingCard image={DropIn} price={30} title="Drop In Class" />
          <PricingCard image={Boxing} price={215} title="Boxing" />
          <PricingCard image={KB} price={200} title="KickBoxing" />
          <PricingCard image={BJJ} price={175} title="Brazilian Jiu Jitsu" />
        </div>
      </div>
    </section>
  );
}
