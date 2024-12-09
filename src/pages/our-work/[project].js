import Layout from '@/components/Layout';
import { getRecentPortfolio, getProjectBySlug } from '@/lib/portfolio';
import Pagehero from '@/components/PortfolioDetail/Pagehero';
import Section from '@/components/Section';
import Information from '@/components/PortfolioDetail/Information';
import styles from "@/styles/work.module.css";
import { titleAnim, lineAnim, fadeUp, paraAnimWordpress, imageAnimationWork } from '@/components/gsapAnimations';
import { WebpageJsonLd } from '@/lib/json-ld';
import config from '../../../package.json';
import { NextSeo } from 'next-seo';
import RelatedWork from '@/components/Metadata/RelatedWork';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Work({ project }) {
  const {
    title,
    tags,
    content,
    date,
    workFields,
    modified,
    slug,
    metaTitle,
    metaDescription,
    metaImage,
    portfolioIndustries,
    portfolioForPages,
  } = project;

  let relatedPortfolio = null;

  if (portfolioForPages && portfolioForPages.relatedPortfolio && portfolioForPages.relatedPortfolio.edges) {
    relatedPortfolio = portfolioForPages.relatedPortfolio.edges;
  }

  const { homepage = '' } = config;

  const router = useRouter();

  titleAnim();
  paraAnimWordpress();
  lineAnim();
  fadeUp();
  imageAnimationWork();

  // Reload the page when the slug changes
  useEffect(() => {
    const handleSlugChange = () => {
      window.location.reload();  // This will force a full page reload
    };

    // Set up a listener to watch for slug changes
    router.events.on('routeChangeComplete', handleSlugChange);

    return () => {
      // Clean up the listener when the component unmounts
      router.events.off('routeChangeComplete', handleSlugChange);
    };
  }, [router]);

  const metadata = {
    title: metaTitle,
    description: metaDescription,
    slug: `our-work/${slug}`,
    date_modified: modified,
    date_published: date,
  }

  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          url: `${homepage}/${metadata.slug}`,
          title: title,
          description: metaDescription,
          images: metaImage
            ? [
              {
                url: metaImage.sourceUrl,
                width: metaImage.mediaDetails?.width,
                height: metaImage.mediaDetails?.height,
                alt: metaImage.mediaDetails?.alt || title,
                type: "image/webp",
              },
            ]
            : [],
          siteName: "Yellow",
        }}
        canonical={`${homepage}/${metadata.slug}`}
        languageAlternates={[{
          hrefLang: 'x-default',
          href: `${homepage}/${metadata.slug}`,
        }]}
      />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero
          src={workFields.detailPageFeaturedImageVideo.node.mediaItemUrl}
          tags={tags}
          date={date}
          title={title}
        />
        <Information
          info={workFields}
          title={title}
          tags={tags}
          industry={portfolioIndustries}
        />
        <Section id="work-content" className='bg-black'>
          <div className='container bg-white py-[5%]'>
            <div
              className={styles.work}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </Section>
        {relatedPortfolio && relatedPortfolio.length > 0 && (
          <RelatedWork
            works={relatedPortfolio}
            heading={"Related Work"}
          />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { project: projectSlug } = params;
  const { project } = await getProjectBySlug(projectSlug);

  if (!project) {
    return {
      props: {},
      notFound: true,
    };
  }

  const props = {
    project,
  };

  return {
    props,
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { portfolio } = await getRecentPortfolio({
    count: process.env.POSTS_PRERENDER_COUNT,
    queryIncludes: 'index',
  });

  const paths = portfolio
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        project: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}
