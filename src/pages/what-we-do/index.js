import Layout from '@/components/Layout'
import Pagehero from '@/components/services/Pagehero'
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import RelatedWork from '@/components/Metadata/RelatedWork';
import ServiceList from '@/components/services/ServiceList';

export default function services({ recentWorks }) {

  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Yellow | Brand agency, design and digital services in Dubai, UAE",
    description: "As a brand agency in Dubai offering brand strategy, naming, brand design and advertising, we consider your brand across all communication channels.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do"
  }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero />
        <ServiceList/>
        <RelatedWork
          works={recentWorks}
          heading={"Our Work"}  
          subheading={"We grow amazing companies through exceptional branding and communications."}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const recentWorks = await getRelatedPortfolioForPages("what-we-do");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}


