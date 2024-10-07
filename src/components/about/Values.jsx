/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionTitle from "../SectionTitle";
import { CustomEase } from "gsap/dist/CustomEase";
import Section from "../Section";

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

export default function values() {
  if (globalThis.innerWidth >= 1024) {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-section",
          pin: true,
          scrub: 0.25,
          start: "top top",
          end: "=+3000 top",
        },
      });
      gsap.from(".card1", {
        yPercent: 100,
        duration: 4,
        scrollTrigger: {
          trigger: ".card-block",
          start: "top 70%",
          end: "top -=400",
          scrub: 0.25
        },
        ease: "power1.out",
      })
      tl.from(".card2", {
        yPercent: 140,

        duration: 2,
        delay: -1,
      })
        .from(".card3", {
          yPercent: 140,

          duration: 2,
          delay: -1,
        })
        .to(".cardfront", {
          rotateY: -180,
          duration: 5,
          stagger: {
            from: "edges",
            each: 0.5,
          },
        })
        .to(".cardback", {
          rotateY: 0,
          duration: 5,
          delay: -6,
          stagger: {
            from: "edges",
            each: 0.5,
          },
        })

    });
  }
  else {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-block",
          start: "top 60%",
          end: "bottom 20%",
        },
      });
      tl.from(".card-container", {
        yPercent: 80,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.5
      })
    });
  }

  return (
    <>
      <Section className=" pt-[10%] pb-[5%] mobile:py-[15%] tablet:pt-[10%]" id="values">
        <div className="container card-block">
          <SectionTitle
            data-title-anim
            className="text-[5.7vw] font-display uppercase mb-[3vw] mobile:mb-[5vw] "
            text={"Our Values"}
          />
          <p
            data-para-anim
            className="text-[2vw] w-[35%] font-medium leading-[1.3] mobile:w-[90%] mobile:text-[5vw] tablet:text-[2.5vw] tablet:w-[50%] "
          >
            Internal culture and our team is our greatest asset. We are intentional about our values of:
          </p>
          <div className="w-full h-[100vh] flex items-center card-section mobile:h-full mobile:mt-[7vw] tablet:h-full">
            <div className=" h-[100vh] w-full py-[7%] flex justify-between items-center mobile:h-full mobile:flex-col mobile:gap-[7vw] tablet:flex-wrap tablet:gap-y-[5vw] tablet:h-full tablet:pt-[10%]">

              <div className="card-container text-white relative w-[29vw] h-[35vw] rounded-[15px] card1 mobile:w-[90vw] mobile:h-[100vw] tablet:w-[41vw] tablet:h-[50vw] mobile:">
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]  mobile:hidden tablet:hidden">
                  <h3 className="text-[3.5vw] font-display">
                    Wellness
                  </h3>
                </div>
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#efefef] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-black rounded-[20px] border-white border-[1px] border-opacity-40 mobile:w-[90vw] mobile:h-[100vw] mobile:justify-center mobile:items-center tablet:w-[41vw] tablet:h-[50vw]">
                  <div className="w-[7vw] h-[7vw] relative mobile:w-[20vw] mobile:h-[20vw] tablet:w-[8vw] tablet:h-[8vw]">
                    <img
                      loading="lazy"
                      src="/assets/images/gifs/flower.gif"
                      alt="wellness-icon"
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="mobile:px-[5vw] mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:w-full">
                    <h4 className="text-[2.5vw] font-display  mb-[1vw] mobile:text-[10vw] mobile:text-center tablet:text-[4vw]">
                      Wellness
                    </h4>
                    <p className="text-[1.2vw] w-full leading-[1.4] mobile:text-[4vw] mobile:text-center tablet:text-[2vw] ">
                      Mental, Emotional and Physical wellness are not just appreciated within Yellow, but encouraged with policies in place. Mental health days - we have them. Participation in Dubai Run - we do it. Steps challenge - check.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-container relative text-white w-[29vw] h-[35vw] rounded-[15px] card2 mobile:w-[90vw] mobile:h-[100vw] tablet:w-[41vw] tablet:h-[50vw] mobile:">
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[41vw] tablet:h-[50vw]  mobile:hidden tablet:hidden">
                  <h3 className="text-[3.5vw] font-display">
                    Curiosity
                  </h3>
                </div>
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#efefef] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-black rounded-[20px] border-white border-[1px] border-opacity-40 mobile:w-[90vw] mobile:h-[100vw] mobile:justify-center mobile:items-center tablet:w-[41vw] tablet:h-[50vw] mobile:">
                  <div className="w-[6vw] relative mobile:w-[20vw] mobile:h-[20vw] tablet:w-[8vw] tablet:h-[8vw]">
                    <img
                      loading="lazy"
                      src="/assets/images/gifs/Bart.gif"
                      alt="curiosity-icon"
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="mobile:px-[5vw] mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:w-full">
                    <h4 className="text-[2.5vw] font-display  mb-[1vw] mobile:text-[10vw] mobile:text-center tablet:text-[4vw] ">
                      Curiosity
                    </h4>
                    <p className="text-[1.2vw] w-full leading-[1.4]  mobile:text-[4vw] mobile:text-center tablet:text-[2vw]">
                      Love for learning is a core value of Yellow. We are not intimidated by advancements in trends, AI and technology, we embrace it and we play and learn, and more importantly we share it with our team and clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-container relative text-white w-[29vw] h-[35vw] rounded-[15px] card3 mobile:w-[90vw] mobile:h-[100vw] tablet:w-[41vw] tablet:h-[50vw] mobile:  ">
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#222222] cardfront flex items-center justify-center rounded-[20px] overflow-hidden border-white border-[1px] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]  mobile:hidden tablet:hidden">
                  <h3 className="text-[3.5vw] font-display">
                    Team Work
                  </h3>
                </div>
                <div className="absolute top-0 left-0 w-[29vw] h-[35vw] bg-[#efefef] cardback py-[4vw] px-[2vw] flex flex-col items-start justify-between text-black rounded-[20px] border-white border-[1px] border-opacity-40 mobile:w-[90vw] mobile:h-[100vw] mobile:justify-center mobile:items-center tablet:w-[41vw] tablet:h-[50vw] mobile:">
                  <div className="w-[5vw] h-[5vw] relative mobile:w-[20vw] mobile:h-[20vw] tablet:w-[8vw] tablet:h-[8vw]">
                    <img
                      loading="lazy"
                      src="/assets/images/gifs/bee.png"
                      alt="teamwork icon"
                      className="object-contain h-full w-full animate-bounce ease-in-out"
                    />
                  </div>
                  <div className="mobile:px-[5vw] mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:w-full">
                    <h4 className="text-[2.5vw] font-display  mb-[1vw]  mobile:text-[10vw] mobile:text-center tablet:text-[4vw]">
                      Team Work
                    </h4>
                    <p className="text-[1.2vw] w-full leading-[1.4] mobile:text-[4vw] mobile:text-center tablet:text-[2vw] ">
                      We prioritise collaboration and helpfulness, internally and with clients and go the extra mile. Yellow was started out of passion and purpose over profit. (Although, we like profit too :))
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
