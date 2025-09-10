// pages/[career].js
import Layout from '@/components/Layout';
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import { getAllJobs, getJobBySlug } from '@/lib/jobs';
import Pagehero from '@/components/career-detail/Pagehero';
import Overview from '@/components/career-detail/Overview';
import CareerForm from '@/components/career-detail/CareerForm';
import config from '../../../package.json';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Work({ job, jobsList }) {
  const router = useRouter();

  // always call hooks first (fixes hooks-after-return issue)
  useEffect(() => {
    const handleSlugChange = () => window.location.reload();
    router.events.on('routeChangeComplete', handleSlugChange);
    return () => router.events.off('routeChangeComplete', handleSlugChange);
  }, [router]);

  // animations
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  // if CMS was unreachable at build-time, keep route alive (no 404)
  if (!job) {
    return (
      <Layout>
        <div style={{ padding: '8% 0' }}>
          <h1 className="text-[5vw] font-display">This job is temporarily unavailable</h1>
          <p className="mt-4">Please refresh in a moment.</p>
        </div>
      </Layout>
    );
  }

  const {
    title,
    featuredImage,
    jobFields,
    slug,
    seo,
  } = job;

  const { homepage = '' } = config;
  const path = `${homepage}/careers/${slug}`;

  return (
    <>
      <NextSeo
        title={seo?.title || title}
        description={seo?.metaDesc || ''}
        openGraph={{
          url: path,
          title: seo?.title || title,
          description: seo?.metaDesc || '',
          images: seo?.opengraphImage ? [{
            url: seo.opengraphImage.sourceUrl,
            width: seo.opengraphImage?.mediaDetails?.width,
            height: seo.opengraphImage?.mediaDetails?.height,
            alt: seo.opengraphImage?.alt || title,
            type: "image/webp",
          }] : [],
          siteName: "Yellow",
        }}
        canonical={path}
        languageAlternates={[{ hrefLang: 'x-default', href: path }]}
      />
      <Layout>
        <Pagehero title={title} bgImage={featuredImage} jobInfo={jobFields} />
        {jobFields?.overview && <Overview details={jobFields.overview} />}
        <CareerForm jobs={jobsList || []} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { career: jobSlug } = params;

  try {
    const { job } = await getJobBySlug(jobSlug);

    // real 404 only when CMS confirms it's missing
    if (!job) {
      return { props: {}, notFound: true, revalidate: 60 };
    }

    let jobsList = [];
    try {
      const all = await getAllJobs({ queryIncludes: 'index' });
      jobsList = all?.jobs || [];
    } catch {
      // don't fail build if list fetch fails
    }

    return { props: { job, jobsList }, revalidate: 500 };
  } catch {
    // network/CMS error at build time → keep route alive
    return { props: { job: null, jobsList: [] }, revalidate: 60 };
  }
}

export async function getStaticPaths() {
  try {
    const { jobs } = await getAllJobs({ queryIncludes: 'index' });
    const paths = Array.isArray(jobs)
      ? jobs
          .filter(({ slug }) => typeof slug === 'string')
          .map(({ slug }) => ({ params: { career: slug } }))
      : [];
    return { paths, fallback: 'blocking' };
  } catch {
    // if CMS is down during build, return no paths but keep blocking fallback
    return { paths: [], fallback: 'blocking' };
  }
}
