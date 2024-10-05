import { workPathBySlug } from "@/lib/portfolio";
import Link from "next/link";
import MediaRender from "../MediaRender";

const WorkCard = ({ index, work }) => {

    return (
        <Link className="relative w-full h-full block group overflow-hidden rounded-[10px] fadeup" href={workPathBySlug(work.slug)}>
            <div className={`relative overflow-hidden image-animation-wrapper h-[45vw] scale-[1.05] group-hover:scale-100 transition-all duration-300 ease-in-out ${index % 3 === 0 ? "mobile:h-[60vw]" : "mobile:h-[80vw]" }`}>
                <MediaRender
                    className="z-[0] static"
                    url={work.workFields.featuredImagevideo.node.mediaItemUrl}
                />
            </div>
            <div className={`absolute bottom-[10%] left-[3%] text-white ${index % 3 === 0 ? "bottom-[10%] left-[3%] mobile:left-[7%] mobile:bottom-[5%]" : "bottom-[10%] left-[7%] mobile:bottom-[7%]"}`}>
                <h3 data-title-anim className="text-[2.5vw] mb-[1.5vw] drop-shadow-lg mobile:text-[7vw] tablet:text-[3vw]">{work.title}</h3>
            </div>
            <div className={`absolute flex gap-[1.5vw] text-white mobile:gap-[2.5vw] ${index % 3 === 0 ? "bottom-[10%] right-[3%] mobile:top-[5%] mobile:left-[7%] mobile:bottom-auto" : "top-[7%] left-[7%]"}`}>
                {work.portfolioIndustries && work.portfolioIndustries.slice(0, 1).map((category, i) => (
                    <p key={i} className="w-fit border border-white rounded-full backdrop-blur-xl px-[2.5vw] py-[0.4vw] text-[1.2vw] bg-black/20 text-white mobile:text-[4.5vw] mobile:px-[5vw] mobile:py-[1vw] tablet:text-[2.5vw]">
                        {category.name}
                    </p>
                ))}
            </div>
        </Link>
    )
}

export default WorkCard;