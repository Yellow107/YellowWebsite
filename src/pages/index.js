/* eslint-disable no-unused-vars */
import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import { getHomePagePosts } from "@/lib/posts";
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import { LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/Metadata";
import dynamic from 'next/dynamic';
import AboutUs from "@/components/HomePage/AboutUs";
import Clients from "@/components/HomePage/Clients";
import Faq from "@/components/HomePage/Faq";

// Dynamically import Blogs component
const Blogs = dynamic(() => import('@/components/HomePage/Blogs'));
const Portfolio = dynamic(() => import('@/components/HomePage/Portfolio'), { ssr: false });
const Services = dynamic(() => import('@/components/HomePage/Services'), { ssr: false });

export default function Home({ recentPosts }) {

  const metadata = {
    title: "Yellow: Branding & Advertising Agency in Dubai, UAE",
    description: "Yellow is a leading branding, creative design & advertising agency serving Dubai, Abu Dhabi & GCC. We provide brand strategy, naming, identity and marketing services that achieve our client's objectives.",
    img: "home.png",
    slug: "",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
  }

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <LocalBusiness />
      <Layout>
        <Hero />
        <AboutUs />
        <Portfolio />
        <Services />
        <Clients />
        <Blogs posts={recentPosts} />
        <Faq />
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
