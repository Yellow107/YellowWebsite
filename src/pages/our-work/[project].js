import Layout from '@/components/Layout';
import { getRecentPortfolio, getProjectBySlug } from '@/lib/portfolio';
import Pagehero from '@/components/PortfolioDetail/Pagehero';
import Section from '@/components/Section';
import Information from '@/components/PortfolioDetail/Information';
import styles from "@/styles/work.module.css";
// eslint-disable-next-line no-unused-vars
import { titleAnim, lineAnim, fadeUp, paraAnimWordpress, imageAnimationWork } from '@/components/gsapAnimations';
import { WebpageJsonLd } from '@/lib/json-ld';
import config from '../../../package.json';
import { NextSeo } from 'next-seo';
import RelatedWork from '@/components/RelatedWork';

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

  titleAnim();
  paraAnimWordpress();
  lineAnim();
  fadeUp();
  imageAnimationWork();

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
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `${homepage}/${metadata.slug}`,
          },
          {
            rel: "alternate",
            href: `${homepage}/${metadata.slug}`,
            hreflang: "x-default",
          }
        ]}
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
