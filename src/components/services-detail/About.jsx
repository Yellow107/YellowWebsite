import React from 'react'
import Line from '../Line'


export default function About() {
  return (
    <>
      <section className="" id='about'>
        <div className='container pb-[2%] mobile:pt-[5%]'>
          <div className="w-full flex justify-between mt-[5vw] mb-[12vw] mobile:flex-col">
            <p data-para-anim className="text-[1.75vw] font-medium text-[#333333] w-[45%] leading-[1.4] mobile:text-[5vw]  mobile:w-full mobile:mb-[7vw] tablet:text-[2.5vw] tablet:w-[50%]">
              Our approach to branding and design transcends simple aesthetics to
              forge meaningful brands. We believe that a successful brand identity
              requires alignment with core beliefs and an impactful purpose.
            </p>
            <p data-para-anim className="text-[1.3vw] font-medium text-[#111111] w-[40%] mobile:font-normal mobile:text-[4vw]  mobile:w-full tablet:text-[2vw] tablet:w-[40%]">
              Our approach to branding and design transcends simple aesthetics to
              forge meaningful brands. We believe that a successful brand identity
              requires alignment with core beliefs and an impactful purpose.
            </p>
          </div>
          <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw]">
            <div className="col-span-1">
              <h3 data-para-anim className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                Brand workshop, audit and research
              </h3>
              <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
              <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                Relevance. Differentiation. Connections. Conversions. Stay true to
                your brand promise and make a meaningful impact with a clear
                mission and plan of action when you work with our brand strategy
                agency in Dubai
              </p>
            </div>
            <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col ">
              <h3 data-para-anim className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                Why work with us
              </h3>
              <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
              <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                Brand strategy development is inevitably complex and complicated.
                The beauty of working with Yellow is you get to move forward with
                brand building without disrupting your operations. More than
                planning, we’ll help you design a clear, compelling vision and a
                plan to make it happen.
              </p>
            </div>
            <div className="col-span-1 col-start-3 flex mobile:flex-col tablet:flex-col">
              <h3 data-para-anim className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                What to expect: Brand strategy consulting
              </h3>
              <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
              <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                Before we begin defining your brand strategy, it is important for
                us to understand as much about your business, your sector and your
                customers as we can. During our client-agency brand workshop,
                we’ll spend time with you and other key stakeholders in the
                business learning about your aspirations for the brand and your
                market. Together, we’ll begin the process of mapping out the best
                path to elevate your brand to its full potential.
              </p>
            </div>
            <div className='col-span-3 tablet:hidden'>
              <Line className="my-[1.8vw] " />
            </div>

            <div className="col-span-1 mobile:hidden tablet:hidden">
              <p data-para-anim className="text-[1.2vw] font-medium ">
                Relevance. Differentiation. Connections. Conversions. Stay true to
                your brand promise and make a meaningful impact with a clear
                mission and plan of action when you work with our brand strategy
                agency in Dubai.
              </p>
            </div>
            <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden">
              <p data-para-anim className="text-[1.2vw] font-medium ">
                Brand strategy development is inevitably complex and complicated.
                The beauty of working with Yellow is you get to move forward with
                brand building without disrupting your operations. More than
                planning, we’ll help you design a clear, compelling vision and a
                plan to make it happen.
              </p>
            </div>
            <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden">
              <p data-para-anim className="text-[1.2vw] font-medium ">
                Before we begin defining your brand strategy, it is important for
                us to understand as much about your business, your sector and your
                customers as we can. During our client-agency brand workshop,
                we’ll spend time with you and other key stakeholders in the
                business learning about your aspirations for the brand and your
                market. Together, we’ll begin the process of mapping out the best
                path to elevate your brand to its full potential.
              </p>
            </div>
            <div className="h-[1px] col-span-3 bg-black my-[4vw] lineDraw hidden mobile:block tablet:block"></div>
            <div className="my-[3vw] col-span-3 tablet:hidden mobile:hidden">
              <Line />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


