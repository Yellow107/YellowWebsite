/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Line from "../Line";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

const handleScroll = () => {
    gsap.to(window, {
        duration: 2.5,
        scrollTo: { y: "#hero" },
        ease: "power2.inOut",
    });
};

const Footer = () => {
    const footerContainer = useRef(null);

    return (
        <footer id="footer" className="footer bg-black">
            <div className="bg-white container footer-top rounded-b-[30px]">
                <div className="pb-[10%] pt-[5%] mobile:pb-[20%]">
                    <Line />
                    <div className="w-full h-[1px] bg-black lineDraw hidden mobile:block tablet:block"></div>
                    <div className="flex justify-between items-center py-[2%] mobile:flex-col mobile:gap-[4vw] mobile:py-[10%]">
                        <div className="w-[50%] relative mobile:w-[100%] tablet:w-[70%] mobile:flex mobile:justify-center">
                            <h5 data-para-anim className="text-[5vw] leading-[1.2] font-display para-anim mobile:text-[10vw] mobile:text-center tablet:text-[6vw] inline-block">
                                Ready to Elevate Your Brand <span className="w-[7vw] h-[4vw] inline-block mobile:w-[14vw] mobile:h-[7vw] tablet:w-[8vw] tablet:h-[4vw]"><img src="/assets/images/gifs/Bart.gif" loading="lazy" width={120} height={120} alt="footer-gif" className="object-cover h-full w-full" /></span>
                            </h5>
                        </div>
                        <div className="fadein">
                            <Link
                                className={`cursor-pointer flex w-fit relative text-[3.4vw] gap-[0.5vw] items-center font-medium group mobile:text-[6vw] mobile:gap-[2vw] `}
                                href="/contact-us#contact-form"
                            >
                                <span className="relative after:absolute leading-[1.3] after:block after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-body after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0 ">
                                    Get in Touch
                                </span>
                                <svg
                                    className="relative -rotate-[135deg] w-[2.2vw] h-[2.2vw] mt-[0.5vw] overflow-hidden mobile:w-[7vw] mobile:h-[7vw]"
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
                            </Link>
                        </div>
                    </div>
                    <Line />
                    <div className="w-full h-[1px] bg-black lineDraw hidden mobile:block tablet:block"></div>
                </div>
            </div>

            <div
                className="h-[30vw] w-full relative mobile:h-[170vw] mobile:py-[10%] tablet:h-[50vw] tablet:py-[7%] footer-anim"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className="fixed bottom-0 left-0 right-0 top-0 z-[-1] pb-[2vw] mobile:pb-[12vw]">
                    <div ref={footerContainer} className="container flex h-full flex-col justify-end text-white footer-bottom mobile:justify-end">
                        <div className="flex items-start w-full justify-between mb-[8vw] mobile:flex-col mobile:items-center tablet:mb-[12vw]">
                            <div className="w-[40%] flex flex-col gap-[2vw] items-start mobile:w-full mobile:items-center mobile:gap-[12vw] tablet:w-[80%] tablet:gap-[6vw] ">
                                <h6 className="text-[2.5vw] font-display mobile:text-[6vw] tablet:text-[4vw]">
                                    <Link className="leading-[1.3] group" href="mailto:hello@welcometoyellow.com">
                                        <span className="relative after:absolute after:block after:bottom-[-2px] after:left-0 after:h-[2px] after:lineDraw after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">
                                            hello@welcometoyellow.com
                                        </span>
                                    </Link>
                                </h6>
                                <div className="w-full flex justify-between items-start mobile:flex-col mobile:items-center gap-[4vw] mobile:gap-[7vw] mobile:order-3 tablet:w-full tablet:gap-[3vw]">
                                    <div className="w-full mobile:w-full tablet:w-full">
                                        <h6 className="text-[1.9vw] font-display leading-[1.3] mb-[1vw] mobile:text-[5vw] mobile:text-center mobile:mb-[3vw] tablet:text-[3vw]">Address</h6>
                                        <Link target="_blank" href="https://maps.app.goo.gl/jWqst61nES4irCZJA" className="text-[1.15vw] font-medium under-multi-parent mobile:text-[4vw] mobile:flex mobile:justify-center mobile:w-full tablet:text-[2.5vw] tablet:w-[50%]">
                                            <span className="under-multi mobile:text-center mobile:w-full tablet:w-[50%]">Loft Offices 2, Office 107, Dubai Media City, Dubai UAE</span>
                                        </Link>
                                    </div>
                                    <div className="w-full mobile:w-full mobile:order-2 tablet:w-full">
                                        <h6 className="text-[1.9vw] font-display leading-[1.3] mb-[1vw] mobile:text-[5vw] mobile:text-center mobile:mb-[3vw] tablet:text-[3vw]">Phone</h6>
                                        <Link href="tel:+97145820205" className="text-[1.15vw] font-medium text-shadow mobile:text-[4vw] mobile:flex mobile:justify-center tablet:text-[2.5vw]">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                +971 4 582 0205
                                            </span>
                                        </Link>
                                        <Link href="tel:+971545178971" className="text-[1.15vw] font-medium text-shadow mobile:text-[4vw] mobile:flex mobile:justify-center tablet:text-[2.5vw]">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                +971 54 517 8971
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-[5px] mobile:pt-[7vw]">
                                <h6 className="text-[1.9vw] font-display leading-[1.3] mb-[1vw] mobile:text-[5vw] tablet:text-[3.5vw] mobile:uppercase mobile:text-center mobile:mb-[3vw]">Social</h6>
                                <ul className="space-y-[1vw] mobile:space-y-[2vw]">
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow mobile:text-[4vw] tablet:text-[2.3vw] mobile:flex mobile:justify-center" href="https://www.linkedin.com/company/yellow-branding" target="_blank">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                Linkedin
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow mobile:text-[4vw] tablet:text-[2.3vw] mobile:flex mobile:justify-center" href="https://www.instagram.com/welcometoyellow/" target="_blank">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                Instagram
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow mobile:text-[4vw] tablet:text-[2.3vw] mobile:flex mobile:justify-center" href="https://www.behance.net/welcometoyellow" target="_blank">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                behance
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[1.15vw] font-medium uppercase text-shadow mobile:text-[4vw] tablet:text-[2.3vw] mobile:flex mobile:justify-center" href="https://in.pinterest.com/Yellowbranding/" target="_blank">
                                            <span
                                                className="link-line footer-social overflow-hidden block">
                                                Pinterest
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between relative mobile:mt-[7vw] mobile:flex-col mobile:gap-4">
                            <div>
                                <p className="font-medium text-[1.15vw] capitalize mobile:text-[3.5vw] tablet:text-[2.5vw]">© 2024 | Yellow. All rights reserved.</p>
                            </div>

                            <button aria-label="Scroll Down Button" onClick={handleScroll} className="absolute cursor-pointer scroll-btn w-fit left-1/2 -translate-x-1/2 text-[1.1vw] gap-[0.5vw] font-[400] group flex items-center justify-center mobile:hidden tablet:hidden">
                                <span className="relative leading-[1.5] after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Send me back up.</span>
                            </button>

                            <div className="text-[1.15vw] font-medium mobile:text-[3.5vw] tablet:text-[2vw] mr-[3vw] mobile:mr-0">
                                <p className="flex items-center gap-[5px]">Developed By:
                                    <Link
                                        href="https://weareenigma.com" className="" target="_blank">
                                        <span
                                            className="link-line footer-social overflow-hidden block">
                                            Enigma
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer