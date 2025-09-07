import React from "react";

function Hero() {
  return (
    <section className="pb-8 sm:px-8">
      <div
        className="flex h-[400px] flex-col items-center justify-center bg-[url('/src/assets/home-page.png')] bg-cover bg-center shadow-[inset_0_-374px_250px_10px_rgba(0,0,0,0.25)] sm:h-[500px] md:h-[600px] lg:h-[730px]"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="font-georgia flex flex-col items-center justify-center text-center font-bold">
          <h1 className="text-secondary text-4xl sm:text-5xl md:text-6xl lg:text-[80px]">
            Chinees Restaurant
          </h1>
          <h2 className="-mt-4 text-2xl text-white sm:-mt-6 sm:text-4xl md:-mt-8 md:text-5xl lg:text-6xl">
            KINGS'S PALACE
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
