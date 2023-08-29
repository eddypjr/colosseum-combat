import React from 'react';

export default function Gallery() {
  return (
    <section>
      <div className="container page-padding py-[4rem]">
        <div className="flex flex-col text-center relative items-center ">
          <p className="text-black relative z-10 text-[15px] uppercase font-bold mb-10">
            Gallery
          </p>
        </div>
        <div className="gallery-grid py-24 w-full h-auto relative ">
          <div id="item-0"></div>
          <div id="item-1"></div>
          <div id="item-2"></div>
          <div id="item-3"></div>
          <div id="item-4"></div>
          <div id="item-5"></div>
        </div>
      </div>
    </section>
  );
}
