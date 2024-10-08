import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'
import Section from '../Section'
import LinkButton from '../Button/LinkButton'
import MediaRender from '../MediaRender'
import { workPathBySlug } from '@/lib/portfolio'

export default function RelatedWork({works, heading, subheading}) {

  return (
    <>
      <Section className='bg-black' id='related-work'>
        <div className='container py-[8%] mobile:py-[15%] bg-white'>

          <div className='w-full flex justify-between mb-[5vw] mobile:flex-col mobile:gap-[5vw] mobile:mb-[10vw]'>
            <div className='w-[50%] mobile:w-full'>
              <SectionTitle text={heading} />
              {subheading && (
                <p data-para-anim className="text-[1.9vw] mt-[3vw] w-[60%] font-medium leading-[1.3] mobile:w-[90%] mobile:text-[5vw] mobile:mb-[7vw] tablet:w-[80%] tablet:text-[2.5vw]">
                  {subheading}
                </p>
              )}
            </div>
            <div className='fadeup flex items-end'>
              <LinkButton btnLink="/our-work" btnText="See All Work" />
            </div>
          </div>

          <div className='w-full flex gap-[2vw] mobile:flex-col mobile:gap-[7vw]'>
            {works.map((work, index) => (
              <div key={index} className={`fadeup group w-full h-full ${index == 2 ? "tablet:hidden" : ""}`}>
                <Link href={workPathBySlug(work.node.slug)} className='h-full w-full block relative group-hover:shadow-2xl duration-300 overflow-hidden rounded-xl'>
                  <div className='h-[30vw] w-full relative overflow-hidden mobile:w-full mobile:h-[80vw] tablet:h-[45vw]'>
                    <MediaRender url={work.node.workFields.featuredImagevideo.node.mediaItemUrl} className='z-[0] group-hover:scale-110 duration-300'/>
                  </div>
                  <div className='absolute right-0 left-0 top-0 bottom-0 py-[2vw] px-[1.5vw] flex flex-col justify-between items-start mobile:px-[5vw] mobile:py-[6vw] tablet:p-[3vw]'>
                    <div className="flex gap-[1vw] mobile:gap-[2vw]">
                      {work.node.portfolioIndustries && work.node.portfolioIndustries.edges.length > 0 && work.node.portfolioIndustries.edges.slice(0, 2).map((category, i) => (
                        <p key={i} className="w-fit border border-white rounded-full backdrop-blur-xl px-[2.5vw] py-[0.4vw] text-[1.2vw] bg-black/20 text-white mobile:text-[4.5vw] mobile:px-[5vw] mobile:py-[1vw] tablet:text-[2.5vw]">
                          {category.node.name}
                        </p>
                      ))}
                    </div>
                    <div className='text-white'>
                      <h3 data-title-anim className="text-[2.2vw] drop-shadow-lg font-display mobile:text-[6vw] tablet:text-[3.5vw] leading-[1.2]">{work.node.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}