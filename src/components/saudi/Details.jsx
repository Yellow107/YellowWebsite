import React from 'react'
import LinkButton from '../Button/LinkButton';
import Line from '../Line';
import Image from 'next/image';


const services = [
  {
    title: "Brand Communication",
    paragraphs: [
      "We help you talk to your customers in the right way. Through our brand communication service, we craft clear messages that match your brand voice and work across all channels in Saudi Arabia.",
    ],
    image: "/assets/images/service/brand-strategy/Brand-Positioning.png",
  },
  {
    title: "Digital Branding",
    paragraphs: [
      "Our <b>digital branding services in Saudi Arabia</b> include everything your business needs online:",
    ],
    lists: [
      "Digital Audit and Strategy: We check your current digital presence and build a step-by-step strategy to improve your brand online.",
      "Website Design and App: We design clean, easy-to-use websites and mobile apps that help customers interact with your brand.",
      "Social Media Management: We handle your social media channels, making sure your posts, stories, and campaigns match your brand identity and engage your audience."

    ],
    image: "/assets/images/service/brand-strategy/Brand-Architecture.png",
  },
];
const Details = () => {

  return (
    <section className="w-full h-full bg-black " id="detail">
      <div className=" container mobile:flex mobile:flex-col tablet:flex-col tablet:flex pb-[5%] bg-white">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="tablet:flex mobile:flex mobile:flex-col tablet:gap-[2vw] flex mobile:gap-0 gap-[15vw]">
              <div className="col-start-3 flex justify-end mobile:justify-center tablet:order-1 order-1 mobile:order-none">
                <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative fadeup mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                  <Image
                    quality={100}
                    loading="lazy"
                    src={service.image}
                    alt={`${service.title} Image`}
                    className="absolute h-full w-full object-cover"
                    fill
                  />
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-[2vw] w-[60%] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                <h2
                  data-para-anim
                  className="text-[2.5vw] capitalize font-display mobile:text-[8vw] tablet:text-[4vw]"
                >
                  {service.title}
                </h2>

                <div className='space-y-[1.5vw] mobile:space-y-5'>
                  {service.paragraphs.map((para, paraIndex) => (
                    <p
                      key={paraIndex}
                      data-para-anim
                      className="text-[1.1vw] mobile:text-[4.5vw] font-medium tablet:text-[2vw] w-[85%]"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                  {service.lists && (
                    <ul className='pl-4 list-disc space-y-[0.5vw] mobile:space-y-5 font-medium'>
                      {service.lists.map((item, index) => (
                        <li
                          key={index}
                          data-para-anim
                          className="text-[1.1vw] mobile:text-[4.5vw] tablet:text-[2vw]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="fadeup">
                  <LinkButton
                    btnLink={"/contact-us"}
                    btnText={"Connect With Yellow"}
                  />
                </div>
              </div>
            </div>
            <div className="h-[1px] col-span-3 bg-black my-[2vw] tablet:my-[6vw] lineDraw hidden tablet:block mobile:block"></div>
            <div className="my-[6vw] mb-[3vw] tablet:h-[2px] tablet:my-[6vw] tablet:hidden">
              <Line />
            </div>
          </React.Fragment>
        ))}

      </div>
    </section>
  )
}

export default Details