/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../SectionTitle";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Section from "../Section";
import { useLenis } from "lenis/react";
import TeamDetail from "./TeamDetail";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Meet({ teams }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const lenis = useLenis();
  const cardContainer = useRef(null);
  // console.log(teams)

  // 🟢 Normalize teams: accept {teams: []} OR []
  const teamInfo = Array.isArray(teams?.teams) ? teams.teams : (Array.isArray(teams) ? teams : []);

  const handleDetail = (member) => {
    setSelectedMember(member);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, "", `/teams/${member.slug}`);
    }
    setDetailOpen(true);
    lenis?.stop?.();
  };

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, "", `/about-us`);
    }
    setDetailOpen(false);
    setSelectedMember(null);
    lenis?.start?.();
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.to(".detail-overlay", {
      opacity: detailOpen ? 0.2 : 0,
      ease: "power2.in",
      // small negative delay is harmless; keeping your semantics
      delay: detailOpen ? 0 : -0.2,
    });
  }, [detailOpen]);

  return (
    <>
      <Section className="w-full h-full pb-[8%] mobile:pb-[20%] relative" id="meet">
        <div className={`container overflow-hidden ${detailOpen ? "pointer-events-none" : "pointer-events-auto"}`}>
          <SectionTitle text={"Meet the people"} className={"mb-[3vw]"} />
          <p data-para-anim className="text-[1.9vw] w-[30%] font-medium leading-[1.3] mobile:w-[90%] mobile:text-[5vw] tablet:w-[60%] tablet:text-[2.5vw]">
            We grow amazing companies through exceptional branding and
            communications.
          </p>

          <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeup">
            <div
              ref={cardContainer}
              className="grid grid-cols-3 gap-[3vw] mt-[8vw] justify-between gap-y-[3vw] mobile:flex mobile:flex-nowrap mobile:w-fit mobile:overflow-scroll mobile:gap-[5vw] mobile:h-fit tablet:gap-y-[3.5vw] tablet:grid-cols-2"
            >
              {Array.isArray(teamInfo) && teamInfo.length > 0 ? (
                teamInfo.map((member) => (
                  <div
                    key={member.id ?? member.slug}
                    className="w-fit overflow-hidden fadeup"
                    onClick={() => handleDetail(member)}
                  >
                    <div className="w-full h-[36vw] group cursor-pointer relative overflow-hidden mobile:w-[75vw] mobile:h-[100vw] tablet:w-[41vw] tablet:h-full">
                      <div className="bg-black/40 absolute opacity-0 tablet:opacity-100 w-10 h-10 rounded-full backdrop-blur-lg text-white flex items-center justify-center top-0 right-0 z-10 text-[4vw] leading-[0] mr-2 mt-2 pointer-events-none mobile:opacity-100 mobile:text-[6vw]">+</div>
                      <img
                        loading="lazy"
                        src={member?.featuredImage?.node?.sourceUrl || "/assets/images/placeholder.png"}
                        alt={`${member?.title ?? "Member"} Image`}
                        className="object-cover h-full w-full"
                      />
                      {member?.teams?.blackWhitePicture?.node?.sourceUrl && (
                        <img
                          loading="lazy"
                          src={member.teams.blackWhitePicture.node.sourceUrl}
                          alt={`${member?.title ?? "Member"} B&W Image`}
                          className="absolute object-cover h-full w-full top-0 left-0 bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-200"
                        />
                      )}
                      <div className="absolute w-full px-[2vw] py-[1.5vw] z-[2] bottom-0 overflow-hidden translate-y-full bg-black/40 backdrop-blur-lg group-hover:translate-y-0 tablet:translate-y-0 duration-300 ease-out mobile:py-[3vw] mobile:px-[3vw] tablet:py-[3vw]">
                        <div className="text-white flex w-full justify-between h-full">
                          <div className="flex flex-col tablet:w-[100%]">
                            <h4 className="text-[1.8vw] font-display leading-[1.3] uppercase mobile:text-[6vw] tablet:text-[2.4vw]">
                              {member?.title ?? "—"}
                            </h4>
                            <p className="mobile:w-full mobile:leading-[1.3] mobile:text-[3vw] text-[1.2vw] tablet:text-[2vw]">
                              {member?.teams?.designation ?? ""}
                            </p>
                          </div>
                          <div className="mobile:flex mobile:items-center">
                            <svg
                            className="relative -rotate-[135deg] w-[2.3vw] h-[2.3vw] overflow-hidden mobile:w-[7vw] mobile:h-[7vw] tablet:w-[4vw] tablet:h-[4vw]"
                            width="19"
                            height="23"
                            viewBox="0 0 19 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                              d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                              fill="#ffffff"
                            />
                            <path
                              className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                              d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                              fill="#ffffff"
                            />
                          </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full py-10">No team members yet.</p>
              )}
            </div>
          </div>

          <div className="fadeup ml-0 w-[8vw] h-[8vw] mt-[6vw] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] mobile:mt-[10vw]">
            <img src="/assets/images/gifs/flower.gif" loading="lazy" height={200} width={200} alt="Flower gif" />
          </div>
        </div>

        <div data-lenis-prevent id='team-detail' className="w-full bg-transparent fixed h-full top-0 right-0 overflow-y-auto overflow-x-hidden overflow-scroll detail-section z-[204] flex justify-end pointer-events-none">
          <div onClick={handleClose} className={`bg-[#000000] w-full h-full detail-overlay opacity-0 ${detailOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none'}`}></div>
          <div className={` w-[70%] px-[5vw] absolute right-0 flex flex-col gap-[2vw] bg-white h-full overflow-y-auto overflow-scroll z-[205] pointer-events-auto mobile:w-full mobile:gap-[5vw] tablet:w-[80%] tablet:gap-[3vw] transition-all ease-in-out duration-700 ${detailOpen ? "translate-x-0" : "translate-x-full"}`}>
            <TeamDetail
              teams={teamInfo}
              member={selectedMember}
              handleClose={handleClose}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

