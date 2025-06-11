import React from "react";
import Line from "../Line";

export default function Trusted() {
  return (
    <>
      <section className="w-full h-full bg-black" id="list">
        <div className="container pt-[7%] mobile:pb-[10%] tablet:py-[10%] bg-white">
          <div className="">
            <div className="grid grid-cols-7 h-full mb-[5vw] gap-x-[3vw] gap-y-[7vw] mobile:flex mobile:flex-col tablet:flex-col tablet:flex tablet:gap-y-[3vw]">
              <div className="col-span-4 w-full h-full">
                <div
                  className={`w-[50vw] fadeup rounded-xl overflow-hidden relative mobile:w-full tablet:w-full`}
                >
                  <h2
                    data-para-anim
                    className="text-[2.5vw] w-[65%] font-display leading-[1.3] mb-[1.5vw] mobile:text-[9vw] mobile:mb-[5vw] tablet:text-[5vw] mobile:w-full tablet:w-full "
                  >
                    Our Branding & Marketing Services in Saudi Arabia
                  </h2>
                </div>
              </div>
              <div className="col-start-5 col-span-5 w-full mobile:mb-[7vw] tablet:mb-[3vw]">
                <div className="text-[1.2vw] font-medium mb-[2vw] space-y-[1vw] mobile:space-y-5 mobile:text-[4.5vw] tablet:text-[2.5vw]">
                  <p data-para-anim>
                    As one of the most trusted marketing agencies in Saudi
                    Arabia. We understand the local market and help you plan
                    your next steps clearly and purposefully. Our marketing team
                    works with you to promote your brand the right way.
                  </p>
                  <p data-para-anim>
                    At Yellow, we offer a full range of branding and marketing
                    services to help businesses across Saudi Arabia build a
                    strong image and connect with their audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw] ">
              <div className="col-span-1">
                <h3
                  data-para-anim
                  className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw]  leading-[1.4]"
                >
                  Brand Strategy
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden font-medium mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  We help you plan how your brand should grow. Our brand strategy service in Saudi Arabia includes research, positioning, and clear goals that show what makes your business special.
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col ">
                <h3
                  data-para-anim
                  className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] leading-[1.4]"
                >
                  Brand Identity
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden font-medium mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  We create your brand’s look and feel – from colours to logos to style. Our brand identity service helps businesses in Saudi Arabia present a professional and trusted image.
                </p>
              </div>
              <div className="col-span-1 col-start-3 flex mobile:flex-col tablet:flex-col">
                <h3
                  data-para-anim
                  className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw]  leading-[1.4]"
                >
                  Brand Naming
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden font-medium mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  Finding the right name for your business is important. We provide brand naming services that are simple, catchy, and fit perfectly with your market in Saudi Arabia.
                </p>
              </div>
              <div className="col-span-3 tablet:hidden">
                <Line className="my-[1.8vw] " />
              </div>

              <div className="col-span-1 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium">
                  We help you plan how your brand should grow. Our brand strategy service in Saudi Arabia includes research, positioning, and clear goals that show what makes your business special.
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium">
                  We create your brand’s look and feel – from colours to logos to style. Our brand identity service helps businesses in Saudi Arabia present a professional and trusted image.
                </p>
              </div>
              <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium">
                  Finding the right name for your business is important. We provide brand naming services that are simple, catchy, and fit perfectly with your market in Saudi Arabia.
                </p>
              </div>
              <div className="h-[1px] col-span-3 bg-black my-[4vw] lineDraw hidden mobile:block tablet:block"></div>
              <div className="my-[6vw] col-span-3 tablet:hidden mobile:hidden">
                <Line />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
