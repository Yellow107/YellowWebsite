import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import Section from "../Section";
import { postPathBySlug } from "@/lib/posts";
import Link from "next/link";

export default function RelatedBlogs({ posts }) {
  return (
    <>
      <Section id="relatedBlog" className="bg-black">
        <div className="container pt-[5%] pb-[8%] bg-white mobile:pb-[20%]">
          <div className="w-full flex justify-between mb-[4vw] mobile:flex-col mobile:gap-[7vw] mobile:mb-[10vw]">
            <h2 data-title-anim className="text-[5.7vw] font-display uppercase mobile:text-[10vw]">
              Related Blogs
            </h2>
            <div className="fadeup flex items-end">
              <LinkButton
                btnLink={"/blog"}
                btnText={"All Blogs"}

              />
            </div>
          </div>
          <div className="flex justify-between gap-[2vw] mobile:flex-col mobile:gap-[7vw]">

            {posts.map((post, i) => (
              <div key={post.slug} className={`w-full fadeup mobile:h-full ${i > 1 ? "tablet:hidden" : "tablet:block"}`}>
                <Link href={postPathBySlug(post.slug)} className="block h-full w-full border border-black/20 rounded-[10px] hover:shadow-xl overflow-hidden group transition-all duration-500">
                <div className="h-[16vw] relative mobile:h-[50vw] tablet:h-[25vw] overflow-hidden">
                  <Image
                    className="scale-[1.05] group-hover:scale-100 transition-all duration-300"
                    src={post.featuredImage.sourceUrl}
                    alt={post.featuredImage.altText}
                    fill
                    sizes={post.featuredImage.sizes}
                    quality={100}
                  />
                  <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white mobile:gap-[2vw]">
                    <div className="w-fit border-[1px] border-white rounded-full backdrop-blur-lg px-[1.4vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                      {post.categories[1].name}
                    </div>
                    {post.categories[2] && (
                      <div className="w-fit border-[1px] border-white rounded-full backdrop-blur-lg px-[1.4vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                        {post.categories[2].name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full h-full px-[1.5vw] pt-[1.5vw] pb-[2.5vw] flex flex-col gap-[2vw] mobile:px-[4vw] mobile:py-[7vw] mobile:gap-[5vw] tablet:py-[2.5vw]">
                  <h3 data-para-anim className="text-[1.5vw] font-display leading-[1.3] mobile:text-[6.5vw] tablet:text-[3.2vw]">
                    {post.title}
                  </h3>
                  <div className="fadein">
                    <div className={`cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5.5vw]`}>
                        <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Read Article</span>
                        <svg className="relative -rotate-[135deg] w-[1.4vw] h-[1.4vw] overflow-hidden mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                            <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                        </svg>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
