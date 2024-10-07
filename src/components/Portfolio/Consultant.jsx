import Image from "next/image";
import Section from "../Section";

const Consultant = ({ consultant }) => {
    const {
        consultantName,
        consultantImage,
        consultantBio,
     } = consultant;
    return (
        <>
            <Section id="consultant" className="bg-black">
                <div className="container bg-white pb-[10%] pt-[5%] mobile:pb-[15%]">
                    <div className="mb-[5vw]">
                        <h2 data-title-anim className="text-[5vw] leading-[1.2] font-display mobile:text-[10vw] tablet:text-[6vw] inline-block">
                            Meet Our Consultant
                        </h2>
                    </div>
                    <div className="flex justify-between items-start mobile:flex-col">
                        {consultantImage && (
                            <div className="w-[35%] tablet:w-[40%] mobile:w-full mobile:h-[100vw] relative overflow-hidden mobile:rounded-lg image-animation-wrapper">
                                <div className="h-full w-full overflow-hidden rounded-xl">
                                    <Image
                                        className="w-full h-full object-cover object-top"
                                        src={consultantImage.node.mediaItemUrl}
                                        alt={consultantImage.node.altText}
                                        width={600}
                                        height={1000}
                                        quality={100}
                                        priority={false}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="w-[55%] mobile:w-full py-[1.5vw] mobile:pt-5">
                            <h4 data-para-anim className="text-[3vw] font-display uppercase leading-[1.1] mb-[2vw] mobile:mb-[3vw] mobile:text-[8vw] tablet:text-[5vw]">{consultantName}</h4>
                            <div 
                                className="w-[85%] fadeup text-[1.25vw] tablet:text-[2vw] tablet:w-full font-medium mobile:w-full mobile:text-[4vw]"
                                dangerouslySetInnerHTML={{__html: consultantBio}}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Consultant;