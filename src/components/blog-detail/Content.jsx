/* eslint-disable react-hooks/rules-of-hooks */
import { formatDate } from "@/lib/datetime";
import Section from "../Section"
import styles from "@/styles/blogDetail.module.css"
import { LinkedinShareButton, FacebookShareButton, TwitterShareButton} from 'next-share';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Content = (({date, content, slug, readingTime}) => {

    const sectionPin = useRef(null);
    const sectionContent = useRef(null);
    const progressBar = useRef(null);

    if (globalThis.innerWidth > 1024) {
        useGSAP(() => {
            ScrollTrigger.create({
              trigger: sectionPin.current,
              start: "top 10%",
              endTrigger: sectionContent.current,
              end: "bottom 70%",
              invalidateOnRefresh: true,
              pin: sectionPin.current,
            });
          });
      }

      useGSAP(() => {
        gsap.to(progressBar.current, {
            scrollTrigger: {
                trigger: sectionContent.current,
                start: "top 10%",
                end: "bottom 50%",
                scrub: 1,
            },
            scaleX: 1,
            duration: 1,
        })
      });

    return (
        <Section id="second-section" className=" bg-black">
            <div className="fixed top-0 left-0 right-0 h-[5px] z-[999]">
                <span ref={progressBar} className="block h-full w-full origin-left bg-yellow-500 scale-x-0"></span>
            </div>
            <div className="container bg-white py-[5%]">
                <div className="flex justify-between items-start mobile:flex-col mobile:gap-[5vw] tablet:flex-col tablet:gap-[2vw]">
                    <aside ref={sectionPin}>
                        <h3 data-title-anim className="text-[1.55vw] font-medium mb-[0.5vw] mobile:text-[7vw] tablet:text-[4vw]">Posted On :</h3>
                        <p data-para-anim className="text-[1.25vw] font-medium mb-[3vw] mobile:text-[4vw] tablet:text-[2.5vw]">{formatDate(date)}</p>
                        <h3 data-title-anim className="text-[1.55vw] font-medium mb-[0.5vw] mobile:text-[7vw] tablet:text-[4vw]">Reading Time</h3>
                        <p data-para-anim className="text-[1.25vw] font-medium mb-[3vw] mobile:text-[4vw] tablet:text-[2.5vw]">{readingTime} mins</p>
                        <h3 data-title-anim className="text-[1.55vw] font-medium mb-[0.5vw] mobile:text-[7vw] tablet:text-[4vw]">Share Article :</h3>
                        <div className="flex items-center gap-[1.5vw] fadeup">
                            <FacebookShareButton className="" url={`https://welcometoyellow.com//${slug}`} quote="Read more articles like this on our website - https://welcometoyellow.com/blog" hashtag="#welcometoyellow">
                                <img className="border border-body rounded-full hover:border-white hover:bg-white hover:invert transition-all w-[2.8vw] h-[2.8vw] mobile:w-[10vw] mobile:h-[10vw] tablet:w-[7vw] tablet:h-[7vw]" src="/assets/icons/fb.svg" alt="Facebook Icon" title='Facebook Icon' />
                            </FacebookShareButton>
                            <LinkedinShareButton url={`https://welcometoyellow.com//${slug}`} quote="Read more articles like this on our website - https://welcometoyellow.com/blog" hashtag="#welcometoyellow">
                                <img className="border border-body rounded-full hover:border-white hover:bg-white hover:invert transition-all w-[2.8vw] h-[2.8vw] mobile:w-[10vw] mobile:h-[10vw] tablet:w-[7vw] tablet:h-[7vw]" src="/assets/icons/linkedin.svg" alt="LinkedIn Icon" title='LinkedIn Icon'/>
                            </LinkedinShareButton>
                            <TwitterShareButton url={`https://welcometoyellow.com//${slug}`} quote="Read more articles like this on our website - https://welcometoyellow.com/blog" hashtag="#welcometoyellow">
                                <img className="border border-body rounded-full hover:border-white hover:bg-white hover:invert transition-all w-[2.8vw] h-[2.8vw] mobile:w-[10vw] mobile:h-[10vw] tablet:w-[7vw] tablet:h-[7vw]" src="/assets/icons/x.svg" alt="Twitter Icon" title='Twitter Icon' />
                            </TwitterShareButton>
                        </div>
                    </aside>
                    <div ref={sectionContent} className="w-[65%] fadein mobile:w-full tablet:w-full">
                        <div
                            className={styles.blogContent}
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
})

export default Content;