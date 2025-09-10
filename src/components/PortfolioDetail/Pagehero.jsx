import React from 'react'
import Section from '../Section'
import MediaRender from '../MediaRender'
import { formatDateYear } from '@/lib/datetime'

export default function Pagehero({ src, title, date, tags, headertags }) {

  return (
    <>
      <Section className='dark relative w-full h-screen mobile:h-[70vh] tablet:h-[50vh]' id='hero'>
        <span className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[6]' />
        <MediaRender url={src} className='bg-gray-500 z-[5]' />
        <div className='container absolute top-0 left-0 right-0 bottom-0 z-[10] flex items-center mobile:py-[15%] mobile:flex-col tablet:flex-col mobile:items-start mobile:justify-end tablet:items-start tablet:justify-center tablet:gap-10'>
          <h1 data-title-anim className='text-[5.4vw] text-white uppercase font-display mobile:text-[12vw] mobile:ps-0 mobile:mb-[10vw] tablet:ps-[2%] tablet:text-[7vw] leading-[1.2]'>
            {title}
          </h1>
          <div className="absolute bottom-[7%] right-[7%] flex flex-wrap gap-[1.5vw] text-white mobile:static tablet:static mobile:gap-[3vw]">
            {
              headertags === null ? (
                tags.slice(0,2).map((tag, index) => (
                  <p
                    key={index}
                    className="w-fit border-[1px] capitalize border-white rounded-[60px] backdrop-blur-md px-[1.7vw] py-[0.5vw] text-[1.2vw] mobile:text-[4vw] mobile:px-[5vw] mobile:py-[1.7vw] bg-white/15 tablet:text-[2vw]"
                  >
                    {tag.name}
                  </p>
                ))
              ) : (
                headertags.edges.map((headertag, index) => (
                  <p
                    key={index}
                    className="w-fit border-[1px] capitalize border-white rounded-[60px] backdrop-blur-md px-[1.7vw] py-[0.5vw] text-[1.2vw] mobile:text-[4vw] mobile:px-[5vw] mobile:py-[1.7vw] bg-white/15 tablet:text-[2vw]"
                  >
                    {headertag.node.name}
                  </p>
                ))
                
              )
            }
            <p className="w-fit border-[1px] border-white rounded-[60px] backdrop-blur-md px-[2.5vw] py-[0.5vw] text-[1.2vw] mobile:text-[4vw] mobile:hidden tablet:text-[2vw] bg-white/15">
              {formatDateYear(date)}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}


