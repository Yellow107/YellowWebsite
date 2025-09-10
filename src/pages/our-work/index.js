// pages/our-work/index.tsx (or .js)
import { useState, useEffect } from 'react';
import { getPaginatedPortfolio } from '@/lib/portfolio';
import Layout from '@/components/Layout';
import PageHero from '@/components/Portfolio/PageHero';
import Section from '@/components/Section';
import WorkCard from '@/components/Portfolio/WorkCard';
import { titleAnim, paraAnim, lineAnim, fadeUp, fadeIn } from '@/components/gsapAnimations';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/Metadata';
import PortfolioIndustries from '@/components/Portfolio/PortfolioIndustries';
import { getPortfolioIndustries } from '@/lib/portfolioIndustries';
import { skipInCI } from '@/lib/util';

export default function Works({ initialPortfolio = [], initialPagination = null, portfolioIndustries = [] }) {
  
    titleAnim();
    paraAnim();
    lineAnim();
    fadeUp();
    fadeIn();

  const metadata = {
    title: "A Collection Of Some Of Our Best Work | Yellow Branding",
    description: "Get a feel for our expertise, style and abilities by checking out samples of our best work. Contact us once you are ready to schedule for a consultation.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "our-work"
  };

  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageData, setNextPageData] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState('all');

  useEffect(() => {
    const prefetchNextPage = async () => {
      try {
        if (pagination && pagination.currentPage < pagination.pagesCount) {
          const nextPage = pagination.currentPage + 1;
          const res = await fetch(`/api/getPortfolio?page=${nextPage}`, { cache: 'no-store' });
          if (!res.ok) return;
          const { portfolio: newPortfolio, pagination: newPagination } = await res.json();
          setNextPageData({ newPortfolio, newPagination });
        }
      } catch {
        // swallow prefetch errors
      }
    };
    prefetchNextPage();
  }, [pagination]);

  const loadMorePortfolio = () => {
    if (isLoading || !nextPageData) return;
    setIsLoading(true);
    setPortfolio(prev => [...prev, ...nextPageData.newPortfolio]);
    setPagination(nextPageData.newPagination);
    setNextPageData(null);
    setIsLoading(false);
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <PageHero />
        <Section id="second-section" className='bg-black'>
          <div className='container py-[5%] bg-white'>
            <div className='pb-[5%]'>
              <PortfolioIndustries
                portfolioIndustries={portfolioIndustries}
                activeIndustry={activeIndustry}
                setActiveIndustry={setActiveIndustry}
              />
            </div>

            <div className="grid grid-cols-2 w-full h-full gap-x-[3vw] gap-y-[3vw] mb-[3vw] mobile:flex mobile:flex-col mobile:gap-[7vw]">
              {portfolio.map((work, index) => {
                const isFullWidth = index % 3 === 0;
                const cardClass = isFullWidth ? 'col-span-2' : 'col-span-1';
                return (
                  <div key={work.slug ?? index} className={`work-card h-full fadeup ${cardClass}`}>
                    <WorkCard work={work} index={index} />
                  </div>
                );
              })}
              {(!portfolio || portfolio.length === 0) && (
                <p className="text-center col-span-full py-10">No work to show right now.</p>
              )}
            </div>

            {pagination && pagination.currentPage < pagination.pagesCount && (
              <div className="flex w-full justify-center mobile:mt-[8vw]">
                <button onClick={loadMorePortfolio} disabled={isLoading}
                  className="cursor-pointer flex w-fit relative text-[1.3vw] gap-[0.5vw] items-center font-medium group mobile:text-[6vw] mobile:gap-[2vw] tablet:text-[2.5vw]">
                  <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">
                    {isLoading ? 'Loading' : 'Load More'}
                  </span>
                  <svg className="relative -rotate-[135deg] w-[1.2vw] h-[1.2vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                    <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </Section>
      </Layout>
    </>
  );
}

// NOTE: no params on /our-work index route
export async function getStaticProps() {
  // Skip remote calls on CI/build machines so builds don't hit WP
  if (skipInCI()) {
    return {
      props: {
        initialPortfolio: [],
        portfolioIndustries: [],
        initialPagination: null,
      },
      revalidate: 60,
    };
  }

  try {
    const [{ portfolio, pagination }, portfolioIndustries] = await Promise.all([
      getPaginatedPortfolio({ queryIncludes: 'archive' }),
      getPortfolioIndustries().catch(() => []),
    ]);

    return {
      props: {
        initialPortfolio: portfolio || [],
        portfolioIndustries: portfolioIndustries || [],
        initialPagination: pagination ? { ...pagination, basePath: '/our-work' } : null,
      },
      revalidate: 300,
    };
  } catch {
    return {
      props: {
        initialPortfolio: [],
        portfolioIndustries: [],
        initialPagination: null,
      },
      revalidate: 60,
    };
  }
}
