import { getPostBySlug, getRecentPosts, getRelatedPosts } from '@/lib/posts';
import { ArticleJsonLd } from '@/lib/json-ld';
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
  const {
    title,
    metaImage,
    metaDescription,
    content,
    date,
    categories,
    featuredImage,
    slug,
    readingTime,
  } = post;

  const router = useRouter();

  const { homepage = '' } = config;

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

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
        title={title}
        description={metaDescription}
        openGraph={{
          type: 'article',
          url: `${homepage}/${slug}`,
          title: title,
          "description": metaDescription,
          images: [
            {
              url: metaImage.sourceUrl,
              width: metaImage.mediaDetails.width,
              height: metaImage.mediaDetails.height,
              alt: metaImage.mediaDetails.alt,
              type: "image/jpg",
            },
          ],
          siteName: "Yellow",
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `${homepage}/${slug}`,
          },
          {
            rel: "alternate",
            href: `${homepage}/${slug}`,
            hreflang: "x-default",
          }
        ]}
      />
      <ArticleJsonLd post={post} />
      <Layout>
        <Pagehero>
          {featuredImage && (
            <div className='mobile:relative mobile:h-[60vh] mobile:w-full tablet:w-full w-[89vw]'>
              <FeaturedImage
                src={featuredImage.sourceUrl}
                alt={featuredImage.altText}
                sizes={featuredImage.sizes}
              />
            </div>
          )}
          <h1 data-para-anim
            className="text-[4.8vw] font-display leading-[1.3] w-[90%] mb-[3vw] capitalize mobile:text-[9vw] mobile:mt-[7vw] tablet:text-[5.5vw] mobile:w-full"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <div className='mobile:w-full mobile:my-[4vw] tablet:my-[1vw]'>
            <Categories
              categories={categories}
            />
          </div>
        </Pagehero>
        <Content date={date} content={content} link={slug} readingTime={readingTime} />
        {relatedPosts && relatedPosts.length > 0 && (
          <RelatedBlogs posts={relatedPosts} />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { blog: postSlug } = params;
  const { post } = await getPostBySlug(postSlug);

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { categories, databaseId: postId } = post;

  const props = {
    post,
  };

  const relatedData = await getRelatedPosts(categories, postId);

  const { category: relatedCategory, posts: relatedPosts } = relatedData || {};
  const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

  if (hasRelated) {
    props.relatedPosts = relatedPosts;
  }

  return {
    props,
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { posts } = await getRecentPosts({
    count: process.env.POSTS_PRERENDER_COUNT,
    queryIncludes: 'index',
  });

  const paths = posts
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        blog: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}
