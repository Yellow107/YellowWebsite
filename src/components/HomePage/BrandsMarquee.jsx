import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
});

const BrandsMarquee = () => {

  const Card = ({ src }) => {
    return (
      <div className="col-span-1 relative h-full backdrop-blur-md overflow-hidden flex justify-center items-center rounded-[1vw] bg-gradient-to-br from-[#35333350] to-[#24242420] to-45% border border-white/25">
        <Image
          loading="lazy"
          priority={false}
          width={100}
          height={100}
          className="h-full w-full object-cover absolute pointer-events-none"
          alt="Image Texture"
          src="/assets/images/clients/texture.png"
        />
        <Image
          className="object-cover w-full h-full mobile:scale-[1.1]"
          alt="client img"
          loading="lazy"
          src={src}
          quality={100}
          priority={false}
          fill
        />
      </div>
    )
  }

  const Clients = [
    "/assets/images/clients/logo/barakat.svg",
    "/assets/images/clients/logo/cafu.svg",
    "/assets/images/clients/logo/pan-home.svg",
    "/assets/images/clients/logo/oasis.svg",
    "/assets/images/clients/logo/mitsubishi.svg",
    "/assets/images/clients/logo/emaar.svg",
    "/assets/images/clients/logo/oli-oli.svg",
    "/assets/images/clients/logo/hattan.svg",
    "/assets/images/clients/logo/masafi.svg",
    "/assets/images/clients/logo/alokozay.svg",
    "/assets/images/clients/logo/virtuzone.svg",
    "/assets/images/clients/logo/ovasave.svg",
    "/assets/images/clients/logo/fine-arts.svg",
    "/assets/images/clients/logo/sufra.svg",
    "/assets/images/clients/logo/maveroc.svg",
    "/assets/images/clients/logo/clement.svg",
    "/assets/images/clients/logo/beema.svg",
    "/assets/images/clients/logo/numu.svg",
    "/assets/images/clients/logo/ned.svg",
    "/assets/images/clients/logo/luma.svg",
  ]

  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: slider.current,
          scrub: 0.25,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-400px",
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
      <div ref={slider} className="relative w-[400%] whitespace-nowrap mobile:w-[700%]">
        <div ref={firstText} className="w-full grid h-[18vw] grid-cols-20 items-center gap-[1.5vw] pr-[1.5vw] mobile:h-[32vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[16vw]">
          {Clients.map((client, index) => (
            <Card key={index} src={client} />
          ))}
        </div>
        <div ref={secondText} className="absolute left-full top-0 w-full grid h-[18vw] grid-cols-20 items-center gap-[1.5vw] pr-[1.5vw] mobile:h-[32vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[16vw]">
          {Clients.map((client, index) => (
            <Card key={index} src={client} />
          ))}
        </div>
        <div ref={thirdText} className="absolute -left-full top-0 w-full grid h-[18vw] grid-cols-20 items-center gap-[1.5vw] pr-[1.5vw] mobile:h-[32vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[16vw]">
          {Clients.map((client, index) => (
            <Card key={index} src={client} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandsMarquee;
