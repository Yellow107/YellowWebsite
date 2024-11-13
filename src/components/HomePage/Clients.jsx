
import Section from "../Section"
import SectionTitle from "../SectionTitle";
import dynamic from 'next/dynamic';
const BrandsMarquee = dynamic(() => import('../Extra/BrandsMarquee'), { ssr: false });
const Testimonial = dynamic(() => import('../Extra/Testimonial'), { ssr: false });

const Clients = () => {

    return (
        <>
            <Section className="py-[5%] dark h-[125vw] overflow-hidden tablet:h-[180vw] mobile:h-[255vw]" id="clients">
                <div className="bg-body pt-[5%] pb-[10%] text-white relative min-h-screen mobile:py-[15%]">
                    <div className="container mb-[8vw]">
                        <div className="space-y-[1.5vw] mobile:space-y-[4vw]">
                            <p data-para-anim className="text-[1.2vw] font-medium fadeIn mobile:text-[4vw] tablet:text-[3vw]">Our Clients</p>
                            <h4 data-para-anim className="text-[2.5vw] font-display leading-[1.35] w-1/2 mobile:text-[6.5vw] mobile:w-full tablet:text-[3.5vw] tablet:w-[60%]">
                                Small or large, local or far, all of our clients are connected with our purpose of perfect execution.
                            </h4>
                        </div>
                    </div>
                    <div className="mb-[18vw] w-full group overflow-hidden h-[18.5vw] tablet:h-[16.5] mobile:h-[32vw] relative" data-magnetic-target data-magnetic-strength="200">
                        <BrandsMarquee />
                        <div className="absolute h-[6vw] w-[6vw] rounded-full overflow-hidden text-[1.25vw] bg-white flex items-center justify-center text-black top-[40%] left-[48%] magnetic-inner pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity tablet:hidden mobile:hidden">
                            <span>
                                Drag
                            </span>
                        </div>
                    </div>
                    <div className="w-full overflow-hidden relative z-10 h-[41.5vw] tablet:h-[88vw] mobile:h-[115vw]">
                        <div className="w-full container flex justify-center mb-[8vw] mobile:justify-start">
                            <SectionTitle text="Client Reviews" className="mobile:!text-[10vw]" />
                        </div>
                        <div className="relative group" data-magnetic-target data-magnetic-strength="200">
                            <Testimonial />
                            <div className="absolute h-[6vw] w-[6vw] rounded-full overflow-hidden text-[1.25vw] bg-white flex items-center justify-center text-black top-[40%] left-[48%] magnetic-inner pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity tablet:hidden mobile:hidden">
                                <span>
                                    Drag
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Clients;

