// pages/category/[slug].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';
import CategoryList from '@/components/blog/CategoryList';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PostCard from '@/components/blog/PostCard';
import styles from '@/styles/blogDetail.module.css';
import MetaData from '@/components/Metadata';
import { skipInCI } from '@/lib/util';

const Category = ({ category, posts, categories }) => {
  const router = useRouter();

  useEffect(() => {
    // no hard reloads; SSR + fallback:'blocking' handles first render
  }, []);

  if (router.isFallback) {
    return (
      <Layout>
        <main>
          <Section id="hero"><div className="container py-20">Loading…</div></Section>
        </main>
      </Layout>
    );
  }

  // Keep route alive if CMS was unreachable during build
  if (!category) {
    return (
      <Layout>
        <main>
          <Section id="hero">
            <div className="container py-20">
              <h1 className="text-[5.7vw] font-display leading-[1.3]">Category temporarily unavailable</h1>
              <p className="mt-4">Please refresh in a moment.</p>
            </div>
          </Section>
        </main>
      </Layout>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeCategory, setActiveCategory] = useState(`${category.slug}`);

  const metadata = {
    title: `${category.name} Archive | Yellow`,
    description: `Dive into our articles for fresh trends, insights, and ${category.name} inspiration.`,
    slug: `category/${category.slug}`,
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <Layout>
        <main>
          <Section id="hero">
            <div className="container">
              <div className="pt-[10%] tablet:pt-[15%] mobile:pt-[25%]">
                <h1 className="text-[5.7vw] font-display leading-[1.3]">{category.name} Blogs</h1>
              </div>
            </div>
          </Section>

          <Section id="second-section" className="bg-black">
            <div className="container py-[5%] bg-white">
              <CategoryList
                categories={categories || []}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <div className="bg-gray-400 h-[1px] w-screen ml-[-5vw]" />

              <div className="w-full h-full grid grid-cols-3 gap-[2vw] mb-[3vw] mt-[5vw] tablet:grid-cols-2 tablet:gap-y-[4vw] tablet:gap-x-[3vw] mobile:grid-cols-1 mobile:gap-[5vw]">
                {(posts || []).map((post, index) => (
                  <div key={post.slug || index} className={`${styles.postCard}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <PostCard post={post} />
                  </div>
                ))}
                {(!posts || posts.length === 0) && (
                  <p className="col-span-full text-center py-10">No posts in this category yet.</p>
                )}
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const { slug: categorySlug } = params;

  // ⛳ Skip remote calls on CI/build so the build never breaks
  if (skipInCI()) {
    return { props: { category: null, posts: [], categories: [] }, revalidate: 60 };
  }

  try {
    const { category } = await getCategoryBySlug(categorySlug);

    if (!category) {
      return { notFound: true, revalidate: 60 };
    }

    let posts = [];
    let categories = [];

    try {
      const res = await getPostsByCategoryId({
        categoryId: category.databaseId,
        queryIncludes: 'archive',
      });
      posts = res?.posts || [];
    } catch {
      posts = [];
    }

    try {
      const all = await getAllCategories();
      categories = all?.categories || [];
    } catch {
      categories = [];
    }

    return {
      props: { category, posts, categories },
      revalidate: 300,
    };
  } catch {
    return { props: { category: null, posts: [], categories: [] }, revalidate: 60 };
  }
}

export async function getStaticPaths() {
  // ⛳ CI skip avoids GraphQL on build machines
  if (skipInCI()) return { paths: [], fallback: 'blocking' };

  try {
    const { categories } = await getAllCategories();
    const paths = Array.isArray(categories)
      ? categories.filter(c => typeof c?.slug === 'string' && c.slug).map(c => ({ params: { slug: c.slug } }))
      : [];
    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
}
