/* eslint-disable react-hooks/rules-of-hooks */
import Line from '@/components/Line'
import Section from '@/components/Section'
import React from 'react'
import { titleAnim, paraAnim, fadeUp, lineAnim } from '@/components/gsapAnimations';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/Metadata';
import Layout from '@/components/Layout';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Empty() {
  titleAnim();
  paraAnim();
  fadeUp();
  lineAnim();

  const metadata = {
    title: "404 Page not found - Yellow Agency",
    description: "It looks like nothing was found at this location. Maybe try go back to homepage.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "404"
  }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Section id="404" className='bg-black w-screen h-screen relative dark mobile:h-dvh tablet:h-dvh'>
          {/* Background image */}
          <div className='w-screen h-screen absolute z-[2] blur-2xl'>
            <img src='/assets/images/404-bg.png' alt='404-bg' className='w-full h-full object-cover' />
          </div>

          {/* Blur overlay */}
          <div className='absolute w-screen h-full bg-[#ffffff] opacity-20 z-[3]'></div>

          {/* Content */}
          <div className='h-screen relative flex justify-center items-center w-screen z-[4] bg-transparent'>
            <div className='w-[50%] text-white flex flex-col justify-center items-center gap-[0.5vw] mobile:w-[70%] tablet:w-[60%] tablet:gap-[1vw] mobile:gap-[2vw]'>
              <h1 data-title-anim className='text-[2.85vw] font-medium text-center tracking-wide font-display mobile:text-[6.5vw] tablet:text-[4.5vw] '>
                Page Not Found
              </h1>
              <p data-para-anim className='text-[1.25vw] text-center w-[60%] tracking-wide mobile:text-[3.5vw] mobile:w-full tablet:text-[2.5vw] tablet:w-full'>
                The page you’re looking for doesn’t exist or has been moved.
              </p>
            </div>

            {/* 404 Image */}
            <div className='w-[50vw] h-[16vw] absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] mobile:w-[90vw] mobile:h-[50vw] tablet:h-[50vw] tablet:w-[70vw] fadeup'>
              <img src="/assets/404.svg" alt='404-svg' className='object-contain h-full w-full' />
            </div>
            <div className='absolute bottom-[7%] w-screen z-[5] px-[5vw] error-page-line flex flex-col gap-[2vw] mobile:bottom-[4%] tablet:bottom-[5%] '>
              <Line className="" />
              <div className='bg-white h-[1px] w-full hidden mobile:block tablet:block mobile:mb-[4vw] tablet:mb-[2vw] lineDraw'></div>
              <div className='w-full flex justify-between group items-center'>
                <Link href='/' className='w-full'>
                  <h2 data-title-anim className='text-[3.5vw] text-white font-display mobile:text-[7vw] tablet:text-[5vw]'>Back To Home</h2>


                </Link>
                <div className='w-[4vw] h-[4vw] mobile:w-[7.5vw] mobile:h-[7.5vw] tablet:w-[5.5vw] tablet:h-[5.5vw] fadeup'>
                  <svg className="relative -rotate-[135deg] w-[3.5vw] h-[3.5vw] overflow-hidden mobile:w-[7.5vw] mobile:h-[7.5vw] tablet:w-[5.5vw] tablet:h-[5.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="white" />
                    <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="white" />
                  </svg>

                </div>

              </div>
              <div className='bg-white h-[1px] w-full hidden mobile:block tablet:block mobile:mt-[4vw] tablet:mt-[2vw] lineDraw'></div>

              <Line className="" />
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export default Empty;
