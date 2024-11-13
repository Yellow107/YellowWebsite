import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css';

const Testimonial = () => {

    const animation = { duration: 4000, easing: (t) => t }

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(max-width: 540px)": {
                slides: { perView: 1.5, spacing: 10 },
            },
        },
        slides: {
            perView: 2.5,
            spacing: 30,
        },
        created(s) {
            s.moveToIdx(1, false, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 1, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 1, true, animation)
        },
    });

    return (
        <>
            <div ref={sliderRef} className="keen-slider h-fit w-full fadein">
                {Reviews.map((review) => (
                    <div key={review.id} className='keen-slider__slide h-auto'>
                        <Card
                            img={review.img}
                            content={review.content}
                            company={review.company}
                            name={review.name}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

const Reviews = [
    {
        id: "01",
        name: "Damir",
        company: "Fidelix",
        img: "/assets/images/clients/Fidelix.png",
        content: "I am extremely happy that our paths crossed with Yellow Team and these beautiful people helped me to create the entire brand identity from the scratch! Working with Yellow Agency was an absolute pleasure! They are not only super creative and friendly but also true professionals who deliver top-notch results! Highly recommend them for anyone looking for a branding agency that truly cares!"
    },
    {
        id: "02",
        name: "Mercato Towncetre",
        company: "Mercato",
        img: "/assets/images/clients/mercato.png",
        content: "We have been working with Yellow for over a year, and the team at Yellow acts as true partners to support our business. They have continued to demonstrate their creativity across every campaign and have a strong client servicing team that is responsive and proactive. We really enjoy working with Yellow and would recommend them to any brand looking for an agency that is truly committed and fun to work with."
    },
    {
        id: "03",
        name: "Sonal Nanoo",
        company: "Hattan",
        img: "/assets/images/clients/Hattan.png",
        content: "A truly amazing agency. Having worked with multiple agencies in the UAE, Yellow is by far a true partner to any business. The people are exceptionally talented, creative & kind. Their delivery always goes beyond expectations and Yellow have been an integral part to our business success."
    },
    {
        id: "04",
        name: "Reem Madkour",
        company: "Dardasha",
        img: "/assets/images/clients/dardasha-white.png",
        content: "Yellow transformed our brand into something we are so proud of! They understood our design brief so well and the process was not only executed to the utmost professionalism but also FUN! The team is so wonderful and responsive and we were absolutely blown away by their creativity and quality."
    },
    {
        id: "05",
        name: "Ali R",
        company: "Toucan",
        img: "/assets/images/clients/toucan.png",
        content: "We worked with the team at Yellow to help bring our vision of creating cool, fashionable socks - for the region and from the region. The team at Yellow did an amazing job in coming up with a strategy, name, brand identity, visual language, and also located the right team to develop our socks designs for our brand, Toucan. Overall, a fun and vibrant brand created by a fun and vibrant team!"
    },
    {
        id: "06",
        name: "Ibrahim Lamrini",
        company: "Maveroc",
        img: "/assets/images/clients/maveroc.png",
        content: "We wanted to find the right agency partner to launch our jewelry brand in the region, and we are so happy to have collaborated a with the Yellow team. Yellow worked on our brand strategy, naming, brand identity and visual language - all with a lot of passion and commitment. The team acted like our business partners, consultants and are the biggest cheerleaders of our brand and products. We highly recommend them."
    },
    {
        id: "07",
        name: "Fatima",
        company: "Luma",
        img: "/assets/images/clients/luma.png",
        content: "The best branding agency. We were initially drawn to Yellow due to their impressive portfolio but once we met the team, they exceeded all our expectations. Great energy, true thought partners and excellent work product. They’re extremely receptive to feedback and make the creative process so much fun and dynamic. We have worked with them on multiple projects and they are always our first call when we think of anything design related 🌟🌟🌟🌟🌟 highly recommend them!"
    },
    {
        id: "08",
        name: "Tamer",
        company: "WeStore",
        img: "/assets/images/clients/westore.png",
        content: "I worked with Yellow on our branding, strategy and style guide. they are great, because they are genuine, passionate and pay attention to details. During the whole project we never felt they are your typical agency. We felt they are an extension of our own team. The team at Yellow is full of energy, gumption, and backs it all up with experience and swift delivery. I highly recommend them."
    },
    {
        id: "09",
        name: "Central Park Towers",
        company: "",
        img: "/assets/images/clients/centralpark.png",
        content: "The Yellow team acts as an extension of our business and our marketing dept. They have development successful strategies and are committed to delivering great work that produces results. The team is experienced, proactive and responsive, and they have worked on our brand refresh, campaigns and productions. It is a pleasure working with Yellow and we would highly recommend them."
    },
    {
        id: "10",
        name: "Purshotam",
        company: "Oli Oli",
        img: "/assets/images/clients/oli-oli.png",
        content: "If you are looking for a team of extremely creative, talented, passionate, professional, and conscientious people - you won't find any better alternatives. It was an absolute pleasure to work with Yellow for the creation of our brand - they acted as an extension of our team, which is incredibly rare! Highly recommend them."
    },
]

const Card = ({ img, company, name, content }) => {
    return (
        <div className="relative h-full col-span-1 text-white overflow-hidden rounded-[1.2vw] bg-gradient-to-br from-[#35333380] to-[#24242420] to-45% border border-white/20 fadein mobile:rounded-[10px]">
            <div className="w-full h-full py-[3vw] px-[2.5vw] space-y-[2vw] mobile:py-[5vw] mobile:px-[4vw] mobile:space-y-[5vw] tablet:space-y-[5vw]">
                <div className="flex items-center gap-[1vw] mobile:gap-[3vw] tablet:gap-[2vw]">
                    <Image
                        className="w-[5vw] h-[5vw] rounded-full mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[8vw]"
                        alt={`${name} image`}
                        loading="lazy"
                        src={img}
                        priority={false}
                        quality={100}
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col items-start">
                        <p className="text-[1.35vw] font-medium mobile:text-[5vw] tablet:text-[3vw] whitespace-normal mobile:leading-[1]">{name}</p>
                        <p className="text-[1.1vw] font-medium mobile:text-[3vw] tablet:text-[2vw]">{company}</p>
                    </div>
                </div>
                <p className="text-[1.1vw] whitespace-normal mobile:text-[3.2vw] tablet:text-[2.5vw]">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Testimonial;