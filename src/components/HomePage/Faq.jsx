import React, { useRef } from 'react'
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AccordionLine from "../AcoordionLine";
import { FAQPageJsonLd } from 'next-seo';

const FaqData = [
  {
    id: 1,
    title: "What services does Yellow offer?",
    description: "Yellow supports clients in solving their branding and marketing challenges. The agency offers services including brand strategy, brand identity, brand naming, branded touchpoints, brand engagement and guidelines, web and app design, social media strategy and content, and advertising campaigns.",
  },
  {
    id: 2,
    title: "How can Yellow’s expertise help my business stand out in Dubai’s market?",
    description: "With deep experience, market knowledge, and a results-driven approach, Yellow helps businesses stand out in Dubai’s competitive market. The agency immerses itself in understanding your business, audience, and competition to deliver impactful work.",
  },
  {
    id: 3,
    title: "What industries does Yellow Branding & Advertising agency cater to?",
    description: "Yellow works with diverse industries, including e-commerce, automotive, retail, FMCG, hospitality, healthcare, and more, delivering customized branding and marketing strategies."
  },
  {
    id: 4,
    title: "What makes Yellow different from other branding and advertising agencies in Dubai?",
    description: "Yellow stands out through its people, extensive experience, proven case studies, and a spirit of partnership. As a leading branding and communications agency, Yellow consistently delivers value and helps clients achieve their objectives.	"
  },
  {
    id: 5,
    title: "Does Yellow provide branding and marketing consultation services for new startups?",
    description: "Yes. Yellow provides branding and marketing services for startups in Dubai and Abu Dhabi, and has contributed to several successful startup journeys. The agency helps startups build strong brand identities, connect with their audience, and achieve sustainable growth."
  },
  {
    id: 6,
    title: "In which countries and cities does Yellow branding agency offer its services?",
    description: "Yellow is headquartered in Dubai but has provided creative branding, advertising, and marketing services across Abu Dhabi, Oman, Bahrain, Qatar, Saudi Arabia, and beyond."
  },
];

const SingleAccordion = ({ id, title, content }) => {
  return (
    <AccordionItem value={id}>
      <AccordionLine className="relative z-[-1] my-[1vw] tablet:hidden mobile:hidden" linecenter={1.38} />
      <div className="w-full bg-black lineDraw h-[1px] hidden mobile:block tablet:block"></div>
      <AccordionTrigger data-para-anim className="text-[2.2vw] text-left mobile:text-[5vw] mobile:flex mobile:w-full tablet:text-[4vw] tablet:text-left text-body font-display font-normal py-[1.5%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.2vw] text-body tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] tablet:text-[2.7vw] tablet:w-[90%]">
        <div
          className="fadeIn"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </AccordionContent>
    </AccordionItem>
  )
}

const Faq = () => {

  const mainEntity = [
    ...FaqData.map((item) => ({
      questionName: item.title,
      acceptedAnswerText: item.description,
    })),
  ]

  const containerRef = useRef(null);
  return (
    <>
    <FAQPageJsonLd  mainEntity={mainEntity} />
    <Section className="pb-[5%] mobile:pb-[15%]" id="services">
      <div ref={containerRef} className="container">
        <div className="mt-[2vw]">
          <SectionTitle data-title-anim text="FAQ's" />
        </div>
        <div className="w-4/5 mx-auto mt-[6vw] mobile:w-full tablet:w-full satoshi">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {FaqData.map((service) => (
              <SingleAccordion
                key={service.id}
                id={`item-${service.id}`}
                title={service.title}
                content={service.description}
                btnLink={service.link}
              />
            ))}
          </Accordion>
          <div className="w-full bg-black lineDraw h-[1px] hidden mobile:block tablet:block"></div>
          <AccordionLine />
        </div>
      </div>
    </Section>
    </>
  )
}

export default Faq
