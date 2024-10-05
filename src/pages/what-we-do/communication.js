/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import {
  titleAnim,
  paraAnim,
  lineAnim,
  fadeUp,
  imageAnimationDown,
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
  imageAnimationDown();

  const metadata = {
    title:
      "Integrated Marketing & Advertising Services in Dubai - Yellow Agency",
    description:
      "Create lasting relationships with your audience through compelling communication. Learn about advertising & marketing services that empower your brand here.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/communication",
  };

  const services = [
    {
      title: "Marketing strategy",
      paragraphs: [
        "Your brand is unique, so we start with a bespoke marketing strategy. Every piece of content we create – from outdoor to radio to social media content – will be crafted to ignite meaningful conversations about your brand and product and inspire your target audience to take action.",
        "We act like your in-house marketing team in defining your marketing objectives and strategy that acts like a blueprint with a detailed yearly plan that covers everything from advertising ideas to marketing activations to social media calendars and more. We outline budgets and tactical campaigns and proactive initiatives along with recommended media investments. This helps businesses plan their budgets alongside KPIs and impact, and for some clients, we are also responsible for executing and delivering on the strategy and plan.",
        
      ],
      image: "/assets/images/service/communication/Marketing-strategy.webp",
    },
    {
      title: "Marketing execution",
      paragraphs: [
        "As a marketing partner for global brands like Mitsubishi Motors MEA, and local brands like Emaar Malls Group and several others, Yellow acts like an extension to the team, and ensures all marketing executions, regardless of media channel, delivers the desired results. We measure the effectiveness of each campaign to understand engagement, click through rates, top of mind awareness and increase in revenue.",
        "We believe communications, to be effective, needs to be specific and purpose-led. Fusing creativity and technology and leveraging our relationships with respected local and global media publishers, we’ll deliver and amplify your story in a way that makes a measurable impact on your business.",
        
      ],
      image: "/assets/images/service/communication/mitsubishi-detail.webp",
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
              Advertising & Marketing Services
            </h1>
            <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative fadeup mobile:w-[85vw] mobile:h-[100vw] tablet:w-[85vw]">
              <Image
                quality={100}
                src="/assets/images/service/communication/communication-detail-listing.webp"
                alt="service-detail-hero"
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
                Driven by data, research, and insights and guided by experience
                and creativity, our communication strategies and campaigns
                always intersect cultural movements, consumer needs and your
                brand&apos;s best self. This is why they strike a chord, create
                impact and deliver results.
              </p>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw]">
              <div className="col-span-1">
                <h3
                  data-para-anim
                  className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  Advertising campaign brief
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  It all starts with a solid brief. We work with brands to
                  define their business and marketing objectives, we then dive
                  into research and analytics (lots of it) to find the sweet
                  spot where the product insight, market insight and consumer
                  insight converge towards a communication positioning
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col ">
                <h3
                  data-para-anim
                  className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  Results-focused communication
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  At Yellow, we believe there’s power in simplicity. We focus on
                  delivering the right message to the right audience through the
                  right medium (media channel). And how do we know that we have
                  been successful? We are persistent to find out the impact and
                  results of our campaign, along with our clients.
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
                  Yellow is indisputably client-centric. We spend time inside
                  your organisation, understanding your hows and whys, your
                  challenges and ambitions. We conduct a comprehensive marketing
                  audit, study the industry and competitor landscape, and create
                  a strategy that integrates data and expert insights, followed
                  with an execution that has thumb-stopping power.
                </p>
              </div>
              <div className="col-span-3 tablet:hidden">
                <Line className="my-[1.8vw] " />
              </div>

              <div className="col-span-1 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  It all starts with a solid brief. We work with brands to
                  define their business and marketing objectives, we then dive
                  into research and analytics (lots of it) to find the sweet
                  spot where the product insight, market insight and consumer
                  insight converge towards a communication positioning
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  At Yellow, we believe there’s power in simplicity. We focus on
                  delivering the right message to the right audience through the
                  right medium (media channel). And how do we know that we have
                  been successful? We are persistent to find out the impact and
                  results of our campaign, along with our clients.
                </p>
              </div>
              <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Yellow is indisputably client-centric. We spend time inside
                  your organisation, understanding your hows and whys, your
                  challenges and ambitions. We conduct a comprehensive marketing
                  audit, study the industry and competitor landscape, and create
                  a strategy that integrates data and expert insights, followed
                  with an execution that has thumb-stopping power.
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
                    <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative image-animation-down-wrapper mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                      <div>
                        <Image
                          loading="lazy"
                          src={service.image}
                          alt={`${service.title} Image`}
                          className="absolute h-full w-full object-cover"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                    <h2
                      data-para-anim
                      className="text-[2.5vw] font-display mobile:text-[8vw] tablet:text-[4vw]"
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
            " Where in-depth research and great strategy meet incredible execution."
          }
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const recentWorks = await getRelatedPortfolioForPages("communication");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}
