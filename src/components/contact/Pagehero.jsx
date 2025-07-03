import React from "react";
import Image from "next/image";

export default function Pagehero() {
  const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact-form");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <>
      <section
        className="w-full h-full py-[10%] flex items-center mobile:h-full mobile:pt-[30%] tablet:h-full  tablet:pt-[15%] bg-white "
        id="hero"
      >
        <div className="flex justify-between container mobile:flex-col  mobile:gap-[15vw] ">
          <div className="w-full">
            <h1
              data-para-anim
              className="text-[5.5vw] font-display uppercase w-[92%] leading-[1.1] mb-[3vw] mobile:text-[12vw] mobile:w-full mobile:mb-[7vw] tablet:text-[7vw] tablet:w-[80%]"
            >
              Lets build something bright together!
            </h1>
            <div className="w-[60%] text-[1.18vw] space-y-[1vw] mobile:text-[5vw] mobile:w-full tablet:text-[2.2vw] tablet:w-[80%] ">
              <p data-para-anim>
                Looking for a branding partner who feels more like a co-founder?
                You’re in the right place.
              </p>
              <p data-para-anim>
                {" "}
                At Yellow, we help businesses stand out, scale up, and stay
                genuinely relevant with{" "}
                <span className="underline"> strategy</span>,{" "}
                <span className="underline"> design</span>,{" "}
                <span className="underline"> marketing </span>and everything in
                between.
              </p>
              <p data-para-anim>
                Launching something new? Refreshing a legacy brand? Or just need
                a creative team who gets it (and gets you)?
              </p>
              <p
                data-para-anim
                onClick={handleScrollToContact}
                className="underline cursor-pointer"
              >
                Let’s talk!
              </p>
              {/* <div>
              <p data-para-anim>What we can help with:</p>
              <ul className="list-disc ml-[2vw] pt-[0.5vw] font-medium">
                <li>Brand strategy & naming</li>
                <li>Visual identity design & rebranding</li>
                <li>Website design</li>
                <li>Social media & content creation</li>
                <li>Digital marketing & launch campaigns</li>
              </ul>
              </div>
              <p data-para-anim>Tell us what you need - or let&apos;s workshop and figure it out together.</p>
              <p data-para-anim>Based in Dubai, working with ambitious brands across the region and beyond.</p> */}
            </div>
          </div>
          <div className="w-[50vw] h-[44vw] relative mobile:w-[85vw] mobile:h-[120vw] rounded-xl overflow-hidden fadeup">
            <div>
              <Image
                src="/assets/images/contact/contact-head2.webp"
                alt="contac-head-img"
                className="object-cover h-full w-full "
                fill
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
