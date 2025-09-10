import { useEffect, useState } from "react";
import PortfolioIndustries from "@/components/Portfolio/PortfolioIndustries";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import styles from "@/styles/blogDetail.module.css";
import {
  getAllPortfolioIndustries,
  getPortfolioIndustryBySlug,
} from "@/lib/portfolioIndustries";
import { getPortfolioIndustryByIdForPortfolio } from "@/lib/portfolio";
import WorkCard from "@/components/Portfolio/WorkCard";
import MetaData from "@/components/Metadata";
import Consultant from "@/components/Portfolio/Consultant";
import {
  paraAnim,
  lineAnim,
  fadeUp,
  fadeIn,
} from "@/components/gsapAnimations";
import { useRouter } from "next/router";

const Category = ({ portfolioIndustry, portfolio, portfolioIndustries }) => {
  const [activeIndustry, setActiveIndustry] = useState(
    `${portfolioIndustry.slug}`
  );
  const router = useRouter();

  paraAnim();
  lineAnim();
  fadeUp();
  fadeIn();

  // Reload the page when the slug changes
  useEffect(() => {
    const handleSlugChange = () => {
      window.location.reload(); // This will force a full page reload
    };

    // Set up a listener to watch for slug changes
    router.events.on("routeChangeComplete", handleSlugChange);

    return () => {
      // Clean up the listener when the component unmounts
      router.events.off("routeChangeComplete", handleSlugChange);
    };
  }, [router]);
  const metaArray = [
    {
      title: "Real Estate Branding Agency Dubai, UAE - Real Estate Portfolio",
      description:
        "Yellow is a premier real estate branding agency in Dubai, UAE, with a strong portfolio of delivering quality property branding services to real estate companies.",
      slug: "real-estate",
    },
  ];
  // console.log(portfolioIndustry.slug)
  let metadata = {
    title: `${portfolioIndustry.name} Portfolio Archive | Yellow`,
    description: `Dive into our case studies of our latest projects for ${portfolioIndustry.name} industry.`,
    img: "home.png",
    slug: `our-work/industry/${portfolioIndustry.slug}`,
  };
  const norm = (s) =>
    String(s || "")
      .trim()
      .toLowerCase();
  const match = metaArray.find(
    (m) => norm(m.slug) === norm(portfolioIndustry.slug)
  );

  // if match, override title/description
  if (match) {
    metadata = {
      ...metadata,
      title: match.title,
      description: match.description,
    };
  }
  return (
    <>
      <MetaData metadata={metadata} />
      <Layout>
        <main>
          <Section id="hero">
            <div className="container">
              <div className="pt-[10%] mobile:pt-[30%] tablet:pt-[15%]">
                <h1 className="text-[5.7vw] font-display leading-[1.3] mobile:text-[10vw]">
                  {portfolioIndustry.name} Works
                </h1>
              </div>
              <div className="lineDraw w-full h-[1px] bg-body mt-[6%] mobile:mt-[10%] mobile:mb-[8%]" />
            </div>
          </Section>

          <Section id="second-section" className="bg-black">
            <div className="container py-[5%] bg-white">
              <div className="pb-[5%]">
                <PortfolioIndustries
                  portfolioIndustries={portfolioIndustries}
                  activeIndustry={activeIndustry}
                  setActiveIndustry={setActiveIndustry}
                />
              </div>
              <div className="grid grid-cols-2 w-full h-full gap-x-[3vw] gap-y-[3vw] mb-[3vw] mobile:flex mobile:flex-col mobile:gap-[7vw]">
                {portfolio.length > 0 ? (
                  portfolio.map((work, index) => {
                    const isFullWidth = index % 3 === 0;
                    const cardClass = isFullWidth ? "col-span-2" : "col-span-1";
                    return (
                      <div
                        key={work.slug}
                        className={`work-card h-full ${cardClass} ${styles.postCard}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <WorkCard work={work} index={index} />
                      </div>
                    );
                  })
                ) : (
                  <p className="col-span-2 text-center text-[1.2vw] text-body mt-[5%]">
                    There are no works for the selected category.
                  </p>
                )}
              </div>
            </div>
          </Section>

          {portfolioIndustry.industryConsultant &&
            portfolioIndustry.industryConsultant.consultantName && (
              <Consultant consultant={portfolioIndustry.industryConsultant} />
            )}
        </main>
      </Layout>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const { slug: portfolioIndustrySlug } = params;
  const { portfolioIndustry } = await getPortfolioIndustryBySlug(
    portfolioIndustrySlug
  );

  if (!portfolioIndustry) {
    return {
      notFound: true,
    };
  }

  const { portfolio } = await getPortfolioIndustryByIdForPortfolio({
    portfolioIndustryId: portfolioIndustry.databaseId,
    queryIncludes: "all",
  });

  const { portfolioIndustries } = await getAllPortfolioIndustries();

  return {
    props: {
      portfolioIndustry,
      portfolio,
      portfolioIndustries,
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { portfolioIndustries } = await getAllPortfolioIndustries();

  const paths = portfolioIndustries.map((portfolioIndustry) => ({
    params: {
      slug: portfolioIndustry.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
