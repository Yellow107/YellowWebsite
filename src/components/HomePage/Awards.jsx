/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import Link from "next/link";

const Awards = () => {
  const containerRef = useRef(null);
  const [enter,setEnter] = useState(null)
  const cardData = [
    {
      title: "Best Visual Identity",
      subtitle: "Gold - Healthcare & Pharmaceutical",
      bgColor: "#A1A1FF",
      awards:"/assets/images/homepage/yellow-awards.png",
      logo: "/assets/images/homepage/ovasave.png",
      link: "/our-work/branding-for-an-innovative-fem-tech-platform",
    },
    {
      title: "Best Visual Identity",
      subtitle: "Gold - Education",
      bgColor: "#93A374",
      awards:"/assets/images/homepage/yellow-awards.png",
      logo: "/assets/images/homepage/numu.png",
      link: "/our-work/numu-early-childhood-centre-brand-case-study",
    },
    {
      title: "Branding Agency of The Year",
      subtitle: " Silver - Campaign Agency of The Year Middle East 2025",
      bgColor: "#F77E83",
      awards:"/assets/images/homepage/agency-of-the-year-img-1.png",
      // logo: "/assets/images/homepage/numu.png",
      link: "/our-work",
    },
  ];

  return (
    <Section className="py-[5%] mobile:pb-[15%]" id="services">
      <div ref={containerRef} className="container">
        <div className="space-y-[2.5vw] mobile:mt-[5vw] tablet:mt-[5vw] mobile:space-y-[7vw]">
          <SectionTitle data-title-anim text="AWARDS" />
        </div>

        <div className={`flex flex-wrap items-start justify-between pt-[5vw] gap-y-[1.2vw] mobile:flex-col mobile:gap-[5vw] mobile:pt-[10%] tablet:flex-col tablet:pt-[10%] tablet:gap-[3vw]  mobile:h-full tablet:h-full fadeup `}>
          {cardData.map((card, index) => (
            <Link
              key={index}
              style={{ backgroundColor: card.bgColor }}
              href={card.link}
              onMouseEnter={()=>{
                if(index==0){
                  setEnter(0)
                }
                else if(index==1){
                  setEnter(1)
                }
                else if(index==2){
                  setEnter(2)
                }
              }}
              onMouseLeave={()=>{
                setEnter(null)
              }}
             
              className={`p-[1.8vw] rounded-[1vw] text-white flex items-start justify-between mobile:!w-full mobile:!h-[60vw] mobile:px-[5vw] mobile:py-[5vw] mobile:rounded-[4vw] tablet:!w-full tablet:rounded-[2.5vw] tablet:!h-[45vw] tablet:py-[3vw] tablet:px-[3vw] overflow-hidden group relative transition-all duration-500 ease-in-out  ${enter==0&&index==0?"!w-[58.5%] !h-[28vw]":"!w-[40%] h-[20vw]"} ${enter==1&&index==1?"!w-[58.5%] !h-[28vw]":"!w-[40%] h-[20vw]"} ${enter==1&&index==0?"!w-[40%] !h-[28vw]":""} ${enter==2&&index==0?"!w-[49.3%] !h-[20vw]":""} ${enter==2&&index==1?"!w-[49.3%] !h-[20vw]":""} ${enter==2&&index==2?"!w-[58%] !h-[28vw]":""} ${enter==null?"!w-[49.3%] !h-[20vw]":""} `}
            >
              <div className="flex items-start w-full h-full justify-between">
                <div className="flex flex-col justify-between items-start w-[70%] h-full">
                  <div>
                    <h3 className={`text-[3vw] leading-[1.2] font-display font-normal mobile:text-[7vw] tablet:text-[5vw] mobile:!w-full tablet:!w-full ${index==2?"w-[27vw] mb-[1vw]":"text-nowrap"}`}>
                      {card.title}
                    </h3>
                    <p className={` font-medium mobile:text-[3.5vw]  tablet:text-[3vw]  mobile:!w-full tablet:!w-full ${index==2?"!w-[27vw] text-[1.5vw]":"text-nowrap text-[1.8vw]"}`}>
                      {card.subtitle}
                    </p>
                  </div>

                  {/* always visible now */}
                  <div className={`text-[1.4vw] font-medium mobile:text-[3.5vw] tablet:text-[3vw] mobile:!opacity-100 tablet:!opacity-100 ${index==2?"hidden":""} transition-all  ease-in-out ${enter==0&&index==0?"opacity-100 duration-500":"opacity-0 duration-400"} ${enter==1&&index==1?"opacity-100 duration-500":"opacity-0 duration-400"} ${enter==2&&index==2?"opacity-100 duration-500":"opacity-0 duration-400"}`}>
                    <span>Transform Awards 2025</span>
                  </div>

                  {/* always visible now */}
                  <div className={`h-[5vw] w-[10vw] mobile:h-[10vw] mobile:w-[20vw] tablet:h-[8vw] tablet:w-[12vw] mobile:!opacity-100 tablet:!opacity-100 transition-all  ease-in-out ${enter==0&&index==0?"opacity-100 duration-500":"opacity-0 duration-400"} ${enter==1&&index==1?"opacity-100 duration-500":"opacity-0 duration-400"} ${index==2?"hidden":""} `}>
                    <Image
                      src={card.logo}
                      height={156}
                      width={277}
                      alt="brand logo image"
                      className="h-full w-full object-contain brightness-[5]"
                    />
                  </div>
                </div>

                <div className={`flex flex-col items-end justify-between h-fit absolute right-[2vw] gap-[4vw] mobile:right-[5vw] mobile:gap-[5vw]`}>
                  <div className="h-[3.5vw] w-[3.5vw] flex items-center justify-center rounded-full bg-body group-hover:bg-white group-hover:text-body transition-all duration-500 mobile:h-[10vw] mobile:w-[10vw] tablet:w-[8vw] tablet:h-[8vw] mobile:p-[3.5vw]">
                    <svg
                      className="relative -rotate-[135deg] w-[1.7vw] h-[1.7vw] overflow-hidden mobile:w-[6vw] mobile:h-[6vw] tablet:w-[4vw] tablet:h-[4vw]"
                      width="19"
                      height="23"
                      viewBox="0 0 19 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                      <path
                        className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div className={`h-auto  overflow-hidden mobile:h-auto mobile:w-[16vw] tablet:h-[25vw] tablet:w-[12vw] mobile:opacity-100 tablet:opacity-100 w-[7vw] ${index==2?"mr-[1vw] w-[7.5vw]":""} transition-all  ease-in-out ${enter==0&&index==0?"opacity-100 duration-500":"opacity-0 duration-400"} ${enter==1&&index==1?"opacity-100 duration-500":"opacity-0 duration-400"} ${enter==2&&index==2?"opacity-100 duration-500":"opacity-0 duration-400"}`}>
                    <Image
                      src={card.awards}
                      width={163}
                      height={375}
                      alt="transform awards image"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
         
        </div>
      </div>
    </Section>
  );
};

export default Awards;
