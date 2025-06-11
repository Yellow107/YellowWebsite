import React from "react";
import Image from "next/image";
import img from "../../../public/assets/images/market-entry/advertising.png";

export default function AdvertisingSolutions() {

  return (
    <>
      <section className="w-full h-full bg-black" id="list">
        <div className="container pt-0 mobile:pt-[8%] py-[8%] tablet:py-0 bg-white">
          <div className="space-y-[8vw]">
              <div  className="grid grid-cols-8 h-full gap-x-[3vw] gap-y-[7vw] mobile:flex mobile:flex-col tablet:flex-col tablet:flex tablet:gap-y-[10vw]">
                <div className="col-span-3 w-full h-full">
                  <div className={`w-[37.5vw] h-[42.5vw] fadeup  overflow-hidden relative mobile:w-full mobile:h-[140vw] tablet:w-full tablet:h-[45vw]`}>
                      <Image
                        priority={true}
                        quality={90}
                        src={img}
                        placeholder="blur"
                        alt={`Staff Engagement`}
                        title={`Staff Engagement`}
                        height={810}
                        width={715}
                        className="object-cover w-full h-full"
                      />
                  </div>
                </div>
                <div className="col-start-5 col-span-6 w-full mt-[2vw] mobile:mb-[7vw] tablet:mb-[3vw]">
                  <h2
                    data-para-anim
                    className="text-[3vw] leading-[1.4] font-display mb-[1.5vw] mobile:text-[9vw] mobile:mb-[5vw] tablet:text-[5vw]"
                  >
                    Advertising Solutions in Riyadh & Across Saudi Arabia
                  </h2>
                  <div 
                    className="text-[1.2vw] mb-[2vw] font-medium space-y-[1vw] mobile:space-y-5 mobile:text-[4.5vw] tablet:text-[2.5vw] w-[92%]"  
                  >
                    <p data-para-anim>Yellow is also known as one of the best <b>advertising agencies in Saudi Arabia.</b> We help you advertise your brand on the right platforms at the right time. Whether it’s a billboard or a Facebook ad, we make sure your message is seen and remembered.</p>
                    <div div className=''>
                      <p data-para-anim>In Riyadh, our local team creates custom ad plans to fit your goals and budget. As a reliable <b>advertising agency in Riyadh,</b> we offer:</p>
                      <ul className="pl-5 list-disc">
                          <li data-para-anim>Outdoor advertising support</li>
                          <li data-para-anim>Digital ad placements</li>
                          <li data-para-anim>Campaign planning and execution</li>
                      </ul>
                    </div>
                    <p data-para-anim>Looking for a trusted advertising company in Riyadh? Yellow delivers clear, creative ads that bring real business.</p>
                  </div>
                  
                </div>
              </div>
           
          </div>
        </div>
      </section>
    </>
  );
}
