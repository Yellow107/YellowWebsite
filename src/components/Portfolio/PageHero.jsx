import React from "react";
import Line from "../Line";
import Section from "../Section";

function PageHero() {
  return (
    <>
      <Section className="w-screen h-full mobile:h-full bg-white tablet:h-full tablet:w-full" id="hero">
        <div className=" h-full flex flex-col justify-center container tablet:pt-[15%] pt-[12%] mobile:pt-[25%]">
          <h1 data-title-anim className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] mobile:text-[12vw] mobile:mb-[7vw] tablet:text-[7vw] ">OUR WORK</h1>
          <p className="text-[1.5vw] text-black  w-full font-medium leading-[1.4] flex justify-between mobile:flex-col mobile:text-[4vw] tablet:text-[2.2vw] mb-[5vw]">
            <span data-para-anim className="w-[55%] block mobile:w-full tablet:w-[60%] ">
              As a digital branding agency, we help businesses connect with their
              customers by using a variety of tools and services. We have worked
              with a range of clients, from budding entrepreneurs, to some of the
              biggest brands in the UAE.
            </span>
          </p>
          <div className="tablet:block mobile:block h-[1px] w-full bg-black mobile:my-[10vw] lineDraw hidden "></div>
          <Line className="mobile:hidden" />
        </div>
      </Section>
    </>
  );
}

export default PageHero;
