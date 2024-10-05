import React from 'react'
import Image from 'next/image'
import Section from '../Section'

export default function Pagehero() {
  return (
    <>
      <Section id='hero' className='dark bg-white'>
        <div className='w-[100vw] h-[80vh] relative tablet:h-[40vh]'>
          <Image src="/assets/images/career/career-detail-hero.png" alt={`Career Detail Image`} quality={100} fill className='object-cover brightness-50 h-full w-full mobile:object-cover' priority/>
          <div className='container absolute top-[50%] translate-y-[-50%] z-[2] mobile:top-[70%] tablet:top-[70%]'>
            <div className='text-white'>
              <h1 data-title-anim className='text-[5.7vw] uppercase font-display mb-[1vw] mobile:text-[10vw] mobile:leading-[1.3] mobile:mb-[7vw] tablet:text-[6vw]'>
                Career Detail
              </h1>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}


