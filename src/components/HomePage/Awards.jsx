/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import Link from "next/link";

const Awards = () => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const cardData = [
    {
      title: 'Best Visual Identity',
      subtitle: 'Gold - Healthcare & Pharmaceutical',
      bgColor: '#A1A1FF',
      logo: "/assets/images/homepage/ovasave.png",
      link: "/our-work/branding-for-an-innovative-fem-tech-platform"
    },
    {
      title: 'Best Visual Identity',
      subtitle: 'Gold - Education',
      bgColor: '#93A374',
      logo: "/assets/images/homepage/numu.png",
      link: "/our-work/numu-early-childhood-centre-brand-case-study"
    },
  ];

  return (
    <Section className="py-[5%] mobile:pb-[15%]" id="services">
      <div ref={containerRef} className="container">
        <div className="space-y-[2.5vw] mobile:mt-[5vw] tablet:mt-[5vw] mobile:space-y-[7vw]">
          <SectionTitle data-title-anim text="AWARDS" />
        </div>
        <div className="flex items-start justify-between pt-[5vw] mobile:flex-col mobile:gap-[5vw] mobile:pt-[10%] tablet:flex-col tablet:pt-[10%] tablet:gap-[7vw] overflow-hidden h-[35vw] mobile:h-full tablet:h-full">
          {cardData.map((card, index) => {
            const isActive = activeCard === index;
            return (
              <>
                <Link
                  onMouseEnter={() => setActiveCard(index)}
                  style={{ backgroundColor: card.bgColor }}
                  href={card.link}
                  className={`transition-all duration-500 ease origin-top p-[1.8vw] rounded-[1vw] text-white flex items-start justify-between mobile:w-full mobile:h-[50vw] mobile:px-[3vw] mobile:py-[3vw] mobile:rounded-[3vw] tablet:w-full tablet:rounded-[2vw] tablet:h-[45vw] tablet:py-[2vw] tablet:px-[3vw] overflow-hidden ${isActive ? 'w-[56%] h-[28vw]' : 'w-[42.5%] h-[20vw]'}`}
                >
                  <div className="flex items-start w-full h-full justify-between">
                    <div className="flex flex-col justify-between items-start w-full h-full">
                      <div>
                        <h3 className="text-[3.5vw] leading-[1.2] font-display font-normal mobile:text-[7vw] tablet:text-[5vw] text-nowrap">{card.title}</h3>
                        <p className="text-[2vw] text-nowrap font-medium mobile:text-[3.5vw] mobile:w-full tablet:text-[3vw] tablet:w-full">{card.subtitle}</p>
                      </div>
                      <div className={`transition-all duration-300 ease text-[1.8vw] font-medium mobile:opacity-100 mobile:text-[3.5vw] tablet:opacity-100 tablet:text-[3vw] ${isActive ? 'opacity-100' : 'opacity-0'}`} >
                        <span>Transform Awards 2025</span>
                      </div>
                      <div className={`transition-all duration-300 ease h-[5vw] w-[10vw] mobile:opacity-100 mobile:h-[10vw] mobile:w-[20vw] tablet:opacity-100 tablet:h-[8vw] tablet:w-[12vw]  ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                          src={card.logo}
                          height={156}
                          width={277}
                          alt="brand logo image"
                          className="h-full w-full object-contain brightness-[5]"
                        />
                      </div>
                    </div>
                    <div className={`flex flex-col items-end justify-between transition-all duration-300 ease tablet:gap-[7vw] tablet:pt-[2vw] h-full`}>
                      <div className={`bg-[#111111] h-[4vw] w-[4vw] rounded-full flex items-center justify-center transition-all duration-300 ease mobile:opacity-100 mobile:h-[10vw] mobile:w-[10vw] mobile:!p-[2vw] tablet:opacity-100 tablet:h-[8vw] tablet:w-[8vw] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                          src="/assets/icons/arrow.svg"
                          height={20}
                          width={20}
                          alt="arrow svg"
                          className={`transition-all duration-300 ease -rotate-[140deg]`}
                        />
                        
                      </div>
                      <div className={`h-[35vh] w-[10vw] overflow-hidden transition-all duration-300 ease mobile:opacity-100 mobile:h-[30vw] mobile:w-[15vw] tablet:opacity-100 tablet:h-[25vw] tablet:w-[12vw] ${isActive ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                        <Image
                          src="/assets/images/homepage/yellow-awards.png"
                          width={163}
                          height={375}
                          alt="transform awards image"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </Section>
  )
}

export default Awards;

const AwardCard = ({ title, bgColor, logo, link, isActive, index, setActiveCard }) => {
  return (
    <Link
      onMouseEnter={() => setActiveCard(index)}
      style={{ backgroundColor: bgColor }}
      href={link}
      className={`transition-all duration-500 ease origin-top p-[1.8vw] rounded-[1vw] text-white flex items-start justify-between mobile:w-full mobile:h-[50vw] mobile:px-[3vw] mobile:py-[3vw] mobile:rounded-[3vw] tablet:w-full tablet:rounded-[2vw] tablet:h-[45vw] tablet:py-[2vw] tablet:px-[3vw] overflow-hidden ${isActive ? 'w-[56%] h-[28vw]' : 'w-[42.5%] h-[20vw]'}`}
    >
      <div className="flex items-start w-full h-full justify-between">
        <div className="flex flex-col justify-between items-start">
          <h3 className="text-[3.5vw] leading-[1.2] font-display font-normal mobile:text-[7vw] tablet:text-[5vw]">{title}</h3>
          <div className={`transition-all duration-300 ease text-[1.8vw] font-medium mobile:opacity-100 mobile:text-[3vw] tablet:opacity-100 tablet:text-[3vw] ${isActive ? 'opacity-100' : 'opacity-0'}`} >
            <span>Transform Awards 2025</span>
          </div>
          <div className={`transition-all duration-300 ease h-[5vw] w-[10vw] mobile:opacity-100 mobile:h-[10vw] mobile:w-[20vw] tablet:opacity-100 tablet:h-[8vw] tablet:w-[12vw]  ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={logo}
              height={156}
              width={277}
              alt="brand logo image"
              className="h-full w-full object-contain brightness-[5]"
            />
          </div>
        </div>
        <div className={`flex flex-col items-end justify-between transition-all duration-300 ease tablet:gap-[7vw] tablet:pt-[2vw]`}>
          <div className={`bg-[#111111] h-[4vw] w-[4vw] rounded-full flex items-center justify-center transition-all duration-300 ease mobile:opacity-100 mobile:h-[10vw] mobile:w-[10vw] mobile:!p-[2vw] tablet:opacity-100 tablet:h-[8vw] tablet:w-[8vw] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/assets/icons/arrow.svg"
              height={20}
              width={20}
              alt="arrow svg"
              className={`transition-all duration-300 ease -rotate-[140deg]`}
            />
          </div>
          <div className={`h-[15vw] w-auto overflow-hidden transition-all duration-300 ease mobile:opacity-100 mobile:h-[30vw] mobile:w-[20vw] tablet:opacity-100 tablet:h-[25vw] tablet:w-[17vw] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/assets/images/homepage/transform-awards.png"
              width={163}
              height={375}
              alt="transform awards image"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}