import { workPathBySlug } from "@/lib/portfolio";
import Link from "next/link";
import MediaRender from "../MediaRender";
import Image from "next/image";

const WorkCard = ({ index, work }) => {

    return (
        <Link className="relative w-full h-full block group overflow-hidden rounded-[10px] fadeup" href={workPathBySlug(work.slug)}>
            {work.workFields.packagingWorld && (
                <div className="absolute top-0 left-0 -translate-x-[4vw] -translate-y-[4vw] z-[1] mobile:-translate-x-[8vw] mobile:-translate-y-[8vw]">
                    <Image src={"/assets/icons/as-seen-on.png"} alt="packaging of the world" width={200} height={200} loading="lazy" className="w-[20vw] mobile:w-[40vw] h-full object-cover" />
                </div>
            )}
            <div className={`relative overflow-hidden h-[45vw] scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-in-out ${index % 3 === 0 ? "mobile:h-[60vw]" : "mobile:h-[80vw]"}`}>
                <MediaRender
                    className="z-[0] static brightness-90"
                    url={work.workFields.featuredImagevideo.node.mediaItemUrl}
                />
            </div>
            <div className={`absolute flex justify-between top-0 left-0 right-0 bottom-0 p-[4vw] items-end mobile:flex-col-reverse`}>
                <div className={`text-white mobile:w-full`}>
                    <h3 data-title-anim className="text-[2.5vw] drop-shadow-lg mobile:text-[7vw] tablet:text-[3vw] leading-[1.2]">{work.title}</h3>
                </div>
                <div className={`flex gap-[1.5vw] mb-1 text-white mobile:gap-[2.5vw]`}>
                    {work.portfolioIndustries && work.portfolioIndustries.slice(0, 1).map((category, i) => (
                        <p key={i} className="w-fit border border-white rounded-full backdrop-blur-xl px-[2vw] py-[0.4vw] text-[1.2vw] bg-black/20 text-white mobile:text-[4.5vw] mobile:px-[5vw] mobile:py-[1vw] tablet:text-[2.5vw]">
                            {category.name}
                        </p>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default WorkCard;