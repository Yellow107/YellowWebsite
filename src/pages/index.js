import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import Portfolio from "@/components/HomePage/Portfolio";
import Services from "@/components/HomePage/Services";
import Clients from "@/components/HomePage/Clients";
import Blogs from "@/components/HomePage/Blogs";
import { getHomePagePosts } from "@/lib/posts";
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { gsap } from 'gsap/dist/gsap';
import { WebpageJsonLd } from "@/lib/json-ld";
import config from '../../package.json';
import { NextSeo } from "next-seo";

export default function Home({ recentPosts }) {

  const { homepage = '' } = config;

  const metadata = {
    title: "Branding & Communication Agency in Dubai - Yellow Agency",
    description: "Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
  }

  gsap.config({
    nullTargetWarn: false,
  });

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  return (
    <>
      <NextSeo
            title={metadata.title}
            description={metadata.description}
            openGraph={{
                url: `${homepage}`,
                title: `${metadata.title}`,
                "description": `${metadata.description}`,
                images: [
                    {
                        url: `${homepage}/assets/images/seo/${metadata.img}`,
                        width: 1290,
                        height: 594,
                        alt: "Page Og Image",
                        type: "image/png",
                    },
                ],
                siteName: "Yellow",
            }}
            additionalLinkTags={[
                {
                    rel: "canonical",
                    href: `${homepage}`,
                },
                {
                    rel: "alternate",
                    href: `${homepage}`,
                    hreflang: "x-default",
                }
            ]}
        />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero />
        <AboutUs />
        <Portfolio />
        <Services />
        <Clients />
        <Blogs posts={recentPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {

  const recentPosts = await getHomePagePosts();

  return {
    props: {
      recentPosts,
    },
    revalidate: 500,
  };
}