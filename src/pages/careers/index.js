// pages/careers/index.js (or .tsx)
import Pagehero from '@/components/career/Pagehero';
import Layout from '@/components/Layout';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { getAllJobs } from '@/lib/jobs';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/Metadata';
import Listing from '@/components/career/Listing';
import dynamic from 'next/dynamic';
import { skipInCI } from '@/lib/util';

const Essentials = dynamic(() => import('@/components/career/Essentials'), { ssr: true });

export default function Career({ jobs = [] }) {
   titleAnim(); paraAnim(); lineAnim(); fadeIn(); fadeUp();

  const metadata = {
    title: 'Yellow | Now hiring!',
    description: "Get in touch with us here and let's build brighter brands together.",
    img: 'home.png',
    date_published: '2017-10-22T06:17',
    date_modified: '2024-08-01T12:32',
    slug: 'careers',
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero />
        <Listing jobs={jobs} />
        <Essentials />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  if (skipInCI()) {
    return { props: { jobs: [] }, revalidate: 60 };
  }
  try {
    const jobs = await getAllJobs({ queryIncludes: 'archive' });
    return { props: { jobs: jobs || [] }, revalidate: 300 };
  } catch {
    return { props: { jobs: [] }, revalidate: 60 };
  }
}
