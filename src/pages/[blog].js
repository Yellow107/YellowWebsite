/* eslint-disable react-hooks/rules-of-hooks */
// pages/[blog].js
import { getPostBySlug, getRecentPosts, getRelatedPosts } from '@/lib/posts';
import { ArticleJsonLd, WebpageJsonLd } from '@/lib/json-ld';
import Layout from '@/components/Layout';
import FeaturedImage from '@/components/blog-detail/FeaturedImage';
import Categories from '@/components/blog-detail/Categories';
import Content from '@/components/blog-detail/Content';
import RelatedBlogs from '@/components/blog-detail/RelatedBlogs';
import Pagehero from '@/components/blog-detail/Pagehero';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { NextSeo } from 'next-seo';
import config from '../../package.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Post({ post, relatedPosts }) {
  const router = useRouter();

  // If the CMS was unreachable at build-time, post can be null.
  // Because fallback: 'blocking' + ISR, the very first request after a blip
  // can still build the page; but render something safe just in case.
  if (!post) {
    return (
      <Layout>
        <div style={{ padding: '4rem 0' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            This article is temporarily unavailable
          </h1>
          <p>Please refresh in a moment.</p>
        </div>
      </Layout>
    );
  }

  const {
    title,
    metaImage,
    metaDescription,
    content,
    date,
    featuredImage,
    slug,
    readingTime,
    categories,
  } = post;

  const { homepage = '' } = config;
  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  // NOTE: you probably don't need to force reload on route change,
  // but keeping your logic as-is:
  useEffect(() => {
    const handleSlugChange = () => {
      window.location.reload();
    };
    router.events.on('routeChangeComplete', handleSlugChange);
    return () => router.events.off('routeChangeComplete', handleSlugChange);
  }, [router]);

  const metadata = {
    title: title,
    description: metaDescription,
    img: metaImage?.sourceUrl,
    date_published: '2017-10-22T06:17',
    date_modified: '2024-08-01T12:32',
    slug: `${slug}`,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          type: 'article',
          url: `${homepage}/${slug}`,
          title,
          description: metaDescription,
          images: metaImage
            ? [
                {
                  url: metaImage.sourceUrl,
                  width: metaImage?.mediaDetails?.width,
                  height: metaImage?.mediaDetails?.height,
                  alt: metaImage?.mediaDetails?.alt,
                  type: featuredImage?.mimeType,
                },
              ]
            : [],
          siteName: 'Yellow',
        }}
        canonical={`${homepage}/${slug}`}
        languageAlternates={[
          {
            hrefLang: 'x-default',
            href: `${homepage}/${slug}`,
          },
        ]}
      />
      <WebpageJsonLd metadata={metadata} />
      <ArticleJsonLd post={post} />
      <Layout>
        <Pagehero>
          {featuredImage && (
            <div className="mobile:relative mobile:h-[60vh] mobile:w-full tablet:w-full w-[89vw]">
              <FeaturedImage
                title={title}
                src={featuredImage.sourceUrl}
                alt={featuredImage.altText}
                sizes={featuredImage.sizes}
              />
            </div>
          )}
          <h1
            data-para-anim
            className="text-[4.8vw] font-display leading-[1.3] w-[90%] mb-[3vw] capitalize mobile:text-[9vw] mobile:mt-[7vw] tablet:text-[5.5vw] mobile:w-full"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="mobile:w-full mobile:my-[4vw] tablet:my-[1vw]">
            <Categories categories={categories} />
          </div>
        </Pagehero>
        <Content date={date} content={content} link={slug} readingTime={readingTime} />
        {Array.isArray(relatedPosts) && relatedPosts.length > 0 && (
          <RelatedBlogs posts={relatedPosts} />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { blog: postSlug } = params;

  try {
    const { post } = await getPostBySlug(postSlug);

    // If CMS confirms it's missing, return a true 404
    if (!post) {
      return { props: {}, notFound: true, revalidate: 60 };
    }

    const props = { post };

    // Safely try related posts, but never fail build for them
    try {
      const relatedData = await getRelatedPosts(post.categories, post.databaseId);
      const { posts: relatedPosts } = relatedData || {};
      if (Array.isArray(relatedPosts) && relatedPosts.length) {
        props.relatedPosts = relatedPosts;
      }
    } catch {
      // ignore related posts failure
    }

    return { props, revalidate: 500 };
  } catch {
    // Network/CMS error at build time: don't 404, keep page alive
    // ISR will re-attempt soon; fallback: 'blocking' lets it render on request
    return { props: { post: null }, revalidate: 60 };
  }
}

export async function getStaticPaths() {
  // Keep build alive even if CMS is down
  try {
    const { posts } = await getRecentPosts({
      count: process.env.POSTS_PRERENDER_COUNT || 20,
      queryIncludes: 'index',
    });

    const paths =
      Array.isArray(posts)
        ? posts
            .filter(({ slug }) => typeof slug === 'string')
            .map(({ slug }) => ({ params: { blog: slug } }))
        : [];

    return { paths, fallback: 'blocking' };
  } catch {
    // Important: return no paths, but keep fallback so runtime can fetch
    return { paths: [], fallback: 'blocking' };
  }
}
