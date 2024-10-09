/* eslint-disable react-hooks/rules-of-hooks */
import { gsap } from "gsap/dist/gsap";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import LinkButton from "../Button/LinkButton";
import RoundButton from "../Button/RoundButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Portfolio = () => {

  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const createTimeline = (triggerClass, countClasses, start, end) => {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerClass,
          start: start,
          end: end,
        },
      });

      countClasses.forEach((countClass) => {
        tl.to(countClass.selector, {
          top: countClass.top,
          stagger: 0.25,
          delay: countClass.delay,
          duration: 1.5,
          ease: "power2.inOut",
        });
      });
    });
  };

  const counterClasses = [
    { selector: ".counter-3", top: "-1030px", delay: 0.1 },
    { selector: ".counter-2", top: "-1030px", delay: -1.3 },
    { selector: ".counter-1", top: "-215px", delay: -1.3 },
  ];

  const countClasses = [
    { selector: ".count-3", top: "-1030px", delay: 0.1 },
    { selector: ".count-2", top: "-420px", delay: -1.3 },
  ];

  const countNewClasses = [
    { selector: ".countnew-3", top: "-214px", delay: 0.1 },
    { selector: ".countnew-2", top: "-110px", delay: -1.3 },
  ];

  if (globalThis.innerWidth > 1023) {
    useGSAP(() => {
      const container = containerRef.current;
      const scroll = scrollRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "=+2500 top",
        },
      });

      tl.fromTo(scroll, {
        x: "0"
      }, {
        x: "-200vw",
        duration: 4,
        ease: "none"
      });
    });

    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 80%", "bottom 80%");
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
  } else {
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 80%", "bottom 80%");
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
  }

  return (
    <Section className="py-[5%] mobile:py-[15%]" id="portfolio">

      <div className="container">
        <div className="flex justify-between items-start mobile:flex-col mobile:gap-[5vw]">
          <SectionTitle text="Our Work" />
          <div className="w-[45%] mobile:w-full tablet:w-[45%] mt-[1%]">
            <p className="text-[1.9vw] fadeup font-medium leading-[1.4] mobile:text-[4vw]">
              We are lucky to have partnered with several brands over the last 7+ years. Our experience pans various industries from startups to established global brands with a keen focus on collaboration and results.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end mt-[5vw] mobile:flex-col mobile:items-start mobile:gap-[10vw] mobile:mt-[10vw]">
          <div className="flex items-center justify-start gap-[5vw] mobile:grid mobile:grid-cols-2 mobile:items-start mobile:space-between mobile:w-full mobile:gap-y-[5vw]">
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="font-display">
                <div className="counter">
                  <div className="counter-1 digit">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num text-center">2</div>
                  </div>
                  <div className="counter-2 digit">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                  </div>
                  <div className="counter-3 digit ">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                  </div>
                  <div className="counter-4 digit">
                    <div className="num">+</div>
                  </div>
                </div>
              </div>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0">
                Projects
              </p>
            </div>
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="countnew font-display">
                <div className="countnew-2 digit">
                  <div className="num">0</div>
                  <div className="num text-center">1</div>
                </div>
                <div className="countnew-3 digit">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                </div>
                <div className="countnew-4 digit">
                  <div className="num">+</div>
                </div>
              </div>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0">
                Industries
              </p>
            </div>
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="count font-display">
                <div className="count-2 digit">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                </div>
                <div className="count-3 digit ">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                  <div className="num">6</div>
                  <div className="num">7</div>
                  <div className="num">8</div>
                  <div className="num">9</div>
                  <div className="num">0</div>
                </div>
                <div className="count-4 digit">
                  <div className="num">+</div>
                </div>
              </div>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0">
                Brands Named
              </p>
            </div>
          </div>
          <div className="hidden mobile:block">
            <LinkButton btnLink={"/"} btnText={"See All Work"} />
          </div>
        </div>

      </div>
      <div
        ref={containerRef}
        className="horizontal-scroll w-screen h-screen overflow-hidden mt-[5vw] mobile:mt-[12vw] mobile:h-auto tablet:h-auto"
      >
        <div
          ref={scrollRef}
          className="flex h-screen w-[300%] mobile:h-auto whitespace-nowrap mobile:flex-col mobile:w-full mobile:gap-[10vw] tablet:flex-col tablet:gap-[5vw] tablet:w-full tablet:justify-center tablet:items-center tablet:h-auto"
        >
          <div className="h-screen w-[90vw] relative pannel overflow-hidden p-[5vw] mobile:h-[50vh] mobile:mx-auto tablet:rounded-xl mobile:rounded-xl tablet:h-[40vh]" data-magnetic-target data-magnetic-strength="200">
            <Image
              quality={100}
              src="/assets/images/homepage/mitsubishi.webp"
              alt="Mitsubishi Image"
              fill
              loading="lazy"
              className="brightness-75 object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] -translate-y-1/2">
              <RoundButton href="/our-work/mitsubishi-motors" text="View More" className="magnetic-inner pointer-events-auto tablet:w-[10vw] tablet:h-[10vw] tablet:text-[1.5vw] tablet:px-[2vw]" />
            </div>
            <div className="relative w-full flex text-white h-full items-end">
              <div className="flex justify-between items-end w-full mobile:flex-col mobile:h-full mobile:items-start">
                <div className="whitespace-normal flex gap-[2.5vw] flex-col mobile:order-2">
                  <h3 className="text-[2.8vw] font-display leading-[1] mobile:text-[8vw] tablet:text-[5vw]">
                    Mitsubishi Motors MEA
                  </h3>
                </div>
                <div className="flex flex-col justify-between gap-[1.5vw] items-end text-[1.2vw] mobile:text-[4vw] tablet:text-[2vw] mobile:w-full mobile:items-end">
                  <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg mobile:hidden">
                    2024
                  </p>
                  <div className="flex items-center gap-[2vw]">
                    <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg mobile:px-[4vw] mobile:py-[1vw]">
                      Automotive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen w-[90vw] relative pannel overflow-hidden p-[5vw] mobile:h-[50vh] mobile:mx-auto tablet:rounded-xl mobile:rounded-xl tablet:h-[40vh]" data-magnetic-target data-magnetic-strength="200">
            <Image
              quality={100}
              src="/assets/images/homepage/barakat.webp"
              alt="Barakat Image"
              fill
              loading="lazy"
              className="brightness-75 object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] -translate-y-1/2">
              <RoundButton href="/our-work/barakat" text="View More" className="magnetic-inner pointer-events-auto tablet:w-[10vw] tablet:h-[10vw] tablet:text-[1.5vw] tablet:px-[2vw]" />
            </div>
            <div className="relative w-full flex text-white h-full items-end">
              <div className="flex justify-between items-end w-full mobile:flex-col mobile:h-full mobile:items-start">
                <div className="whitespace-normal flex gap-[2.5vw] flex-col mobile:order-2">
                  <h3 className="text-[2.8vw] font-display leading-[1] mobile:text-[8vw] tablet:text-[5vw]">
                    Barakat
                  </h3>
                </div>
                <div className="flex flex-col justify-between gap-[1.5vw] items-end text-[1.2vw] mobile:text-[4vw] tablet:text-[2vw] mobile:w-full mobile:items-end">
                  <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg mobile:hidden">
                    2024
                  </p>
                  <div className="flex items-center gap-[2vw]">
                    <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg mobile:px-[4vw] mobile:py-[1vw]">
                      FMCG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen w-[90vw] relative pannel overflow-hidden p-[5vw] mobile:h-[50vh] mobile:mx-auto tablet:rounded-xl mobile:rounded-xl tablet:h-[40vh]" data-magnetic-target data-magnetic-strength="200">
            <Image
              quality={100}
              src="/assets/images/homepage/cafu.webp"
              alt="Cafu Image"
              fill
              loading="lazy"
              className="brightness-75 object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] -translate-y-1/2">
              <RoundButton href="/our-work/cafu-branding-and-digital" text="View More" className="magnetic-inner pointer-events-auto tablet:w-[10vw] tablet:h-[10vw] tablet:text-[1.5vw] tablet:px-[2vw]" />
            </div>
            <div className="relative w-full flex text-white h-full items-end">
              <div className="flex justify-between items-end w-full mobile:flex-col mobile:h-full mobile:items-start">
                <div className="whitespace-normal flex gap-[2.5vw] flex-col mobile:order-2">
                  <h3 className="text-[2.8vw] font-display leading-[1] mobile:text-[8vw] tablet:text-[5vw]">
                    Cafu
                  </h3>
                </div>
                <div className="flex flex-col justify-between gap-[1.5vw] items-end text-[1.2vw] mobile:text-[4vw] tablet:text-[2vw] mobile:w-full mobile:items-end">
                  <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg mobile:hidden">
                    2024
                  </p>
                  <div className="flex items-center gap-[2vw]">
                    <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg mobile:px-[4vw] mobile:py-[1vw]">
                      Automotive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-[30vw] relative bg-amber-50 tablet:bg-transparent mobile:bg-transparent flex items-center justify-center flex-col pannel mobile:hidden tablet:h-fit tablet:gap-[3vw]">
            <p className="font-display text-[4vw] tablet:text-[6vw] tablet:hidden">Want More?</p>
            <LinkButton btnText="View Showcase" btnLink="/our-work" className="tablet:text-[3vw]" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
