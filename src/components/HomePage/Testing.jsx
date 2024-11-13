import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const slider = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        x: -100 * (panels.length - 2) + "vw",
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: true,
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        }
      });
    });
    return () => ctx.revert();
  });

  return (
      <div ref={slider} className="w-[300vw] h-screen flex flex-wrap">
        <div className="bg-blue-300 w-[90vw] h-screen panel">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="bg-red-300 w-[90vw] h-screen panel">ONE</div>
        <div className="bg-green-300 w-[90vw] h-screen panel">TWO</div>
        <div className="bg-orange-300 w-[30vw] h-screen panel">THREE</div>
      </div>
  );
}
