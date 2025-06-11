import React from "react";
import Section from "../Section";

function PageHero() {
  return (
    <>
      <Section className="w-screen h-full mobile:h-full bg-white tablet:h-full tablet:w-full" id="hero">
        <div className=" h-full flex flex-col justify-center container tablet:pt-[15%] pt-[12%] mobile:pt-[25%]">
          <h1 data-title-anim className="text-[5.7vw] w-[90%] font-display leading-[1.2] mb-[2vw] mobile:text-[12vw] mobile:mb-[7vw] tablet:text-[7vw] ">Yellow - Dubai’s Top Branding & Marketing Agency</h1>
          <p className="text-[1.75vw] text-black  w-full font-medium leading-[1.4] flex justify-between mobile:flex-col mobile:text-[5vw] tablet:text-[2.5vw] mobile:mb-[5vw] tablet:mb-[5vw]">
            <span data-para-anim className="w-[50%] block mobile:w-full tablet:w-[60%] ">
            Yellow is one of the leading branding agencies in Riyadh, Saudi Arabia. We provide high-quality branding services designed to take your business from the ground up to the next level
            </span>
          </p>
        </div>
      </Section>
    </>
  );
}

export default PageHero;
