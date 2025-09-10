// pages/[project].js
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
  const router = useRouter();

  // always run hooks (never after a conditional return)
  useEffect(() => {
    const handleSlugChange = () => window.location.reload();
    router.events.on('routeChangeComplete', handleSlugChange);
    return () => router.events.off('routeChangeComplete', handleSlugChange);
  }, [router]);

  // animations (safe to call every render)
  titleAnim();
  paraAnimWordpress();
  lineAnim();
  fadeUp();
  imageAnimationWork();

  // if CMS was unreachable at build-time, keep route alive (no 404)
  if (!project) {
    return (
      <Layout>
        <Section id="work-content" className="bg-black">
          <div className="container bg-white py-[10%]">
            <h1 className="text-[5vw] font-display">This project is temporarily unavailable</h1>
            <p className="mt-4">Please refresh in a moment.</p>
          </div>
        </Section>
      </Layout>
    );
  }

  // now it's safe to destructure
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

  const relatedPortfolio = portfolioForPages?.relatedPortfolio?.edges || null;
  const { homepage = '' } = config;

  const metadata = {
    title: metaTitle || title,
    description: metaDescription || '',
    slug: `our-work/${slug}`,
    date_modified: modified,
    date_published: date,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription || ''}
        openGraph={{
          url: `${homepage}/${metadata.slug}`,
          title,
          description: metaDescription || '',
          images: metaImage
            ? [{
                url: metaImage.sourceUrl,
                width: metaImage.mediaDetails?.width,
                height: metaImage.mediaDetails?.height,
                alt: metaImage.mediaDetails?.alt || title,
                type: "image/webp",
              }]
            : [],
          siteName: "Yellow",
        }}
        canonical={`${homepage}/${metadata.slug}`}
        languageAlternates={[{ hrefLang: 'x-default', href: `${homepage}/${metadata.slug}` }]}
      />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero
          src={workFields?.detailPageFeaturedImageVideo?.node?.mediaItemUrl}
          date={date}
          title={title}
          headertags={workFields?.headertags}
          tags={tags}
        />
        <Information
          info={workFields}
          title={title}
          tags={tags}
          industry={portfolioIndustries}
        />
        <Section id="work-content" className='bg-black'>
          <div className='container bg-white py-[5%]'>
            {content && (
              <div
                className={styles.work}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        </Section>
        {Array.isArray(relatedPortfolio) && relatedPortfolio.length > 0 && (
          <RelatedWork works={relatedPortfolio} heading="Related Work" />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { project: projectSlug } = params;

  try {
    const { project } = await getProjectBySlug(projectSlug);

    // real 404 only if CMS confirms it's missing
    if (!project) {
      return { props: {}, notFound: true, revalidate: 60 };
    }

    return { props: { project }, revalidate: 500 };
  } catch {
    // network/CMS error at build time → keep route alive
    return { props: { project: null }, revalidate: 60 };
  }
}

export async function getStaticPaths() {
  try {
    const { portfolio } = await getRecentPortfolio({
      count: process.env.POSTS_PRERENDER_COUNT || 20,
      queryIncludes: 'index',
    });

    const paths = Array.isArray(portfolio)
      ? portfolio
          .filter(({ slug }) => typeof slug === 'string')
          .map(({ slug }) => ({ params: { project: slug } }))
      : [];

    return { paths, fallback: 'blocking' };
  } catch {
    // if CMS is down during build, return no paths but keep blocking fallback
    return { paths: [], fallback: 'blocking' };
  }
}
