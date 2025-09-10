/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useEffect } from "react";
import CategoryList from "@/components/blog/CategoryList";
import Pagehero from "@/components/blog/Pagehero";
import PostCard from "@/components/blog/PostCard";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { getCategories } from "@/lib/categories";
import { getPaginatedPosts, sortStickyPosts } from "@/lib/posts";
import styles from "@/styles/blogDetail.module.css"
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Blog({ initialPosts, featuredPost, initialPagination, categories }) {
    const [posts, setPosts] = useState(initialPosts);
    const [pagination, setPagination] = useState(initialPagination);
    const [isLoading, setIsLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [nextPageData, setNextPageData] = useState(null);
    const cardContainer = useRef(null);

    titleAnim();
    paraAnim();
    lineAnim();
    fadeIn();
    fadeUp();

    if (globalThis.innerWidth > 541) {
        useGSAP(() => {
            const cards = cardContainer.current.querySelectorAll(".cardfade");
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cardContainer.current,
                    start: "top 80%",
                    end: "bottom 60%",
                },
                opacity: 0,
                yPercent: 20,
                ease: "power4.Out",
                duration: 0.7,
                stagger: 0.1,
            });
        });
    }

    useEffect(() => {
        const prefetchNextPage = async () => {
            if (pagination.currentPage < pagination.pagesCount) {
                const nextPage = pagination.currentPage + 1;
                const res = await fetch(`/api/getPosts?page=${nextPage}`);
                const { posts: newPosts, pagination: newPagination } = await res.json();
                setNextPageData({ newPosts, newPagination });
            }
        };
        prefetchNextPage();
    }, [pagination]);

    const loadMorePosts = () => {
        setIsLoading(true);
        if (nextPageData && !isLoading) {
            setPosts((prevPosts) => [...prevPosts, ...nextPageData.newPosts]);
            setPagination(nextPageData.newPagination);
            setNextPageData(null);
            setIsLoading(false);
        }
    };

    const metadata = {
        title: "Yellow | A blog about branding, digital, advertising and design",
        description: "A blog from Yellow - A Dubai branding and digital agency delivering strategy, identity, advertising and digital solutions to amazing business in the region.",
        img: "home.png",
        date_published: "2017-10-22T06:17",
        date_modified: "2024-08-01T12:32",
        slug: "blog"
    }

    return (
        <>
            <MetaData metadata={metadata} />
            <WebpageJsonLd metadata={metadata} />
            <Layout>
                {featuredPost && (
                    <Pagehero post={featuredPost} />
                )}
                <Section id="second-section" className="bg-black">
                    <div className="container py-[5%] bg-white mobile:pb-[15%]">
                        <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                        <div className="bg-gray-400 h-[1px] w-screen ml-[-5vw] mobile:ml-[-7vw] lineDraw" />
                        <div ref={cardContainer} className='w-full h-full grid grid-cols-3 gap-[2vw] mb-[3vw] mt-[5vw] mobile:grid-cols-1 mobile:gap-[7vw] mobile:mt-[12vw] tablet:grid-cols-2 tablet:mt-[7vw] tablet:gap-x-[3vw] tablet:gap-y-[4vw]'>
                            {posts.map((post, index) => (
                                <div
                                    key={post.slug}
                                    className={styles.postCard}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <PostCard post={post} />
                                </div>
                            ))}
                        </div>

                        {pagination && pagination.currentPage < pagination.pagesCount && (
                            <div className="flex w-full justify-center mobile:mt-[7vw]">
                                <button onClick={loadMorePosts} disabled={isLoading} className={`cursor-pointer flex w-fit relative text-[1.3vw] gap-[0.5vw] items-center font-medium group mobile:text-[6vw] mobile:gap-[2vw] tablet:text-[3vw] `}>
                                    <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">{isLoading ? 'Loading' : 'Load More'}</span>
                                    <svg className="relative -rotate-[135deg] w-[1.2vw] h-[1.2vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[3vw] tablet:h-[3vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export async function getStaticProps({ params }) {
    const { slug } = params || {};
    let { posts, pagination } = await getPaginatedPosts({
        queryIncludes: 'archive',
    });
    const categories = await getCategories();
    if (slug) {
        const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
            queryIncludes: 'archive',
            categoryId: slug,
        });
        posts = filteredPosts;
        pagination = {
            ...filteredPagination,
            basePath: `/categories/${slug}/page`,
        };
    }
    posts = sortStickyPosts(posts);
    const featuredPost = posts.find((post) => post.isSticky) || null;
    posts = posts.filter((post) => !post.isSticky);
    return {
        props: {
            initialPosts: posts,
            featuredPost,
            categories,
            initialPagination: {
                ...pagination,
                basePath: slug ? `/categories/${slug}/page` : '/blog',
            },
        },
        revalidate: 500,
    };
}