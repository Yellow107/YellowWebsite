import React, { useRef } from 'react'
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AccordionLine from "../AcoordionLine";

const FaqData = [
    {
      id: 1,
      title: "What services does Yellow offer?",
      description:"Yellow supports clients solve their branding or marketing challenge. Yellow offers multiple services including brand strategy, brand Identity, brand naming, branded touchpoints, brand engagements and guidelines, web and app design, social media strategy and content, and advertising campaigns.",
    },
    {
      id: 2,
      title: "How can Yellow’s expertise help my business stand out in Dubai’s market?",
      description:"Our experience, our market knowledge and our dedication to deliver results for our clients, makes us a leading branding and marketing agency based in Dubai. We ensure we immerse ourselves in understaning your business, your audience and your competition in order to deliver work that stands out.",
    },
    {
      id: 3,
      title: "What industries does Yellow Branding & Advertising agency cater to?",
      description:"Yellow branding agency works with a variety of industries, including e-commerce, automotive, retail, FMCG, hospitality, healthcare, and more, providing customized branding and marketing strategies."
    },
    {
      id: 4,
      title: "What makes Yellow different from other branding and advertising agencies in Dubai?",
      description: "Our people, our experience, our case studies and our spirit of partnership. As a leading branding and communications agency, we are responsible to our clients and ensure we consistently deliver value and help them achieve their objectives.	"
    },
    {
      id: 5,
      title: "Does Yellow provide branding and marketing consultation services for new startups?",
      description: "Yes, Yellow offers branding and marketing consultancy services in Dubai and Abu Dhabi to startups, and has been behind several startup stories from the region. services helps startups build a strong brand identity, connect with their target audience, and achieve sustainable growth through effective strategies.	"
    },
    {
        id: 6,
        title: "In which countries and cities do Yellow branding agency, offer its services?",
        description: "Yellow is a leading branding agency with the head office in Dubai. However, Yellow has experience providing creative branding, advertising, and marketing	services in multiple countries and cities, such as Abu Dhabi, Oman,	Bahrain, Qatar, Saudi Arabia and across the Gulf Countries.	"
      },
  ];

  const SingleAccordion = ({ id, title, content }) => {
    return (
        <AccordionItem value={id}>
            <AccordionLine className="relative z-[-1] my-[1vw] tablet:hidden mobile:hidden" linecenter={1.1}/>
            <div className="w-full bg-black lineDraw h-[1px] hidden mobile:block tablet:block"></div>
            <AccordionTrigger data-para-anim className="text-[2.2vw] mobile:text-[5vw] mobile:text-left mobile:flex mobile:w-full tablet:text-[4vw] tablet:text-left text-body font-display font-normal py-[3%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
                {title}
            </AccordionTrigger>
            <AccordionContent className="text-[1.2vw] text-body tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] tablet:text-[2.7vw] tablet:w-[90%]">
                <div 
                    className="fadeIn"
                    dangerouslySetInnerHTML={{__html:content}}
                />
   
            </AccordionContent>
        </AccordionItem>
    )
}
const Faq = () => {
     const containerRef = useRef(null);
  return (
    <Section className="pb-[5%] mobile:pb-[15%]" id="services">
    <div ref={containerRef} className="container">
        <div className="space-y-[2.5vw] mt-[5vw] mobile:space-y-[7vw]">
            <SectionTitle data-title-anim text="FAQ's" />
            
        </div>

        <div className="w-full ml-auto mt-[8vw] mobile:w-full tablet:w-full satoshi">
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
            <AccordionLine/>
        </div>
    </div>
</Section>
  )
}

export default Faq
