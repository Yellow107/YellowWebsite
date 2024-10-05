/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react'
import LinkButton from '../Button/LinkButton'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Section from '../Section'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Join() {

  const imgWrapper = useRef(null);
  const img = useRef(null);

  if (globalThis.innerWidth > 1023) {
    useGSAP(() => {
      gsap.to(img.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: imgWrapper.current,
          scrub: 0.25,
          start: "top 80%",
          end: "bottom 20%",
        }
      })
    })
  }

  if (globalThis.innerWidth < 1023 && globalThis.innerWidth > 541) {
    useGSAP(() => {
      gsap.to(".join-img", {
        yPercent: 30,
        duration: 2,
        scrollTrigger: {
          trigger: ".join-img",
          scrub: 0.25,
          start: "+=200 90%",
          end: "bottom -=200"
        }
      })
    })
  }

  return (
    <>
      <Section className='bg-body dark' id='join'>
        <div className='container py-[8%] mobile:py-[15%] tablet:py-[10%]'>
          <div className="w-full justify-between flex items-end text-white mobile:flex-col mobile:gap-[5vw] mobile:items-start">
            <h2 data-para-anim className="text-[5.9vw] leading-[1] font-display mb-[1vw] w-[60%] mobile:text-[10vw] mobile:leading-[1.2] mobile:w-full tablet:text-[5.5vw] tablet:leading-[1.3] tablet:mb-[3vw]">Join Yellow and Make a Difference.</h2>
            <div className='fadeup w-fit mb-[2vw]'>
              <LinkButton
                btnLink={"/careers"}
                btnText={"See Open Positions"}
              />
            </div>
          </div>
          <div ref={imgWrapper} className='w-full h-[40vw] mt-[5vw] relative drop-shadow-2xl shadow-2xl overflow-hidden mobile:w-[85vw] mobile:h-[40vh] tablet:h-[45vw] mobile:mt-[10vw]'>
            <Image ref={img} src="/assets/images/about/join-team-big.png" alt='join-img' width={1800} height={1000} className='object-cover mobile:w-full h-full scale-[1.2] join-img object-center -translate-y-[15%] mobile:scale-100 mobile:translate-y-0'/>
          </div>
        </div>
      </Section>
    </>
  )
}


