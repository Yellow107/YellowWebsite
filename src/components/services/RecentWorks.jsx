import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'
import Section from '../Section'
import LinkButton from '../Button/LinkButton'
import { workPathBySlug } from '@/lib/portfolio'
import MediaRender from '../MediaRender'

export default function RecentWorks({works, heading}) {

  return (
    <>
      <Section className='bg-black' id='works'>
        <div className='container py-[8%] mobile:pb-[15%] bg-white'>

          <div className='w-full flex justify-between mb-[5vw] mobile:flex-col mobile:gap-[5vw] mobile:mb-[10vw]'>
            <SectionTitle data-title-anim text={heading} />
            <p data-para-anim className='text-[2vw] font-medium mobile:text-[5vw] w-[70%] mobile:w-[90%] hidden mobile:block'>
              We grow amazing companies through exceptional branding and communications.
            </p>
            <div className='fadeup flex items-end'>
              <LinkButton btnLink="/our-work" btnText="See All Work" />
            </div>
          </div>

          <div className='w-full flex justify-between gap-[2vw] mobile:flex-col mobile:gap-[7vw]'>
            {works.map((work,index) => (
              <div key={work.slug} className={`fadeup group ${index==2?"tablet:hidden":""}`}>
                <Link href={workPathBySlug(work.slug)} className='h-full w-full block relative'>
                  <div className='w-[28vw] h-[30vw] relative rounded-[10px] overflow-hidden mobile:w-full mobile:h-[100vw] tablet:w-[41.5vw] tablet:h-[45vw] group-hover:drop-shadow-3xl group-hover:shadow-xl transition-all ease-out duration-500'>
                    <MediaRender url={work.node.workFields.featuredImagevideo.node.mediaItemUrl} className='z-[0] group-hover:scale-110 duration-300'/>
                  </div>
                  <div className='absolute right-0 left-0 top-0 bottom-0 py-[2vw] px-[1.5vw] flex flex-col justify-between items-start mobile:px-[5vw] mobile:py-[5vw] tablet:px-[2vw] tablet:py-[2.5vw]'>
                    <div className="flex gap-[1vw] mobile:gap-[2vw]">
                      {work.node.portfolioIndustries && work.node.portfolioIndustries.edges.length > 0 && work.node.portfolioIndustries.edges.slice(0, 2).map((category) => (
                        <p key={category.name} className="w-fit border border-current text-white rounded-full backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw] mobile:text-[3.5vw] mobile:px-[3vw] mobile:py-[1.5vw] bg-black/5 tablet:text-[2vw]">
                          {category.node.name}
                        </p>
                      ))}
                    </div>
                    <div className='text-white'>
                      <h3 data-title-anim className="text-[2vw] mb-[1vw] font-display mobile:text-[7vw] tablet:text-[4.5vw]">{work.node.title}</h3>
                      <div data-para-anim className="w-full text-[1.1vw] leading-[1.4] font-medium mobile:text-[4vw] mobile:w-full tablet:text-[2vw]"
                        dangerouslySetInnerHTML={{
                          __html: work.node.excerpt
                        }}
                      />
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


