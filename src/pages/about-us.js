import Layout from '@/components/Layout';
import Join from '@/components/about/Join';
import Pagehero from '@/components/about/Pagehero';
import Values from '@/components/about/Values';
import React from 'react';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import Meet from '@/components/about/Meet';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/Metadata';
import { getAllTeams } from '@/lib/teams';
import RelatedWork from '@/components/RelatedWork';

export default function About({ relatedWorks, teams }) {

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  const metadata = {
    title: "About Yellow Agency: Branding & Design Experts in UAE",
    description: "Discover more about Yellow Agency, a trusted branding and design expert based in Dubai. Learn about our expertise, services, and how we can help your brand succeed. Explore now!",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "about-us"
  }

  return (
    <>
      <MetaData metadata={metadata}/>
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Pagehero />
        <Values />
        <Meet teams={teams} />
        <Join />
        <RelatedWork 
          works={relatedWorks} 
          heading={"Our Work"}  
          subheading={"We grow amazing companies through exceptional branding and communications."}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const relatedWorks = await getRelatedPortfolioForPages("about-us")
  const teams = await getAllTeams({
    queryIncludes: "archive"
  });

  return {
    props: {
      relatedWorks,
      teams,
    },
    revalidate: 500,
  };
}
