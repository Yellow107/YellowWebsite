import React from 'react'
import Image from 'next/image'

export default function Pagehero() {
  return (
    <>
    <section className='w-full h-full  pt-[10%] tablet:pt-[15%] mobile:pt-[30%]  flex items-center bg-white' id='hero'>
      <div className='container '>
      <h1 data-para-anim className='text-[5.8vw] w-[80%] uppercase font-display mb-[7vw] leading-[1.3] mobile:text-[12vw] tablet:w-[90%]  mobile:w-full tablet:text-[7vw] mobile:mb-[15vw]'>
        Corporate Branding Strategy
        </h1>
        <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative fadeup mobile:w-[85vw] mobile:h-[140vw] tablet:w-[85vw]">
          <Image
            src="/assets/images/service/service-detail/service-detail-hero.png"
            alt="service-detail-hero"
            className='object-cover w-full h-full'
            fill
            priority={true}
          />
        </div>
      </div>
    </section>
    </>
  )
}
 
