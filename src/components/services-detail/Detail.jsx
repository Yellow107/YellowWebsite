import React from "react";
import LinkButton from "../Button/LinkButton";
import Image from "next/image";
import Line from "../Line";
import { imageAnimationDown } from "../gsapAnimations";

const services = [
  {
    title: "Brand positioning",
    paragraphs: [
      "Knowing where your brand stands right now is key to making more empowered choices that will serve your goals in the future. Through brand workshop, audit and research, make the smart decisions for your brand through a data-based, results-driven brand workshop, audit and research.",
      "Building a brand strategy in Dubai and similarly high-stake markets requires a discovery process that uses a big-thinking, growth-driven approach. The brand audit is an opportunity to not just take an honest look at your brand’s direction, but more importantly to challenge it. Yellow has the framework to allow you to accomplish this delicate process with precision and expertise.",
      "Schedule a brand workshop here.",
    ],
    image: "/assets/images/service/brand-strategy/Brand-Positioning.png",
  },
  {
    title: "Brand architecture",
    paragraphs: [
      "From holding companies spanning multiple sectors to product ranges and sub-brands, defining your brand architecture brings order to your organization. This process allows you to transfer equity between business units, thereby allowing a newer, less established service to capitalize on the recognition of a more well-known one.",
      "Through brand architecture shown in visual format such as diagrams and illustrations, we create association between business units where you need it and distance where you don’t. A well-defined, thoughtfully designed brand architecture diagram allows you to define the brand accurately, in a way that the target audience can understand and truly resonate with.",
      "Define brand perception and brand reputation with a smartly designed brand architecture.",
    ],
    image: "/assets/images/service/brand-strategy/Brand-Architecture.png",
  },
  {
    title: "Staff engagement",
    paragraphs: [
      "When your team fully understands and embraces your brand, they become your greatest champions. Through structured workshops and seminars, we make sure your staff grasps your brand positioning, what makes it different from your competitors and how it looks, sounds and acts when interacting with the market it serves.",
      "We believe that a brand’s own people are its greatest ambassadors. Combining data analytics, talent insights and company culture exercises, we’ll work directly with you to make sure that your staff are your brand’s most passionate voice.",
      "Engage your brand’s very own champions.",
    ],
    image: "/assets/images/service/brand-strategy/Staff-Engagement.png",
  },
];

export default function Detail() {

  imageAnimationDown();

  return (
    <>
      <section className="w-full h-full bg-black " id="detail">
        <div className=" container mobile:flex mobile:flex-col tablet:flex-col tablet:flex pb-[5%] bg-white">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="tablet:flex mobile:flex mobile:flex-col tablet:gap-[2vw] flex mobile:gap-0 gap-[15vw]">
              <div className="col-start-3 flex justify-end mobile:justify-center tablet:order-1 order-1 mobile:order-none">
                <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative image-animation-down-wrapper mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                  <div>
                    <Image
                      src={service.image}
                      alt={`${service.title} Image`}
                      className="absolute h-full w-full object-cover"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                <h2 data-para-anim className="text-[2.5vw] font-display mobile:text-[8vw] tablet:text-[4vw]">
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
              <Line/>
              </div>
            </React.Fragment>
          ))}
          <div className="flex flex-col gap-[1.5vw] mobile:order-8 mobile:my-[5vw]">
            <h3 data-para-anim className="text-[2.2vw] font-display mobile:text-[7.5vw] tablet:text-[3vw]">Brand Strategy</h3>
            <ul className="list-disc pl-[1.5vw] mobile:pl-[4vw]">
              <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                Brand Guidelines
              </li>
              <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                Brand Imagery
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
