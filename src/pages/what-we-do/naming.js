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
    title: "Brand & Business Naming In Dubai - Yellow Agency",
    description:
      "Get your brand or business off to a good start with a meaningful, memorable name crafted through strategy and creativity. Work with us today.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/naming",
  };

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
              className="text-[5.8vw] w-[80%] uppercase font-display mb-[7vw] leading-[1.3] mobile:text-[12vw] tablet:w-[90%]  mobile:w-full tablet:text-[7vw] mobile:mb-[10vw]"
            >
              Naming
            </h1>
            <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative fadeup mobile:w-full mobile:h-[50vw] tablet:w-full">
              <Image
                quality={100}
                src="/assets/images/service/naming/Brand-Naming-listing.webp"
                alt="naming-hero"
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
                Each name crafted by our team has such a great story behind it.
                From brand and product names to business names to even street
                naming within communities, we pride ourselves on our extensive
                experience. Some of our greatest hits include CAFU, OliOli, Pan
                Home, Numu and Irth.
              </p>

            </div>
            <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw]">
              <div className="col-span-1">
                <h3
                  data-para-anim
                  className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  What’s in a name?
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  A lot actually! A powerful brand name is a universe in itself.
                  Trademarked brands that have become household names evoke not
                  just the product, but also the emotions, values and
                  experiences associated with it. There are brand names that
                  have become weaved into the daily lives and language of
                  communities, and brand names that, on their own, can represent
                  an entire industry or a whole ideology. With a relevant,
                  memorable and ownable brand name, you’re off to a great start!
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col ">
                <h3
                  data-para-anim
                  className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]"
                >
                  What’s our process?
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p
                  data-para-anim
                  className="hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]"
                >
                  Based on the brand strategy and your USPs, we define a naming
                  brief to cover your mandatories and your preferences - do you
                  prefer a functional name or an abstract one? Do you want a
                  .com domain (this is extremely hard!)? Based on the brief we
                  devour literature, lyrics, explore cultural references,
                  different languages (and several other resources) to present a
                  round of names to you. Beyond this, we conduct linguistic
                  research and also explore domain names and social media
                  handles for the shortlisted names. Sounds simple? It isn&apos;t!
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
                  Today, where brand loyalty is said to be increasingly
                  threatened, the choice of brand name can aid success or hinder
                  it. Consumers face an overwhelming amount of options, making
                  it crucial that brands invest in a naming exercise that’s in
                  touch with the realities of the current market. By working
                  with brand naming consultants at Yellow, you get to
                  access our collective experience and reap the benefits of how
                  much literature we consume! We’ll work with you to come up
                  with an end result that is memorable, has an X factor and
                  delights your audience, just like we have for more than 40
                  brands in the region and beyond.
                </p>
              </div>
              <div className="col-span-3 tablet:hidden">
                <Line className="my-[1.8vw] " />
              </div>

              <div className="col-span-1 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  A lot actually! A powerful brand name is a universe in itself.
                  Trademarked brands that have become household names evoke not
                  just the product, but also the emotions, values and
                  experiences associated with it. There are brand names that
                  have become weaved into the daily lives and language of
                  communities, and brand names that, on their own, can represent
                  an entire industry or a whole ideology. With a relevant,
                  memorable and ownable brand name, you’re off to a great start!
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Based on the brand strategy and your USPs, we define a naming
                  brief to cover your mandatories and your preferences - do you
                  prefer a functional name or an abstract one? Do you want a
                  .com domain (this is extremely hard!)? Based on the brief we
                  devour literature, lyrics, explore cultural references,
                  different languages (and several other resources) to present a
                  round of names to you. Beyond this, we conduct linguistic
                  research and also explore domain names and social media
                  handles for the shortlisted names. Sounds simple? It isn&apos;t!
                </p>
              </div>
              <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Today, where brand loyalty is said to be increasingly
                  threatened, the choice of brand name can aid success or hinder
                  it. Consumers face an overwhelming amount of options, making
                  it crucial that brands invest in a naming exercise that’s in
                  touch with the realities of the current market. By working
                  with brand naming consultants at Yellow, you get to
                  access our collective experience and reap the benefits of how
                  much literature we consume! We’ll work with you to come up
                  with an end result that is memorable, has an X factor and
                  delights your audience, just like we have for more than 40
                  brands in the region and beyond.
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
                      src="/assets/images/service/naming/Brand-naming-consulting.webp"
                      alt="Brand naming consulting Image"
                      className="absolute h-full w-full object-cover"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                  <h2 data-para-anim className="text-[2.5vw] capitalize font-display mobile:text-[8vw] tablet:text-[4vw]" >
                    Brand Naming Consulting
                  </h2>
                  <p data-para-anim className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]">
                    At Yellow, you’ll get all the support you need. Looking to name a new business or a new vertical? Needing to breathe new life into a legacy brand in need of a serious revamp? Seeking to explore new territories or simply wanting to assess if your current brand name can stand the test of time? No matter where you are in your journey, get a standout brand name that sells with the help of our brand naming consultancy service.
                  </p>
                  <p data-para-anim className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]">
                    We can also conduct trademark checks in your region, using a licensed tool called Corsearch, that can save a significant amount of time and investment when registering your brand name.
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
          subheading={
            "The world is crowded. We are here to make you stand out."
          }
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const recentWorks = await getRelatedPortfolioForPages("brand-naming");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}
