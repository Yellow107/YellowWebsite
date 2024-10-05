import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function Casestudy() {
  return (
    <>
      <section className="w-full h-full py-[8%] mobile:pt-[15%] tablet:w-full bg-black" id="casestudy">
        <div className="container bg-white">
          <div className="grid grid-cols-2 gap-x-[2.5vw] gap-y-[4vw] mobile:flex mobile:flex-col mobile:gap-y-[7vw]">
            <div className="">
              <SectionTitle data-title-anim className="text-[4.8vw] mb-[3vw] leading-[1.1] font-display w-[70%] mobile:w-full mobile:normal-case mobile:order-1 mobile:mb-[7vw] " text={"The Art of Rebellion"}/>
              <div className="text-[1.2vw] font-medium flex flex-wrap gap-[0.5vw] w-[70%] mobile:order-4 mobile:text-[4vw] mobile:w-full mobile:gap-[2vw] tablet:text-[2vw] tablet:gap-[0.8vw]">
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Brand Strategy
                </p>
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Logo Development
                </p>
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Photography Style
                </p>
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Brand Name
                </p>
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Packaging
                </p>
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Website
                </p>
                <p className="border-[1px] border-black rounded-[50px] px-[1.5vw] py-[0.6vw] min-w-[7vw] w-fit border-opacity-70 fadeup mobile:px-[3vw] mobile:py-[1.5vw]">
                  Social Media
                </p>
              </div>
            </div>
            <div className="col-start-2 text-[1.4vw] font-medium pt-[1vw] mobile:text-[4.5vw] mobile:font-normal mobile:pt-[5vw] tablet:text-[2.2vw]">
              <p data-para-anim className="mb-[4vw] leading-[1.3] mobile:mb-[10vw] ">
                Meet Rita & Ibrahim, an incredibly talented couple that left
                their established careers to pursue their dreams of creating a
                bold new fine jewelry brand. Rebellion was a major theme
                throughout everything - from the playful, unexpectedness of the
                pieces created to it being a purely DTC brand to the personality
                of the founders. This segued into the essence of the brand being
                centered on the idea of “The Art of Rebellion” - a narrative
                that was all about celebrating self-expression, confidence,
                colour, creativity, boldness and femininity.
              </p>
              <div className="flex gap-[5vw] text-[1.4vw] tablet:text-[2vw]">
                <div>
                  <p data-para-anim className="text-[1vw] mb-[0.5vw] mobile:text-[5vw] tablet:text-[2vw]">Client</p>
                  <p data-para-anim className="mobile:text-[5vw] mobile:font-medium" >Maveroc</p>
                </div>
                <div>
                  <p data-para-anim className="text-[1vw] mb-[0.5vw] mobile:text-[5vw] tablet:text-[2vw]">Industry</p>
                  <p data-para-anim className="mobile:text-[5vw] mobile:font-medium">Website Development</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 mt-[4vw] relative w-[90vw] h-[45vw] rounded-[15px] mobile:h-[140vw] mobile:w-[85vw] imageanim bg-[#EDA0C4] mobile:rounded-[10px] tablet:w-[85vw] fadeup">
              <Image
                src="/assets/images/portfolio/portfolio-detail/Maveroc-1.png"
                alt="maveroc-1"
                fill
                className="mobile:object-contain"
              />
            </div>
            <div className="relative col-span-1 w-[43.7vw] h-[45vw] imageanim mobile:w-[85vw] mobile:h-[100vw] tablet:w-[41.5vw] fadeup">
              <Image
                src="/assets/images/portfolio/portfolio-detail/Maveroc-2.png"
                alt="maveroc-2"
                fill
              />
            </div>
            <div className="mb-[4vw] col-start-2 col-span-1 w-[43.7vw] h-[45vw] relative imageanim mobile:w-[85vw] mobile:h-[100vw] tablet:w-[41.5vw] fadeup">
              <Image
                src="/assets/images/portfolio/portfolio-detail/Maveroc-3.png"
                alt="maveroc-3"
                fill
              />
            </div>
            <div>
              <h3 data-title-anim className="font-display text-[3vw] mobile:text-[10vw] tablet:text-[5vw] ">Why Maveroc</h3>
            </div>
            <div className="col-start-2">
              <p className="text-[1.4vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw] ">
                <span data-para-anim className="mb-[2vw]">
                  Naming is always one of the most challenging aspects of
                  creating a brand. It&apos;s incredibly personal, subjective and
                  often all the great ideas you come up with are taken. We
                  explored many themes and ideas, focusing predominantly on
                  evocative and associative names - names that communicated the
                  brand idea without being too descriptive (our favourite kind
                  of names)! And thus Maveroc was born.
                </span>
                <br />
                
                <span data-para-anim>
                  With a strategic foundation in place, a name we all fell in
                  love with and the essence of rebellion at the heart of the
                  brand, we developed the brand identity that consisted of a
                  vibrant colour palette made up of our favourite colours - pink
                  and yellow! The colours of passion, optimism and creativity.
                  We selected contemporary, bold typefaces, and created a visual
                  language that allowed the hero of our story to shine: the
                  jewelry. This was followed by developing all the supporting
                  touchpoints where the brand really comes to life - from
                  creating the packaging and image style to working closely with
                  the founders and various partners to design, direct and launch
                  the website, social media and photoshoots.
                </span>
              </p>
            </div>
            <div className="col-span-2 mt-[4vw]">
              <div className="relative w-[90vw] h-[45vw] imageanim mobile:w-[85vw] mobile:h-[100vw] mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[85vw] fadeup">
                <Image
                  src="/assets/images/portfolio/portfolio-detail/Maveroc-11.png"
                  alt="maveroc-reel-bg"
                  className="w-full h-full"
                  fill
                />
                <video
                  src="/assets/images/portfolio/videos/Maveroc-reel.mp4"
                  autoPlay={true}
                  loop
                  muted
                  className="w-[80%] h-[80%] object-contain absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mobile:w-[90%] mobile:h-[90%] fadeup"
                ></video>
              </div>
            </div>
            <div className="col-span-2 relative w-[90vw] h-[45vw] imageanim mobile:w-[85vw] mobile:h-[60vw] mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[85vw] fadeup">
              <Image
                src="/assets/images/portfolio/portfolio-detail/Maveroc-10.png"
                alt="maveroc-10"
                fill
                className="mobile:object-contain mobile:scale-150"
              />
            </div>
            <div className="relative col-span-1 w-[43.7vw] h-[45vw] overflow-hidden rounded-[10px] imageanim mobile:w-[85vw] mobile:h-[70vw] mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[41.5vw] fadeup">
              <Image
                src="/assets/images/portfolio/portfolio-detail/maveroc-4.png"
                alt="maveroc-4"
                className="object-cover h-full w-full mobile:object-cover"
                fill
              />
            </div>
            <div className="col-start-2 relative col-span-1 w-[43.7vw] h-[45vw] overflow-hidden rounded-[10px] imageanim mobile:w-[85vw] mobile:h-[100vw] mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[41.5vw] fadeup">
              <Image
                src="/assets/images/portfolio/portfolio-detail/maveroc-7.png"
                alt="maveroc-7"
                className="object-cover h-full w-full"
                fill
              />
            </div>
            <div className="mt-[4vw] mobile:mt-[10vw]">
              <h3 data-title-anim className="font-display text-[3vw] mobile:text-[10vw] mobile:leading-[1.3] tablet:text-[5vw]  ">
                Passionate Cheerleaders
              </h3>
            </div>
            <div className="col-start-2 mt-[5vw] mobile:mt-0 mobile:mb-[7vw]">
              <p className="text-[1.4vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw] ">
                <span data-para-anim className="mb-[2vw]">
                  The team: Yellow works collaboratively with our in-house team
                  which was made up of Sarah, Mamta, Dan, Stuart along with a
                  special shout out to our partners and collaborators.
                </span>
                <br />
                
                <span data-para-anim>
                  We’ve worked on some of the most successful homegrown brands
                  in the region like OliOli, Cafu, Luma, Goat amongst many
                  others. If you&apos;ve been daydreaming of starting your own
                  business, this is the sign you&apos;ve been waiting for!
                </span>
              </p>
            </div>
            <div className="relative col-span-1 w-[43.7vw] h-[45vw] overflow-hidden rounded-[10px] imageanim mobile:w-[85vw] mobile:h-[85vw] mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[41.5vw] fadeup">
                <Image src="/assets/images/portfolio/portfolio-detail/maveroc-5.png" alt="maveroc-5" fill/>
            </div>
            <div className="relative col-span-1 w-[43.7vw] h-[45vw] overflow-hidden rounded-[10px] imageanim mobile:w-[85vw] mobile:h-[85vw] mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[41.5vw] fadeup">
                <Image src="/assets/images/portfolio/portfolio-detail/maveroc-8.png" alt="maveroc-8" fill/>
            </div>
            <div className=" col-span-2 relative w-[90vw] h-[45vw]  imageanim rounded-[10px] overflow-hidden mobile:h-[55vw] mobile:w-[85vw]  mobile:rounded-[15px] mobile:overflow-hidden tablet:w-[85vw] flex justify-center items-center fadeup">
              <div className="relative h-full w-full">
              <Image src="/assets/images/portfolio/portfolio-detail/maveroc-9.png" alt="maveroc-9" fill className="object-cover" />


              </div>
            </div>
            <div className="col-span-2 relative w-[90vw] h-[45vw]  imageanim rounded-[10px] overflow-hidden mobile:h-[55vw] mobile:w-[85vw] mobile:rounded-[10px] mobile:overflow-hidden tablet:w-[85vw] flex justify-center items-center fadeup">
            <div className="relative h-full w-full">
            <Image src="/assets/images/portfolio/portfolio-detail/maveroc-6.png" alt="maveroc-6" fill  className="object-cover"/>



              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
