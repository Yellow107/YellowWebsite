/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import Image from 'next/image';
import Line from '@/components/Line';
import LinkButton from '@/components/Button/LinkButton';
import React from 'react';
import RelatedWork from '@/components/RelatedWork';

export default function servicesdetail({ recentWorks }) {
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Digital Marketing Agency In Dubai - Transform Your Brand Online",
    description: "Strengthen your presence online without disrupting your business. For results-driven digital marketing services in Dubai, contact Yellow Branding.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/digital"
  }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>

        {/* Hero Section  */}
        <section className='w-full h-full  pt-[10%] tablet:pt-[15%] mobile:pt-[30%] flex items-center bg-white' id='hero'>
          <div className='container '>
            <h1 data-para-anim className='text-[5.8vw] w-[80%] uppercase font-display mb-[7vw] leading-[1.3] mobile:text-[12vw] tablet:w-[90%]  mobile:w-full tablet:text-[7vw] mobile:mb-[15vw]'>
              Your Digital Agency
            </h1>
            <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative fadeup mobile:w-[85vw] mobile:h-[100vw] tablet:w-[85vw]">
              <Image
                quality={100}
                src="/assets/images/service/digital/Digital-Hero.webp"
                alt="service-detail-hero"
                className='object-cover w-full h-full'
                fill
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="" id='about'>
          <div className='container pb-[2%] mobile:pt-[5%]'>

            <div className="w-full flex justify-between mt-[5vw] mb-[12vw] mobile:flex-col">
              <p data-para-anim className="text-[1.75vw] font-medium text-[#333333] w-[45%] leading-[1.4] mobile:text-[5vw]  mobile:w-full mobile:mb-[7vw] tablet:text-[2.5vw] tablet:w-[50%]">
                At Yellow, we view digital elements as vital strategic tools – whether it’s your website, app, your social media presence or your digital campaign.
              </p>
              <p data-para-anim className="text-[1.3vw] font-medium text-[#111111] w-[40%] mobile:font-normal mobile:text-[4vw]  mobile:w-full tablet:text-[2vw] tablet:w-[40%]">
                As an experienced agency offering digital marketing services in Dubai and the rest of the UAE, we believe that your digital presence is an essential opportunity for your brand to display another aspect of its personality and truly connect with your audience.
              </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw]">

              <div className="col-span-1">
                <h3 data-para-anim className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                  Digital Audit & Strategy
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                  Our starting point upon engagement is to conduct an in-depth digital assets audit of your brand as well as your competitors and looking at benchmarks within your industry. Based on our findings, and your brand’s positioning, we then craft a thorough digital strategy with a roadmap to implement the recommendations.
                </p>
              </div>

              <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col">
                <h3 data-para-anim className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                  Digital assets execution
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw] tablet:mb-[1.5vw] mobile:mb-[2.5vw]'>
                  Based on the digital strategy, we plan out the execution, ensuring your brand’s message is clear and succinct and your voice is consistent. Our objective is to convert your potential customers and drive them through the purchase funnel - we thus craft content and design to capture attention during the awareness, consideration and conversion and advocacy cycle.
                </p>
              </div>

              <div className="col-span-1 col-start-3 flex mobile:flex-col tablet:flex-col">
                <h3 data-para-anim className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                  Why work with us?
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw] tablet:mb-[1.5vw] mobile:mb-[2.5vw]'>
                  As a leading digital agency in Dubai that has built a name for itself in creating content that converts and cuts through the noise, Yellow is your ideal partner if you want to achieve a strong digital presence.
                </p>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw] tablet:mb-[1.5vw] mobile:mb-[2.5vw]'>
                  Make your digital presence felt and fortify your brand by working with us at Yellow.
                </p>
              </div>

              <div className='col-span-3 tablet:hidden'>
                <Line className="my-[1.8vw] " />
              </div>

              {/* Mobile Content */}
              <div className="col-span-1 mobile:hidden tablet:hidden space-y-[1vw]">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Our starting point upon engagement is to conduct an in-depth digital assets audit of your brand as well as your competitors and looking at benchmarks within your industry. Based on our findings, and your brand’s positioning, we then craft a thorough digital strategy with a roadmap to implement the recommendations.
                </p>
              </div>

              <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden space-y-[1vw]">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Based on the digital strategy, we plan out the execution, ensuring your brand’s message is clear and succinct and your voice is consistent. Our objective is to convert your potential customers and drive them through the purchase funnel - we thus craft content and design to capture attention during the awareness, consideration and conversion and advocacy cycle.
                </p>
              </div>

              <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden space-y-[1vw]">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  As a leading digital agency in Dubai that has built a name for itself in creating content that converts and cuts through the noise, Yellow is your ideal partner if you want to achieve a strong digital presence.
                </p>
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Make your digital presence felt and fortify your brand by working with us at Yellow.
                </p>
              </div>

              <div className="h-[1px] col-span-3 bg-black my-[4vw] lineDraw hidden mobile:block tablet:block"></div>
              <div className="my-[3vw] col-span-3 tablet:hidden mobile:hidden">
                <Line />
              </div>
            </div>
          </div>
        </section>

        {/* Detail Section */}
        <section className="w-full h-full bg-black " id="detail">
          <div className=" container mobile:flex mobile:flex-col tablet:flex-col tablet:flex pb-[5%] bg-white">

            <div>
              <div className="tablet:flex mobile:flex mobile:flex-col tablet:gap-[2vw] flex mobile:gap-0 gap-[15vw]">
                <div className="col-start-3 flex justify-end mobile:justify-center tablet:order-1 order-1 mobile:order-none">
                  <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative fadeup mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                      <Image
                        loading="lazy"
                        src="/assets/images/service/digital/Website-and-app-design.png"
                        alt="Website and app design"
                        className="absolute h-full w-full object-cover"
                        fill
                      />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                  <h2 data-para-anim className="text-[2.5vw] capitalize font-display mobile:text-[8vw] tablet:text-[4vw]">
                      Website and app design
                  </h2>
                    <p data-para-anim className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]">
                      Yellow is a digital marketing company that can design and create your online brand presence, in a way that captures the hearts and minds of your customers.
                    </p>
                    <p data-para-anim className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]">
                      We’ll work with you from concept to finish – ensuring that your brand personality comes through in your website or app content, design and user experience.
                    </p>
                  <div className="fadeup mt-[1vw]">
                    <LinkButton
                      btnLink={"/contact-us"}
                      btnText={"Connect With Yellow"}
                    />
                  </div>
                </div>
              </div>
              <div className="h-[1px] col-span-3 bg-black my-[2vw] tablet:my-[6vw] lineDraw hidden tablet:block mobile:block"></div>
              <div className="my-[3vw] tablet:h-[2px] tablet:my-[6vw] tablet:hidden">
                <Line />
              </div>
            </div>

            <div>
              <div className="tablet:flex mobile:flex mobile:flex-col tablet:gap-[2vw] flex mobile:gap-0 gap-[15vw]">
                <div className="col-start-3 flex justify-end mobile:justify-center tablet:order-1 order-1 mobile:order-none">
                  <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative fadeup mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                      <video
                        loop
                        autoPlay
                        muted
                        playsInline
                        loading="lazy"
                        src="/assets/images/service/digital/Social_Media_Mitsubishi.mp4"
                        alt="Social Media Management Image"
                        className="absolute h-full w-full object-cover"
                        fill
                      />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                  <h2 data-para-anim className="text-[2.5vw] capitalize font-display mobile:text-[8vw] tablet:text-[4vw]">
                    Social Media Management
                  </h2>
                    <p data-para-anim className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]">
                      Social media is usually the first interaction your prospective customer will have with your brand. Thus, it is essential that your voice and aesthetic is curated and communicates how your brand is different from the market. Yellow supports clients with planning their social media strategy and executing on a monthly basis with content, whether it is reels or highlights, linkedin posts or YouTube Videos. And, we are obsessed with data and insights.
                    </p>
                    <p data-para-anim className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]">
                      We will measure the effectiveness of the creative, and adapt and pivot based on learnings consistently. We are also constantly on the lookout for trends and always thinking of ways to apply them on our clients social media pages.
                    </p>
                  <div className="fadeup mt-[1vw]">
                    <LinkButton
                      btnLink={"/contact-us"}
                      btnText={"Connect With Yellow"}
                    />
                  </div>
                </div>
              </div>
              <div className="h-[1px] col-span-3 bg-black my-[2vw] tablet:my-[6vw] lineDraw hidden tablet:block mobile:block"></div>
              <div className="my-[3vw] tablet:h-[2px] tablet:my-[6vw] tablet:hidden">
                <Line />
              </div>
            </div>

          </div>
        </section>


        {/* Related Works Section */}
        <RelatedWork
          works={recentWorks}
          heading={"Our Work"}
          subheading={"We grow amazing companies through exceptional branding and communications."}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const recentWorks = await getRelatedPortfolioForPages("digital");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}