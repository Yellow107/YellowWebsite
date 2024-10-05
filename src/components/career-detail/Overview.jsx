import React from 'react'
import Section from '../Section'

export default function Overview() {
  return (
    <>
      <Section className='bg-black' id='overview'>
        <div className='container bg-white py-[7%] flex justify-between mobile:flex-col mobile:gap-[5vw] mobile:py-[12%]'>
          <h2 data-title-anim className='text-[5.7vw] font-display w-[50%] mobile:text-[10vw] leading-[1]'>
            Overview
          </h2>
          <div className='w-[45%] space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[3vw] text-[1.2vw] font-medium mobile:w-full mobile:text-[4.5vw] tablet:text-[2vw] tablet:w-[60%] fadeup'>
            <p>
              Are you someone with big dreams, endless curiosity, and a passion for making things happen?
            </p>
            <p>
              Do you obsess over alignments and punctuation, devour art, and curate an Instagram that’s #goals (minus the ‘public figure’ label, of course)?
            </p>
            <p>
              Are you a master multitasker, juggling tasks like a pro, and thrive in an environment that blends laughter with hard work?
            </p>
            <p>
              If this sounds like you, we’re excited to meet you! Simply fill out the form below, and let’s see if we’re a perfect match. Get ready to swipe right on your next adventure!
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}


