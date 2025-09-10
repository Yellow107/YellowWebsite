// pages/about-us.js (or .tsx)
import Layout from '@/components/Layout';
import Join from '@/components/about/Join';
import Pagehero from '@/components/about/Pagehero';
import Values from '@/components/about/Values';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import Meet from '@/components/about/Meet';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/Metadata';
import { getAllTeams } from '@/lib/teams';
import RelatedWork from '@/components/Metadata/RelatedWork';
import { skipInCI } from '@/lib/util';

export default function About({ relatedWorks = [], teams = [] }) {
  
    titleAnim(); 
    paraAnim(); 
    lineAnim(); 
    fadeIn(); 
    fadeUp();

  const metadata = {
    title: 'About Yellow Agency: Branding & Design Experts in UAE',
    description:
      'Discover more about Yellow Agency, a trusted branding and design expert based in Dubai. Learn about our expertise, services, and how we can help your brand succeed. Explore now!',
    img: 'home.png',
    date_published: '2017-10-22T06:17',
    date_modified: '2024-08-01T12:32',
    slug: 'about-us',
  };

  // 🟢 Normalize shapes the child components can handle
  const teamsProp = Array.isArray(teams) ? { teams } : (teams || { teams: [] });
  const worksProp = Array.isArray(relatedWorks) ? relatedWorks : [];

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero />
        <Values />
        <Meet teams={teamsProp} />
        <Join />
        <RelatedWork
          works={worksProp}
          heading="Our Work"
          subheading="We grow amazing companies through exceptional branding and communications."
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  if (skipInCI()) {
    return { props: { relatedWorks: [], teams: [] }, revalidate: 60 };
  }

  try {
    const [relatedWorksRes, teamsRes] = await Promise.all([
      getRelatedPortfolioForPages('about-us').catch(() => []),
      getAllTeams({ queryIncludes: 'archive' }).catch(() => []),
    ]);

    // If getAllTeams returns { teams }, use it; if it returns an array, accept it too.
    const teams =
      Array.isArray(teamsRes?.teams) ? teamsRes.teams :
      Array.isArray(teamsRes) ? teamsRes :
      [];

    const relatedWorks = Array.isArray(relatedWorksRes) ? relatedWorksRes : [];

    return { props: { relatedWorks, teams }, revalidate: 300 };
  } catch {
    return { props: { relatedWorks: [], teams: [] }, revalidate: 60 };
  }
}
