import React from 'react'
import Line from '../Line'

export default function Pagehero() {
  return (
    <>
    <section className="w-full h-full mobile:h-full bg-white" id='hero'>
        <div className="h-full flex flex-col justify-center container pt-[10%] tablet:pt-[20%] mobile:pt-[30%] mobile:pb-[10%] tablet:pb-[10%]">
          <h1 data-title-anim className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] uppercase mobile:text-[12vw] tablet:text-[7vw]">Services</h1>
          <p  className="text-[1.5vw] w-full font-medium leading-[1.4] flex justify-between mobile:flex-col mobile:text-[4.5vw] tablet:text-[2.5vw] mb-[7vw] tablet:mb-0">
            <span data-para-anim className="w-[50%] text-[#333333] block mobile:w-full tablet:w-[60%]">
              We grow amazing companies through exceptional branding and communications. As a brand and digital agency, we often blur the line between business advisor, brand guardian, sounding board, marketing consultant.
            </span>
          </p>
          <div className='w-full h-[1px] bg-black  tablet:mt-[5vw] mobile:mt-[10vw] lineDraw hidden mobile:block tablet:block'></div>
          <Line className="mobile:hidden tablet:hidden"/>
        </div>
      </section>
      
    </>
  )
}


