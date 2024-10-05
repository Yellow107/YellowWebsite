import React from "react";
import Image from "next/image";

export default function Pagehero() {
  
  // imageAnimationLeft();

  return (
    <>
      <section className="w-full h-full pt-[10%] flex items-center mobile:h-full mobile:pt-[30%] tablet:h-full  tablet:pt-[15%] bg-white " id="hero">
        <div className="flex justify-between container mobile:flex-col  mobile:gap-[15vw] ">
          <div className="w-full">
            <h1 data-para-anim className="text-[5.8vw] font-display uppercase w-[70%] leading-[1.1] mb-[3vw] mobile:text-[12vw] mobile:w-full mobile:mb-[7vw] tablet:text-[7vw] tablet:w-[80%]">Hey There ! Good to See you !</h1>
            <p data-para-anim className="w-[70%] font-medium text-[1.4vw] mobile:text-[5vw] mobile:w-full tablet:text-[2.2vw] tablet:w-[80%] ">
              As a digital branding agency, we help businesses connect with
              their customers by using a variety of tools and services. This
              includes creating logos for our clients, website design and
              development, content creation, and social media management, among
              others.
            </p>
          </div>
          <div className="w-[50vw] h-[40vw] relative mobile:w-[85vw] mobile:h-[120vw] image-animation-left-wrapper rounded-xl overflow-hidden fadeup">
            <div>
              <Image src="/assets/images/contact/contact-head.webp" alt="contac-head-img" className="object-cover h-full w-full " fill priority={true}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
