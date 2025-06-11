import React from "react";
import Image from "next/image";

export default function Trusted() {

  return (
    <>
      <section className="w-full h-full bg-black" id="list">
        <div className="container pt-[7%] mobile:pt-[10%] tablet:py-0 bg-white">
          <div className="space-y-[8vw]">
            <div className="grid grid-cols-7 h-full gap-x-[3vw] gap-y-[7vw] mobile:flex mobile:flex-col tablet:flex-col tablet:flex tablet:gap-y-[10vw]">
              <div className="col-span-4 w-full h-full">
                <div className={`w-[48vw] h-[28vw] fadeup rounded-xl overflow-hidden relative mobile:w-full mobile:h-[50vw] tablet:w-full tablet:h-[45vw]`}>
                  <Image
                    priority={true}
                    quality={90}
                    src={"/assets/images/market-entry/trusted.png"}
                    alt={`Trusted Image`}
                    title={`Trusted Image`}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="col-start-5 col-span-4 w-full mobile:mb-[7vw] tablet:mb-[3vw]">
                <h2
                  data-para-anim
                  className="text-[2.5vw] font-display leading-[1.3] capitalize mb-[1.5vw] mobile:text-[9vw] mobile:mb-[5vw] tablet:text-[5vw] "
                >
                  Your Trusted Branding Agency now serving Saudi Arabia
                </h2>
                <div
                  className="text-[1.2vw] font-medium mb-[2vw] space-y-[1vw] mobile:space-y-5 mobile:text-[4.5vw] tablet:text-[2.5vw] "
                >
                  <p data-para-anim>We help businesses in Saudi Arabia grow with smart branding, creative design, and powerful digital marketing. Whether you&apos;re in Riyadh or anywhere across the Kingdom, we create brands that stand out and connect with people.</p>
                  <p data-para-anim>Our focus is simple – to build your brand the right way. We make sure every part of your business looks and feels professional, modern, and made for your audience. From logo design to social media campaigns, Yellow has you covered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
