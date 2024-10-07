/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import {
  titleAnim,
  paraAnim,
  lineAnim,
  fadeUp,
} from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getRelatedPortfolioForPages } from "@/lib/portfolio";
import Image from "next/image";
import Line from "@/components/Line";
import LinkButton from "@/components/Button/LinkButton";
import React from "react";
import RelatedWork from "@/components/RelatedWork";

export default function servicesdetail({ recentWorks }) {
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Brand Identity Creation Dubai - Yellow Agency",
    description:
      "We use brand identity, logo design, and graphic design to build compelling brands that exist across traditional, retail, digital, and social media channels.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/brand-identity",
  };

  const services = [
    {
      title: "Brand messaging and tone of voice",
      paragraphs: [
        "How your brand speaks is driven by a carefully considered personality and brand archetype. Is the brand authoritative? Perhaps it’s a retail brand and should take a slightly less serious tone with its audiences? Whatever the case, it’s important that your brand speaks with a voice that is congruent with how it looks, appears and acts.",
        
      ],
      image: "/assets/images/service/brand-identity/Brand-Messaging.png",
    },
  
    {
      title: "Brand guidelines",
      paragraphs: [
        "We develop a set of guidelines for our brands to provide our clients and their partners with the tools they need to ensure the brand continues to stay consistent. We make sure to include everything anyone will ever need to fully understand, replicate, build on and even improve the overall brand experience. These manuals are much more than a simple set of rules and regulations – they aim to introduce internal and external stakeholders to the brand, give them insight into the brand’s personality and the tone it should be taking with its customers.",
      ],
      image: "/assets/images/service/brand-identity/Brand-Guidelines.png",
    },
  ];

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        {/* Hero Section  */}
        <section
          className="w-full h-full  pt-[10%] tablet:pt-[15%] mobile:pt-[30%]  flex items-center bg-white"
          id="hero"
        >
          <div className="container ">
            <h1
              data-para-anim
              className="text-[5.8vw] w-[80%] uppercase font-display mb-[7vw] leading-[1.3] mobile:text-[12vw] tablet:w-[90%]  mobile:w-full tablet:text-[7vw] mobile:mb-[15vw]"
            >
              Brand Identity
            </h1>
            <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative fadeup mobile:w-[85vw] mobile:h-[100vw] tablet:w-[85vw]">
              <Image
                quality={100}
                src="/assets/images/service/brand-identity/brand-identity-listing.png"
                alt="brand-identity-hero"
                className="object-cover w-full h-full"
                fill
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="" id="about">
          <div className="container pb-[2%] mobile:pt-[5%]">
            <div className="w-full flex justify-between mt-[5vw] mb-[12vw] mobile:flex-col">
              <p
                data-para-anim
                className="text-[1.75vw] font-medium text-[#333333] w-[45%] leading-[1.4] mobile:text-[5vw]  mobile:w-full mobile:mb-[7vw] tablet:text-[2.5vw] tablet:w-[50%]"
              >
                Our approach to branding and design transcends simple aesthetics
                to forge meaningful brands. We believe that a successful brand
                identity requires alignment with core beliefs and an impactful
                purpose.
              </p>
             
            </div>
            <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw]">
              <div className="col-span-1">
                <h3
                  data-para-anim
                  className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  Insights. Strategy. Design. Results.
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  A brand has always been more than just a logo. This is truer
                  now than ever before, as over 80% of consumers research
                  products online before making a purchase. This shift makes all
                  other brand cues incredibly important, from your voice and the
                  way your products are photographed, to the illustrations and
                  graphic elements that shape your brand&apos;s personality. From the
                  tangible to the intangible, we carefully consider, craft, and
                  create the identity and all the touchpoints surrounding your
                  product. Our goal is to ensure your brand is always leading in
                  the consideration set for your category.
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col ">
                <h3
                  data-para-anim
                  className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  Unboring brands through visual language
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  Putting together a visual language for your brand is about
                  creating a visual system that works to shape and create a
                  brand that is distinctive and recognizable. Starting with your
                  logo, it is a collection of carefully considered marks,
                  colours, typographic choices and photographic or illustrative
                  styles that work together both on and offline.
                </p>
              </div>
              <div className="col-span-1 col-start-3 flex mobile:flex-col tablet:flex-col">
                <h3
                  data-para-anim
                  className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  Why work with us?
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  You have the option of designing a logo using AI, freelancers
                  or have your niece, who is studying graphic design, work on
                  it. So why should you work with us? At Yellow, we craft
                  identities that take into account your business, your
                  category, your audience, your strategy and more importantly
                  your future ambitions. We develop thoughtful, clutter-cutting
                  identities that are also sustainable and can withstand the
                  test of time.
                </p>
              </div>
              <div className="col-span-3 tablet:hidden">
                <Line className="my-[1.8vw] " />
              </div>

              <div className="col-span-1 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  A brand has always been more than just a logo. This is truer
                  now than ever before, as over 80% of consumers research
                  products online before making a purchase. This shift makes all
                  other brand cues incredibly important, from your voice and the
                  way your products are photographed, to the illustrations and
                  graphic elements that shape your brand&apos;s personality. From the
                  tangible to the intangible, we carefully consider, craft, and
                  create the identity and all the touchpoints surrounding your
                  product. Our goal is to ensure your brand is always leading in
                  the consideration set for your category.
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Putting together a visual language for your brand is about
                  creating a visual system that works to shape and create a
                  brand that is distinctive and recognizable. Starting with your
                  logo, it is a collection of carefully considered marks,
                  colours, typographic choices and photographic or illustrative
                  styles that work together both on and offline.
                </p>
              </div>
              <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  You have the option of designing a logo using AI, freelancers
                  or have your niece, who is studying graphic design, work on
                  it. So why should you work with us? At Yellow, we craft
                  identities that take into account your business, your
                  category, your audience, your strategy and more importantly
                  your future ambitions. We develop thoughtful, clutter-cutting
                  identities that are also sustainable and can withstand the
                  test of time.
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
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <div className="tablet:flex mobile:flex mobile:flex-col tablet:gap-[2vw] flex mobile:gap-0 gap-[15vw]">
                  <div className="col-start-3 flex justify-end mobile:justify-center tablet:order-1 order-1 mobile:order-none">
                    <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative fadeup mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                        <Image
                          loading="lazy"
                          src={service.image}
                          alt={`${service.title} Image`}
                          className="absolute h-full w-full object-cover"
                          fill
                        />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                    <h2
                      data-para-anim
                      className="text-[2.5vw] capitalize font-display mobile:text-[8vw] tablet:text-[4vw]"
                    >
                      {service.title}
                    </h2>
                    {service.paragraphs.map((para, paraIndex) => (
                      <p
                        key={paraIndex}
                        data-para-anim
                        className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]"
                      >
                        {para}
                      </p>
                    ))}
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
              </React.Fragment>
            ))}
            
          </div>
        </section>

        {/* Related Works Section */}
        <RelatedWork
          works={recentWorks}
          heading={"Our Work"}
          subheading={
            "Happy people making loved brands."
          }
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const recentWorks = await getRelatedPortfolioForPages("brand-identity");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}
