import LinkButton from "../Button/LinkButton"
import { imageAnimationDown } from "../gsapAnimations"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import BlogCard from "./BlogCard"

const Blogs = ({posts}) => {
    
    imageAnimationDown();
   

    return (
        <Section id="Blogs" className="bg-black">
            <div className="container bg-white py-[5%] mobile:py-[10%]" id="footer-up">
                <div className="flex justify-between w-full items-end mobile:flex-col mobile:items-start mobile:gap-[4vw]">
                    <div className="w-1/2 mobile:w-full">
                        <SectionTitle text="Featured Blogs" className="uppercase"/>
                    </div>
                    <div className="fadein">
                        <LinkButton btnLink="/blog" btnText="All Blogs"/>
                    </div>
                </div>

                <div className="mt-[5vw] hide-first mobile:mt-[12vw]">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            src={post.featuredImage.node.sourceUrl}
                            title={post.title}
                            date={post.date}
                            link={post.slug}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Blogs