import Section from "@/components/Section";
import React from "react";
import { titleAnim , paraAnim ,fadeUp} from '@/components/gsapAnimations';
import Header from "@/components/Header";
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/Metadata";
import BlackButton from "@/components/Button/BlackButton";

function Thankyou() {
    titleAnim();
    paraAnim();
    fadeUp();

    const metadata = {
      title: "Thankyou - Yellow Agency",
      description: "Thanks for getting in touch! We'll contact you shortly to discuss how we can help your business grow and succeed online.",
      img: "home.png",
      date_published: "2017-10-22T06:17",
      date_modified: "2024-08-01T12:32",
      slug: "thank-you"
    }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Header/>
        <Section id={"thank-you"} className="bg-black">
          <div className="container flex justify-center items-center bg-white">
            <div className="w-full h-screen flex flex-col justify-center items-center ">
              <h1 data-title-anim className="text-center text-[10vw] font-medium leading-[1.3] tablet:text-[15vw] mobile:text-[18vw]">
                Thank You
              </h1>
              <p data-para-anim className="text-center w-[30%] text-[1.4vw] font-medium tablet:text-[3vw] tablet:w-[70%] mobile:text-[5vw] mobile:w-[90%]">
                We Got Your Message. We’ll Get Back to You Soon.
              </p>
              <div className="mt-[2vw] tablet:mt-[7vw] mobile:mt-[12vw] fadeup">
               <BlackButton btnLink={"/"} btnText={"Back To HomePage"}/>
              </div>
            </div>
          </div>
        </Section>
      
    </>
  );
}

export default Thankyou;
