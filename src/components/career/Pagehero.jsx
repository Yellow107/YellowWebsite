import React from "react";
import Image from "next/image";
import Section from "../Section";

export default function Pagehero() {

  // imageAnimationLeft();

  return (
    <>
      <Section id="hero">
        <div className="container py-[10%] mobile:py-[20%] tablet:py-[15%]">
          <div className=" flex justify-between mobile:flex-col">
            <div className="w-[50%] mobile:w-full mobile:mt-[10%] mobile:mb-[20vw] tablet:w-[60%]">
              <h1 data-title-anim className="text-[5.7vw] uppercase font-display mb-[1vw] mobile:text-[12vw] mobile:mb-[5vw] tablet:text-[6vw]">Work With Us</h1>
              <p data-para-anim className="w-[75%] text-[1.6vw] font-medium mobile:text-[5vw] mobile:w-full tablet:text-[2.2vw] tablet:w-[90%]">
              Want to join a fun, dynamic and creative team based in Dubai? You’ve come to the right place.
              </p>
            </div>
            <div className="w-[30vw] h-[40vw] relative mobile:w-[85vw] mobile:h-[120vw] image-animation-left-wrapper rounded-xl overflow-hidden fadeup">
              <div>
                <Image src="/assets/images/career/work-with-us.webp" quality={100} alt="career-hero" fill priority={true}/>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
