import React from "react";
import Image from "next/image";
import Section from "../Section";

export default function Pagehero() {

  return (
    <>
      <Section id="hero">
        <div className="container">
          <div className="w-full h-full pt-[10%] flex items-center mb-[7vw] mobile:pt-[30%] tablet:pt-[20%]">
            <h1 data-title-anim className="text-[5.7vw] font-display uppercase heading-anim mobile:text-[12vw] tablet:text-[7vw]">Who We Are</h1>
          </div>
          <div className="flex justify-between w-full mobile:flex-col mobile:gap-[10vw] tablet:flex-col tablet:gap-[7vw]">
            <div className="flex flex-col gap-[2vw] tablet:gap-[4vw] w-[60%] mobile:order-2 mobile:w-full mobile:gap-[10vw] tablet:order-2 tablet:w-full">
              <div className="mobile:mt-[4vw]">

                <div className="w-full flex gap-[1vw] items-end pl-[0.5vw] mobile:gap-[3vw]">
                  <Image src="/assets/images/gifs/Minion.gif" className="fadeup" alt="We Are Image" width={60} height={60} />
                  <h2 data-title-anim className="text-[1.6vw] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                    We Are -
                  </h2>
                </div>

                <div className="text-[1.18vw] w-[70%] tablet:w-[90%] mobile:w-full leading-[1.6] mobile:text-[4vw] tablet:text-[2.5vw] pl-[1vw] mobile:pl-[3vw] mt-[2.5vw] space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[4vw]">
                  <p data-para-anim>
                    An <span className="font-bold">extension</span> of your team. The <span className="font-medium relative after:block after:h-[1px] after:bg-black after:w-full after:absolute after:bottom-[2px]">outside perspective</span> you need. Insightful, effective and <span className="font-bold">nice</span> (an underrated but very important quality). The <span className="font-medium relative after:block after:h-[1px] after:bg-black after:w-full after:absolute after:bottom-[2px]">perfect blend</span> of strategy, art, imagination, impeccable taste and a sprinkle of magic.
                  </p>
                  <p data-para-anim>
                    Great thinkers and <span className="font-bold">even better doers</span>. Huge fans of <span className="font-medium relative after:block after:h-[1px] after:bg-black after:w-full after:absolute after:bottom-[2px]">work-life balance.</span>{" "}Namers, strategists, designers, researchers, artists, partners, terrible but enthusiastic singers.
                  </p>
                </div>
              </div>
              <div className="mobile:mb-[10vw]">
                <div className="w-full flex items-end">
                  <Image src="/assets/images/gifs/Bart.gif" className="fadeup mobile:ml-[-3vw]" alt="We Are Image" width={100} height={100} />
                  <h2 data-title-anim className="text-[1.6vw] font-display mb-[1vw] mobile:mb-[3vw] uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                    We Aren&apos;t -
                  </h2>
                </div>

                <div className="text-[1.18vw] w-[70%] tablet:w-[90%] mobile:w-full leading-[1.6] mobile:text-[4vw] tablet:text-[2.5vw] pl-[1.2vw] mobile:pl-[3vw] mt-[0.8vw] space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[4vw]">
                  <p data-para-anim>
                    Able to <span className="font-bold">work for free</span> - got bills to pay, y&apos;all! Complicated, stuffy and <span className="font-medium relative after:block after:h-[1px] after:bg-black after:w-full after:absolute after:bottom-[2px]">full of unhelpful jargon.</span>{" "}Specialised in PR / Events / Media / Web Development - but we can <span className="font-bold">always connect</span> you with them. Know-it-alls.
                  </p>
                  <p data-para-anim>
                    The kind of consultants that prepare a <span className="font-medium relative after:block after:h-[1px] after:bg-black after:w-full after:absolute after:bottom-[2px]">100 slide deck</span> with no substance.{" "}<span className="line-through">&apos;Your suppliers&apos;,</span> we are <span className="font-bold">your partners.</span>{" "}Bureaucratic and <span className="font-medium relative after:block after:h-[1px] after:bg-black after:w-full after:absolute after:bottom-[2px]">slow to move and react.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[41vw] w-[30vw] relative mobile:w-[85vw] rounded-xl mobile:h-[105vw] tablet:w-[80vw] tablet:h-[80vw] overflow-hidden shadow-xl fadeup">
              <Image src="/assets/images/about/partners-image.webp" alt="about-hero" fill className="object-cover h-full w-full tablet:object-top" priority={true} quality={90} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
