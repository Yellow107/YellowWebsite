import React from "react";
import LinkButton from "../Button/LinkButton";
import Section from "../Section";
import FeaturedImage from "../blog-detail/FeaturedImage";

export default function Pagehero({post}) {

  if (!post) {
    return null;
  }

  return (
    <>
      <Section id="hero">
        <div className="container pt-[10%] mobile:pt-[30%] tablet:pt-[15%]">
          <div className="w-full h-full ">
            <div className="mb-[5vw] mobile:mb-[10vw]">
              <h1 data-para-anim className="text-[5.7vw] font-display leading-[1.3] mb-[4vw] mobile:text-[10vw] mobile:mb-[7vw]">
                {post.title}
              </h1>
              <div className="fadeup">
                <LinkButton btnLink={post.slug} btnText="Read Article"  />
              </div>
            </div>
          </div>
          <FeaturedImage 
            src={post.featuredImage.sourceUrl}
            alt={post.title}
            sizes={post.featuredImage.sizes}
            fill
          />
        </div>
      </Section>
    </>
  );
}
