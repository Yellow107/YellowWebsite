/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import {
  paraAnim,
  fadeUp,
  lineAnim,
} from "@/components/gsapAnimations";
import Section from "@/components/Section";
import { getAllTeams, getTeamBySlug } from "@/lib/teams";
import config from '../../../package.json';
import { NextSeo } from "next-seo";
import { WebpageJsonLd } from "@/lib/json-ld";
import Link from "next/link";
import { useRouter } from "next/router";

function Teamdetail({ team }) {
  const {
    featuredImage,
    title,
    teams,
    content,
    seo,
    slug,
    date,
    modified,
  } = team;

  const { homepage = '' } = config;

  const router = useRouter();

  const metadata = {
    title: seo.title,
    description: seo.metaDesc,
    slug: `teams/${slug}`,
    date_published: date,
    date_modified: modified,
  }

  paraAnim();
  fadeUp();
  lineAnim();

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

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDesc}
        openGraph={{
          url: `${homepage}/teams/${slug}`,
          title: `${seo.title}`,
          "description": `${seo.metaDesc}`,
          images: [
            {
              url: seo.opengraphImage.sourceUrl,
              width: seo.opengraphImage.mediaDetails.width,
              height: seo.opengraphImage.mediaDetails.height,
              alt: "Page Og Image",
              type: "image/webp",
            },
          ],
          siteName: "Yellow",
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `${homepage}/teams/${slug}`,
          },
          {
            rel: "alternate",
            href: `${homepage}/teams/${slug}`,
            hreflang: "x-default",
          }
        ]}
      />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Section id="teamdetail" className="w-full h-full bg-black">
          <div className="container py-[8%] mobile:pt-[25%] mobile:pb-[15%] tablet:py-[15%] bg-white">
            <div className="flex gap-[4vw] h-full items-start w-full mb-[3vw] mobile:flex-col mobile:gap-[5vw]">
              <div className="w-[35vw] h-[45vw] rounded-xl overflow-hidden relative mobile:w-[85vw] mobile:h-[120vw] fadeup tablet:w-[45vw] tablet:h-[60vw]">
                <img
                  src={featuredImage.node.sourceUrl}
                  alt={`${title} Image`}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="flex flex-col justify-start h-full pt-[5vw] gap-[2vw] mobile:h-full mobile:ml-[1%] tablet:h-[40vh] tablet:w-[40vw]">
                <div className="">
                  <h1
                    data-para-anim
                    className="text-[5vw] font-display leading-[1.3] uppercase mobile:text-[12vw] tablet:text-[6.5vw] tablet:leading-[1.2]"
                  >
                    {title}
                  </h1>
                  <p
                    data-para-anim
                    className="text-[1.8vw] font-medium ml-[1%] mobile:text-[5vw] tablet:text-[3vw]"
                  >
                    {teams.designation}
                  </p>
                </div>

                <div className='flex gap-[2vw] fadeup ml-[10px] items-end mt-[1vw] mobile:gap-[6vw] tablet:gap-[4vw]'>

                  <Link href={`mailto:${teams.email}`} className='text-zinc-400 hover:text-black duration-300 w-[1.5vw] tablet:w-[3vw] mobile:w-[6vw]'>
                    <svg viewBox="0 0 39 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.8804 27.9999C24.9653 27.9999 14.0578 27.9999 3.14264 27.9999C3.074 27.9779 3.01297 27.9414 2.9367 27.9268C1.251 27.6197 0.0229492 26.2234 0.0229492 24.5785C0.0229492 19.11 0.0229492 13.6416 0.0229492 8.17323C0.0229492 8.07088 0.0382045 7.97584 0.0458321 7.85156C0.122108 7.88812 0.152619 7.91005 0.183129 7.92467C5.47669 11.3022 10.7626 14.6871 16.0562 18.0646C18.3063 19.5048 20.7014 19.5048 22.9516 18.0719C28.1612 14.7456 33.3633 11.4192 38.5729 8.09282C38.7102 8.00509 38.8551 7.93929 38.9924 7.86618C38.9924 13.6051 38.9924 19.344 38.9924 25.0829C38.9619 25.1633 38.9314 25.2364 38.9085 25.3168C38.6644 26.2526 38.1381 27.0056 37.261 27.4808C36.8414 27.7147 36.3457 27.8317 35.8804 27.9999Z" />
                      <path d="M39.0003 2.90966C39.0003 3.2752 39.0003 3.64073 39.0003 4.00627C38.7333 4.96397 38.2146 5.73159 37.3298 6.29452C32.0973 9.62089 26.8724 12.9692 21.6398 16.3029C20.2135 17.2094 18.7947 17.2021 17.376 16.2956C16.8192 15.9373 16.2547 15.5791 15.6979 15.2282C11.0069 12.2308 6.31594 9.23342 1.62496 6.23603C0.0612979 5.24178 -0.449752 3.42872 0.427424 1.86423C1.13679 0.606788 2.27331 0 3.76069 0C14.2639 0 24.7671 0 35.2704 0C35.3466 0 35.4229 0 35.4992 0C37.0324 0.0950392 38.1231 0.811488 38.7409 2.15666C38.8554 2.39791 38.9164 2.6611 39.0003 2.90966Z" />
                    </svg>
                  </Link>

                  <Link target='_blank' href={teams.linkedin} className='text-zinc-400 hover:text-black duration-300 w-[1.5vw] tablet:w-[3vw] mobile:w-[6vw]'>
                    <svg viewBox="0 0 37 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8072 35.3548C12.7917 35.2159 12.7686 35.0769 12.7686 34.938C12.7686 27.2802 12.7686 19.6146 12.7686 11.9568C12.7686 11.8178 12.7686 11.6789 12.7686 11.5091C15.4241 11.5091 18.0487 11.5091 20.7043 11.5091C20.7043 12.5975 20.7043 13.6783 20.7043 14.7667C20.7352 14.7822 20.7583 14.7976 20.7892 14.813C20.9127 14.6664 21.0362 14.5197 21.1675 14.3807C22.6496 12.7287 24.3711 11.4087 26.602 11.0536C30.2688 10.4824 34.4374 11.895 36.1434 16.4882C36.5835 17.6847 36.8382 18.9199 36.9231 20.1936C36.9308 20.3171 36.9694 20.4406 37.0003 20.5641C37.0003 25.4969 37.0003 30.422 37.0003 35.3548C34.3525 35.3548 31.7124 35.3548 29.0646 35.3548C29.0646 35.185 29.0569 35.0229 29.0569 34.8531C29.0569 30.8543 29.0646 26.8479 29.0492 22.8491C29.0414 22.0617 28.972 21.2589 28.833 20.4792C28.3775 17.9858 26.4168 16.7352 23.9542 17.3296C22.225 17.7465 20.766 19.5297 20.7506 21.3438C20.7274 25.991 20.7352 30.6305 20.7352 35.2776C20.7352 35.3008 20.7429 35.3317 20.7506 35.3548C18.0951 35.3548 15.455 35.3548 12.8072 35.3548Z" />
                      <path d="M0.478818 35.355C0.471098 35.2006 0.463379 35.0462 0.463379 34.8918C0.463379 27.2571 0.463379 19.6147 0.463379 11.9801C0.463379 11.8257 0.463379 11.679 0.463379 11.5015C3.1112 11.5015 5.72813 11.5015 8.41455 11.5015C8.41455 19.4526 8.41455 27.4038 8.41455 35.355C5.77445 35.355 3.12663 35.355 0.478818 35.355Z" />
                      <path d="M4.59731e-05 4.12196C0.00776555 2.05311 1.40501 0.416562 3.45842 0.0923393C4.79391 -0.116089 6.08308 -0.00801527 7.21014 0.794821C8.62282 1.80609 9.13231 3.24965 8.83897 4.91708C8.54562 6.60767 7.44944 7.64981 5.80517 8.08211C4.70127 8.37545 3.59737 8.32913 2.52435 7.91228C0.957274 7.29471 -0.00767361 5.83571 4.59731e-05 4.12196Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-[1.7vw] flex flex-col gap-[2vw] font-medium my-[5vw] mobile:text-[4.5vw] mobile:gap-[5vw] mobile:my-[10vw] tablet:text-[2.5vw] tablet:my-[7vw]">
              <div
                className="space-y-[2vw]"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </div>
            {teams.profilePicture && (
              <div className="w-[90vw] relative mobile:w-[90vw] fadeup tablet:w-[85vw] rounded-[15px] overflow-hidden">
                <img
                  src={teams.profilePicture.node.sourceUrl}
                  alt={`${title} Profile Image`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </Section>
      </Layout>
    </>
  );
}

export default Teamdetail;

export async function getStaticProps({ params = {} } = {}) {
  const { team: teamSlug } = params;
  const { team } = await getTeamBySlug(teamSlug);

  if (!team) {
    return {
      props: {},
      notFound: true,
    };
  }

  const props = {
    team,
  };

  return {
    props,
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { teams } = await getAllTeams({
    queryIncludes: 'index',
  });

  const paths = teams
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        team: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}



