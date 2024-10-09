import React from "react";
import BlackButton from "../Button/BlackButton";
import Image from "next/image";

const services = [
  {
    id: 1,
    imageSrc: "/assets/images/service/brand-strategy/brand-strategy-listing.png",
    title: "Brand Strategy",
    link:"/what-we-do/brand-strategy",
    description:"<p data-para-anim>A brand is a decision-making shortcut for people. What are the first names that pop in your head when you think of the freshest juices on supermarket shelves? Barakat? A children&apos;s play space? OliOli. Fuel delivery…Cafu. That&apos;s Yellow - creating inimitable brands that are often the first one to pop in your head when you think of the category.</p><br><p>This isn&apos;t done through aesthetics and marketing, although both are undeniably important. It&apos;s always about understanding the problem we are trying to solve - not for the business owners but the consumers. Our rigorous process involves research, workshops, benchmarking, understand global trends, cultural movements across generations followed by creating a strong foundation that drives everything you do, from the creation of the elements that make up your brand to the stories you tell to your internal culture and customer experience. </p>",
  },
  {
    id: 2,
    imageSrc: "/assets/images/service/brand-identity/brand-identity-listing.png",
    title: "Brand Identity",
    link:"/what-we-do/brand-identity",
    description:"<p data-para-anim>A brand has always been more than just a logo. This is truer now than ever before, as over 80% of consumers research products online before making an in-store purchase. This shift makes all other brand cues incredibly important, from your voice and the way your products are photographed, to the illustrations and graphic elements that shape your brand's personality. From the tangible to the intangible, we carefully consider, craft, and create all the touchpoints surrounding your product. Our goal is to ensure your brand is always leading in the consideration set for your category.</p>",
  },
  {
    id: 3,
    imageSrc: "/assets/images/service/naming/Brand-Naming-listing.webp",
    title: "Naming",
    link:"/what-we-do/naming",
    description:"<p data-para-anim>From diving into the meaning of obscure words in different languages to stories, lyrics, poetry, art, classical and historical texts to Gen Z colloquialisms, we explore every single angle when it comes to naming your brand. This is why each name crafted by our team has such a great story behind it. From brand and product names to business names to even street naming within communities, we pride ourselves on our extensive experience. Our thorough process includes pre-screening for identical trademarks, linguistic and domain checks, descriptor and TLD recommendations to ensure the names we present are yours to fall in love with.</p><br><p data-para-anim>Some of our greatest hits include <a href='/our-work/cafu-branding-and-digital' class='link-style'>CAFU</a>, <a href='/our-work/olioli-branding' class='link-style'>OliOli</a>, <a href='/our-work/pan-home-case-study' class='link-style'>Pan Home</a>, <a href='/our-work/numu-early-childhood-centre-brand-case-study' class='link-style'>Numu</a> and Irth.</p>"
  },
  {
    id: 4,
    imageSrc: "/assets/images/service/communication/communication-listing.webp",
    title: "Communication",
    link:"/what-we-do/communication",
    description: "<p data-para-anim>Driven by data, research, and insights and guided by experience and creativity, our communication strategies and campaigns always intersect cultural movements, consumer needs and your brand's best self. This is why they strike a chord, create impact and deliver results. From bridge banners to reels, activation ideas or radio, we can go all out or rein it in, depending on what feels right for your brand, needs and budgets. Our roster includes global brands such as <a class='link-style' href='/our-work/mitsubishi-motors'>Mitsubishi Motors</a> to local powerhouses like <a class='link-style' href='/our-work/emaar-malls-group'>Emaar Malls Group</a> to many independent, homegrown brands.</p>"
  },
  {
    id: 5,
    imageSrc: "/assets/images/service/digital/Digital-listing.webp",
    title: "Digital",
    link:"/what-we-do/digital",
    description: "<p data-para-anim>We help brands connect with audiences, wherever they may be. We work with you to bring your brand to life across all digital applications, from website design and writing, to app design and creation – taking UAE and Dubai based businesses global through all forms of new media.</p><br><p data-para-anim>We develop social media strategies and calendars, creating content that reflects and communicates your brand story through different social channels, including Facebook, Instagram, YouTube, Twitter, LinkedIn and Snapchat. We manage your social media accounts, publish content and taking care of response management.</p><br><p data-para-anim>We develop digital advertising campaigns that communicate your message, driving traffic to your website, store or business.</p>"
  },
];

export default function ServiceList() {

  return (
    <>
      <section className="w-full h-full bg-black" id="list">
        <div className="container pt-[7%] mobile:py-[10%] tablet:py-0 bg-white">
          <div className="space-y-[8vw]">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-7 h-full gap-x-[3vw] gap-y-[7vw] mobile:flex mobile:flex-col tablet:flex-col tablet:flex tablet:gap-y-[10vw]">
                <div className="col-span-4 w-full h-full">
                  <div className={`w-[50vw] h-[33vw] fadeup rounded-xl overflow-hidden relative mobile:w-full mobile:h-[140vw] tablet:w-full tablet:h-[45vw] ${index % 2 === 0 ? '' : 'mobile:mt-[5vw]'}`}>
                      <Image
                        loading="lazy"
                        quality={100}
                        src={service.imageSrc}
                        alt={`${service.title} Image`}
                        title={`${service.title} Image`}
                        className="object-cover w-full h-full"
                        fill
                      />
                  </div>
                </div>
                <div className="col-start-5 col-span-3 w-full mobile:mb-[7vw] tablet:mb-[3vw]">
                  <h3
                    data-para-anim
                    className="text-[2.5vw] font-display mb-[1.5vw] mobile:text-[9vw] mobile:mb-[5vw] tablet:text-[5vw] "
                  >
                    {service.title}
                  </h3>
                  <div 
                    className="text-[1.2vw] mb-[2vw] mobile:text-[4.5vw] tablet:text-[2.5vw]"
                    dangerouslySetInnerHTML={{__html:service.description}}
                  />
                  <div className="fadeup mobile:mt-[7vw]">
                    <BlackButton btnLink={service.link} btnText={"View More"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="fadeup ml-0 w-[6vw] h-[6vw] mt-[6vw] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw] mobile:mt-[10vw]">
            <img src="/assets/images/gifs/Minion.gif" loading="lazy" height={150} width={150} alt="Minion gif"/>
          </div>
        </div>
      </section>
    </>
  );
}
