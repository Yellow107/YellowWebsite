import Section from "../Section"
import BrandsMarquee from "./BrandsMarquee";
import SectionTitle from "../SectionTitle";
import Testimonial from "./Testimonial";

const Clients = () => {

    return (
        <Section className="py-[5%] dark" id="clients">
            <div className="bg-body pt-[5%] pb-[10%] text-white relative min-h-screen mobile:py-[15%]">
                <div className="container mb-[8vw]">
                    <div className="space-y-[1.5vw] mobile:space-y-[4vw]">
                        <p data-para-anim className="text-[1.2vw] font-medium fadeIn mobile:text-[4vw] tablet:text-[3vw]">Our Clients</p>
                        <h4 data-para-anim className="text-[2.5vw] font-display leading-[1.35] w-1/2 mobile:text-[6.5vw] mobile:w-full tablet:text-[3.5vw] tablet:w-[60%]">
                            Small or large, local or far, all of our clients are connected with our purpose of perfect execution.
                        </h4>
                    </div>
                </div>
                <div className="mb-[18vw] w-full overflow-hidden">
                    <BrandsMarquee />
                </div>
                <div className="w-full overflow-hidden relative z-10">
                    <div className="w-full container flex justify-center mb-[8vw] mobile:justify-start">
                        <SectionTitle text="Client Reviews" className="mobile:hidden"/>
                        <h2 className="text-[12vw] hidden mobile:block font-display">Client Reviews</h2>
                    </div>
                    <Testimonial />
                </div>
            </div>
        </Section>
    )
}

export default Clients;

