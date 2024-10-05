/* eslint-disable no-unused-vars */
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

gsap.config({
    nullTargetWarn: false,
});

const Testimonial = () => {

    const Reviews = [
        {
            id: "01",
            name: "Damir",
            company: "Fidelix",
            img: "/assets/images/clients/Fidelix.png",
            content: "I am extremely happy that our paths crossed with Yellow Team and these beautiful people helped me to create the entire brand identity from the scratch! Working with Yellow Agency was an absolute pleasure! They are not only super creative and friendly but also true professionals who deliver top-notch results! Highly recommend them for anyone looking for a branding agency that truly cares!"
        },
        {
            id: "02",
            name: "Mercato Towncetre",
            company: "Mercato",
            img: "/assets/images/clients/mercato.png",
            content: "We have been working with Yellow for over a year, and the team at Yellow acts as true partners to support our business. They have continued to demonstrate their creativity across every campaign and have a strong client servicing team that is responsive and proactive. We really enjoy working with Yellow and would recommend them to any brand looking for an agency that is truly committed and fun to work with."
        },
        {
            id: "03",
            name: "Sonal Nanoo",
            company: "Hattan",
            img: "/assets/images/clients/Hattan.png",
            content: "A truly amazing agency. Having worked with multiple agencies in the UAE, Yellow is by far a true partner to any business. The people are exceptionally talented, creative & kind. Their delivery always goes beyond expectations and Yellow have been an integral part to our business success."
        },
        {
            id: "04",
            name: "Reem Madkour",
            company: "Dardasha",
            img: "/assets/images/clients/dardasha-white.png",
            content: "Yellow transformed our brand into something we are so proud of! They understood our design brief so well and the process was not only executed to the utmost professionalism but also FUN! The team is so wonderful and responsive and we were absolutely blown away by their creativity and quality."
        },
        {
            id: "05",
            name: "Ali R",
            company: "Toucan",
            img: "/assets/images/clients/toucan.png",
            content: "We worked with the team at Yellow to help bring our vision of creating cool, fashionable socks - for the region and from the region. The team at Yellow did an amazing job in coming up with a strategy, name, brand identity, visual language, and also located the right team to develop our socks designs for our brand, Toucan. Overall, a fun and vibrant brand created by a fun and vibrant team!"
        },
        {
            id: "06",
            name: "Ibrahim Lamrini",
            company: "Maveroc",
            img: "/assets/images/clients/maveroc.png",
            content: "We wanted to find the right agency partner to launch our jewelry brand in the region, and we are so happy to have collaborated a with the Yellow team. Yellow worked on our brand strategy, naming, brand identity and visual language - all with a lot of passion and commitment. The team acted like our business partners, consultants and are the biggest cheerleaders of our brand and products. We highly recommend them."
        },
        {
            id: "07",
            name: "Fatima",
            company: "Luma",
            img: "/assets/images/clients/luma.png",
            content: "The best branding agency. We were initially drawn to Yellow due to their impressive portfolio but once we met the team, they exceeded all our expectations. Great energy, true thought partners and excellent work product. They’re extremely receptive to feedback and make the creative process so much fun and dynamic. We have worked with them on multiple projects and they are always our first call when we think of anything design related 🌟🌟🌟🌟🌟 highly recommend them!"
        },
        {
            id: "08",
            name: "Tamer",
            company: "WeStore",
            img: "/assets/images/clients/westore.png",
            content: "I worked with Yellow on our branding, strategy and style guide. they are great, because they are genuine, passionate and pay attention to details. During the whole project we never felt they are your typical agency. We felt they are an extension of our own team. The team at Yellow is full of energy, gumption, and backs it all up with experience and swift delivery. I highly recommend them."
        },
        {
            id: "09",
            name: "Central Park Towers",
            company: "",
            img: "/assets/images/clients/centralpark.png",
            content: "The Yellow team acts as an extension of our business and our marketing dept. They have development successful strategies and are committed to delivering great work that produces results. The team is experienced, proactive and responsive, and they have worked on our brand refresh, campaigns and productions. It is a pleasure working with Yellow and we would highly recommend them."
        },
        {
            id: "10",
            name: "Purshotam",
            company: "Oli Oli",
            img: "/assets/images/clients/oli-oli.png",
            content: "If you are looking for a team of extremely creative, talented, passionate, professional, and conscientious people - you won't find any better alternatives. It was an absolute pleasure to work with Yellow for the creation of our brand - they acted as an extension of our team, which is incredibly rare! Highly recommend them."
        },
    ]

    const Card = ({ img, company, name, content }) => {
        return (
            <div className="relative col-span-1 h-auto backdrop-blur-md overflow-hidden rounded-[1.2vw] bg-gradient-to-br from-[#35333380] to-[#24242420] to-45% border border-white/25 fadein mobile:rounded-[10px]">
                <Image
                    priority={false}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover absolute pointer-events-none"
                    alt="Image Texture"
                    loading="lazy"
                    src="/assets/images/clients/texture-2.png"
                />
                <div className="w-full h-full py-[3vw] px-[2.5vw] space-y-[2vw] mobile:py-[5vw] mobile:px-[4vw] mobile:space-y-[5vw] tablet:space-y-[5vw]">
                    <div className="flex items-center gap-[1vw] mobile:gap-[3vw] tablet:gap-[2vw]">
                        <Image
                            className="w-[5vw] h-[5vw] rounded-full mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[8vw]"
                            alt={`${name} image`}
                            loading="lazy"
                            src={img}
                            quality={100}
                            width={100}
                            height={100}
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-[1.35vw] font-medium mobile:text-[5vw] tablet:text-[3vw] whitespace-normal mobile:leading-[1]">{name}</p>
                            <p className="text-[1.1vw] font-medium mobile:text-[3vw] tablet:text-[2vw]">{company}</p>
                        </div>
                    </div>
                    <p className="text-[1.1vw] whitespace-normal mobile:text-[3.2vw] tablet:text-[2.5vw]">
                        {content}
                    </p>
                </div>
            </div>
        )
    }

    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    let xPercent = 0;
    let direction = 1;

    useGSAP(() => {
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: slider.current,
            scrub: 0.25,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (e) => (direction = e.direction * 1),
          },
          x: "400px",
        });
        requestAnimationFrame(animate);
      });

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        gsap.set(thirdText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.015 * direction;
    };

    return (
        <div className="relative w-screen overflow-hidden fadein">
            
            <div ref={slider} className="relative w-[400%] whitespace-nowrap tablet:w-[500%] mobile:w-[700%]">
                <div ref={firstText} className="w-full grid grid-cols-10 gap-x-[2vw] pr-[2vw]">
                    {Reviews.map((review, index) => (
                        <Card key={index} img={review.img} company={review.company} name={review.name} content={review.content} />
                    ))}
                </div>

                <div ref={secondText} className="w-full grid grid-cols-10 gap-x-[2vw] pr-[2vw] absolute left-full top-0">
                    {Reviews.map((review, index) => (
                        <Card key={index} img={review.img} company={review.company} name={review.name} content={review.content} />
                    ))}
                </div>

                <div ref={thirdText} className="w-full grid grid-cols-10 gap-x-[2vw] pr-[2vw] absolute -left-full top-0">
                    {Reviews.map((review, index) => (
                        <Card key={index} img={review.img} company={review.company} name={review.name} content={review.content} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Testimonial