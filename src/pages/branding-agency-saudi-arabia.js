
/* eslint-disable no-unused-vars */
import Layout from "@/components/Layout";
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import { LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/Metadata";
import Hero from "@/components/saudi/Hero";
import Trusted from "@/components/saudi/Trusted";
import Services from "@/components/saudi/Services";
import Details from "@/components/saudi/Details";
import AdvertisingSolutions from "@/components/saudi/AdvertisingSolutions";
import Clients from "@/components/saudi/Clients";
import WhyUs from "@/components/saudi/WhyUs";
import RelatedWork from "@/components/Metadata/RelatedWork";
import { getRelatedPortfolioForPages } from "@/lib/portfolio";

export default function Home({ recentWorks }) {
  const metadata = {
    title: "Yellow - Advertising & Branding Agency Riyadh, Saudi Arabia",
    description: "Yellow is a leading creative branding agency in Riyadh, Saudi Arabia, specializing in brand strategy, identity, and advertising services to elevate your brand.",
    img: "home.png",
    slug: "",
    date_published: "2025-05-27T06:17",
    date_modified: "2025-05-27T06:17",
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
        <Trusted />
        <Services />
        <Details />
        <AdvertisingSolutions />
        <Clients />
        <WhyUs />
        <RelatedWork
          works={recentWorks}
          heading={"Our Works"}
          subheading={
            ""
          }
        />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const recentWorks = await getRelatedPortfolioForPages("brand-strategy");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}

