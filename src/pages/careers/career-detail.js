import Layout from '@/components/Layout';
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import { getAllJobs } from '@/lib/jobs';
import Pagehero from '@/components/career-detail/Pagehero';
import Overview from '@/components/career-detail/Overview';
import CareerForm from '@/components/career-detail/CareerForm';
import MetaData from '@/components/Metadata';

export default function CareerDetail({ jobsList }) {

  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Get in touch with us here and let's build brighter brands together.",
    description: "Do you get a thrill out of making & analyzing company logos & typography? Start your career at Yellow Branding & let's build brighter brands together.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "careers/career-detail"
  }

  return (
    <>
      <MetaData metadata={metadata}/>
      <Layout>
        <Pagehero />
        <Overview />
        <CareerForm jobs={jobsList} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {

  const jobsList = await getAllJobs({
    queryIncludes: 'index',
  });

  const props = {
    jobsList
  };

  return {
    props,
    revalidate: 500,
  };
}
