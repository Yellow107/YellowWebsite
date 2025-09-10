/* eslint-disable react-hooks/rules-of-hooks */
// pages/our-work/industry/[slug].js
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import PortfolioIndustries from "@/components/Portfolio/PortfolioIndustries";
import WorkCard from "@/components/Portfolio/WorkCard";
import Consultant from "@/components/Portfolio/Consultant";
import MetaData from "@/components/Metadata";
import { paraAnim, lineAnim, fadeUp, fadeIn } from "@/components/gsapAnimations";
import {
  getAllPortfolioIndustries,
  getPortfolioIndustryBySlug,
} from "@/lib/portfolioIndustries";
import { getPortfolioIndustryByIdForPortfolio } from "@/lib/portfolio";
import { skipInCI } from "@/lib/util";

const IndustryPage = ({ portfolioIndustry, portfolio, portfolioIndustries }) => {

  const router = useRouter();

  paraAnim();
  lineAnim();
  fadeUp();
  fadeIn();

  // While ISR/SSG is loading on first hit (fallback: 'blocking' should avoid this,
  // but keep a minimal guard if needed)
  if (router.isFallback) {
    return (
      <Layout>
        <main>
          <Section id="hero">
            <div className="container">
              <div className="pt-[10%] mobile:pt-[30%] tablet:pt-[15%]">
                <h1 className="text-[5.7vw] font-display leading-[1.3] mobile:text-[10vw]">
                  Loading…
                </h1>
              </div>
              <div className="lineDraw w-full h-[1px] bg-body mt-[6%] mobile:mt-[10%] mobile:mb-[8%]" />
            </div>
          </Section>
        </main>
      </Layout>
    );
  }

  // If CMS was unreachable at build time (skip/failure), keep the route alive
  if (!portfolioIndustry) {
    return (
      <Layout>
        <main>
          <Section id="hero">
            <div className="container">
              <div className="pt-[10%] mobile:pt-[30%] tablet:pt-[15%]">
                <h1 className="text-[5.7vw] font-display leading-[1.3] mobile:text-[10vw]">
                  Industry temporarily unavailable
                </h1>
                <p className="mt-4">Please refresh in a moment.</p>
              </div>
              <div className="lineDraw w-full h-[1px] bg-body mt-[6%] mobile:mt-[10%] mobile:mb-[8%]" />
            </div>
          </Section>
        </main>
      </Layout>
    );
  }

  const [activeIndustry, setActiveIndustry] = useState(`${portfolioIndustry.slug}`);

  // SEO metadata (optional overrides for specific slugs)
  const metaArray = [
    {
      title: "Real Estate Branding Agency Dubai, UAE - Real Estate Portfolio",
      description:
        "Yellow is a premier real estate branding agency in Dubai, UAE, with a strong portfolio of delivering quality property branding services to real estate companies.",
      slug: "real-estate",
    },
    {
      title: "FMCG Branding & Digital Marketing Agency in Dubai, UAE",
      description:
        "Yellow is a performance-driven FMCG branding & advertising agency in Dubai, focusing on strategic branding, packaging design & digital marketing for FMCG brands.",
      slug: "fmcg",
    },
    {
      title: "Best Retail Branding & Advertising Agency in Dubai, UAE",
      description:
        "Yellow is a leading retail branding & marketing agency in Dubai, UAE, helping global retail businesses boost online exposure with strategic digital solutions.",
      slug: "retail",
    },
  ];
  const norm = (s) => String(s || "").trim().toLowerCase();
  const match = metaArray.find((m) => norm(m.slug) === norm(portfolioIndustry.slug));

  let metadata = {
    title: `${portfolioIndustry.name} Portfolio Archive | Yellow`,
    description: `Dive into our case studies of our latest projects for ${portfolioIndustry.name} industry.`,
    img: "home.png",
    slug: `our-work/industry/${portfolioIndustry.slug}`,
  };
  if (match) metadata = { ...metadata, title: match.title, description: match.description };

  const works = Array.isArray(portfolio) ? portfolio : [];
  const allIndustries = Array.isArray(portfolioIndustries) ? portfolioIndustries : [];

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
                  portfolioIndustries={allIndustries}
                  activeIndustry={activeIndustry}
                  setActiveIndustry={setActiveIndustry}
                />
              </div>

              <div className="grid grid-cols-2 w-full h-full gap-x-[3vw] gap-y-[3vw] mb-[3vw] mobile:flex mobile:flex-col mobile:gap-[7vw]">
                {works.length > 0 ? (
                  works.map((work, index) => {
                    const isFullWidth = index % 3 === 0;
                    const cardClass = isFullWidth ? "col-span-2" : "col-span-1";
                    return (
                      <div
                        key={work.slug || index}
                        className={`work-card h-full ${cardClass}`}
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

          {portfolioIndustry?.industryConsultant?.consultantName && (
            <Consultant consultant={portfolioIndustry.industryConsultant} />
          )}
        </main>
      </Layout>
    </>
  );
};

export default IndustryPage;

export async function getStaticProps({ params }) {
  const { slug: portfolioIndustrySlug } = params;

  // ⛳ Skip ALL remote calls on CI/build machines so build never hits WP
  if (skipInCI()) {
    return {
      props: { portfolioIndustry: null, portfolio: [], portfolioIndustries: [] },
      revalidate: 60, // ISR can repopulate later at runtime
    };
  }

  try {
    const { portfolioIndustry } = await getPortfolioIndustryBySlug(portfolioIndustrySlug);

    // Real 404 only if CMS confirms it's missing
    if (!portfolioIndustry) {
      return { notFound: true, revalidate: 60 };
    }

    let portfolio = [];
    let portfolioIndustries = [];

    // Fetch works for this industry (soft-fail)
    try {
      const res = await getPortfolioIndustryByIdForPortfolio({
        portfolioIndustryId: portfolioIndustry.databaseId,
        queryIncludes: "all",
      });
      portfolio = res?.portfolio || [];
    } catch {
      portfolio = [];
    }

    // Fetch all industries for the filter strip (soft-fail)
    try {
      const all = await getAllPortfolioIndustries();
      portfolioIndustries = all?.portfolioIndustries || [];
    } catch {
      portfolioIndustries = [];
    }

    return {
      props: { portfolioIndustry, portfolio, portfolioIndustries },
      revalidate: 300,
    };
  } catch {
    // Network/CMS error at build time → keep route alive (no 404)
    return {
      props: { portfolioIndustry: null, portfolio: [], portfolioIndustries: [] },
      revalidate: 60,
    };
  }
}

export async function getStaticPaths() {
  // ⛳ Skip remote calls during build on CI
  if (skipInCI()) {
    return { paths: [], fallback: "blocking" };
  }

  try {
    const { portfolioIndustries } = await getAllPortfolioIndustries();
    const paths = Array.isArray(portfolioIndustries)
      ? portfolioIndustries
        .filter((i) => typeof i?.slug === "string" && i.slug.length > 0)
        .map((i) => ({ params: { slug: i.slug } }))
      : [];
    return { paths, fallback: "blocking" };
  } catch {
    // if CMS is down during build, return no paths but keep blocking fallback
    return { paths: [], fallback: "blocking" };
  }
}
