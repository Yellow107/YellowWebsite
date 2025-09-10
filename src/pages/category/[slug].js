import { useEffect, useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/blog/CategoryList';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PostCard from '@/components/blog/PostCard';
import styles from "@/styles/blogDetail.module.css";
import MetaData from '@/components/Metadata';
import { useRouter } from 'next/router';

const Category = ({ category, posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState(`${category.slug}`);

  const router = useRouter();

  const metadata = {
    title: `${category.name} Archive | Yellow`,
    description: `Dive into our articles for fresh trends, insights, and ${category.name} inspiration.`,
    slug: `category/${category.slug}`,
  };

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
    <MetaData metadata={metadata} />
    <Layout>
      <main>
        <Section id="hero">
          <div className="container">
            <div className='pt-[10%] tablet:pt-[15%] mobile:pt-[25%]'>
              <h1 className='text-[5.7vw] font-display leading-[1.3]'>
                {category.name} Blogs
              </h1>
            </div>
          </div>
        </Section>

        <Section id="second-section" className="bg-black">
          <div className="container py-[5%] bg-white">

            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <div className="bg-gray-400 h-[1px] w-screen ml-[-5vw]" />
            
            <div className='w-full h-full grid grid-cols-3 gap-[2vw] mb-[3vw] mt-[5vw] tablet:grid-cols-2 tablet:gap-y-[4vw] tablet:gap-x-[3vw] mobile:grid-cols-1 mobile:gap-[5vw]'>
              {posts.map((post, index) => (
                <div
                  key={post.slug}
                  className={styles.postCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PostCard post={post} />
                </div>
              ))}
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
  const { category } = await getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      notFound: true,
    };
  }

  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
    queryIncludes: 'archive',
  });

  const { categories } = await getAllCategories();

  return {
    props: {
      category,
      posts,
      categories,
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { categories } = await getAllCategories();

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
