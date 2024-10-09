import LinkButton from "../Button/LinkButton";

const essentialsData = [
  {
    id: 1,
    title: "Easily Amused",
    content:
      "Amongst all the deadlines and drama, how will it ever be fun if someone isn't bursting into song or being given gold stars or telling stories that sound wildly made up or sharing how they're a strong, independent woman at all of 23? As the cliche goes, we're incredibly serious about the work but a lot less so about ourselves.",
  },
  {
    id: 2,
    title: "Full of Curiosity, Wonder and Passion",
    content:
      '<span class="italic mb-[1vw]">"Every child is an artist. The problem is how to remain an artist once we grow up" - <span class="not-italic">Picasso</span></span> <br> We look for those who have managed to hold on to their inner child and the artist within. The ones who want to keep learning, not just about their craft, but about the world around them, about people, trends, fashion, cuisines. They&apos;re discoverers, curators and storytellers. And they bring all of this into the work they do, every day, sprinkling each project with their own magic.',
  },
  {
    id: 3,
    title: "Ready to Dive In",
    content:
      "The best ones of us can't stop coming up with new ideas and then executing them flawlessly, are unafraid of jumping in, scraping their knees and getting it occasionally wrong, but always giving it their all. We're still small and growing, so we love that each member of our team is always willing to help out and take ownership.",
  },
  {
    id: 4,
    title: "Always Open-Minded",
    content:
      "We pride ourselves on being a safe space for different types of people - the geeks, the introverts, the main characters, the workaholics, the fitness enthusiasts, the future influencers and the future housewives of beverly hills (okay, maybe not). We're a very eclectic mix that accepts, encourages and celebrates each others' quirks, because that diversity of personalities and thoughts makes what we do all the more creative.",
  },
];

export default function Essentials() {

  return (
    <section className="bg-black relative overflow-hidden" id="essentials">
      <div className="container py-[8%] mobile:py-[15%] bg-white">
        <div className="w-[50%] flex flex-col gap-[2vw] mb-[8vw] mobile:w-full mobile:gap-[5vw] tablet:w-[70%] mobile:mb-[20vw]">
          <h4
            data-para-anim
            className="text-[2vw] font-display mobile:text-[7vw] tablet:text-[3vw]"
          >
            Don’t see any job opening that might fit you?
          </h4>
          <p
            data-para-anim
            className="w-[90%] text-[1.4vw] font-medium leading-[1.3] mb-[2vw] mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.2vw]"
          >
            We are always looking for exceptional talent. Send us your work or a
            note on why you think you would be a good fit for the company.
          </p>
          <div className="fadeup mobile:mt-[4vw]">
            <LinkButton btnText={"Send Your CV"} btnLink={"/careers/career-detail"}/>
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-[2vw] mb-[5vw] mobile:w-full tablet:w-[70%]">
          <h2
            data-title-anim
            className="text-[5vw] font-display mobile:text-[10vw] tablet:text-[6vw]"
          >
            Essentials
          </h2>
          <p
            data-para-anim
            className="w-[80%] font-medium text-[1.4vw] mobile:w-full mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.2vw]"
          >
            Our team is made up of some incredibly talented people who also
            happen to have a few traits in common. Things that make them all
            Yellow (this is the only time we are referencing *that song*, we
            promise!).
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-[2vw] gap-x-[15vw] mobile:flex mobile:flex-col mobile:gap-y-[5vw] tablet:gap-x-[5vw]">
          {essentialsData.map((item, index) => (
            <div
              key={item.id}
              className={`col-span-1 flex justify-center mobile:justify-start mobile:w-full`}
            >
              <div className="w-full">
                <span
                  data-title-anim
                  className="text-[7vw] font-normal font-display mb-[1.5vw] mobile:text-[17vw] mobile:font-normal tablet:text-[8vw]"
                >{`0${item.id}.`}</span>
                <h4
                  data-para-anim
                  className="text-[2vw] font-display mb-[1.5vw] mobile:text-[7vw] tablet:text-[3vw]"
                >
                  {item.title}
                </h4>
                <p
                  data-para-anim
                  className="text-[1.2vw] leading-[1.3] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div
                  className={`w-full bg-black h-[1px] mt-[12vw] lineDraw hidden mobile:block ${
                    index === essentialsData.length - 1 ? "mobile:hidden" : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
