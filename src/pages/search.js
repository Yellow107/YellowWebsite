/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import useSearch from '@/hooks/use-search';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import Line from '@/components/Line';
import Link from 'next/link';
import { postPathBySlug } from '@/lib/posts';
import { workPathBySlug } from '@/lib/portfolio';
import { formatDate } from '@/lib/datetime';
import LinkButton from '@/components/Button/LinkButton';
import { pagePathBySlug } from '@/lib/pages';

export default function Search() {
    const { query, results, search } = useSearch();
    const title = 'Search';

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        search({
            query: params.get('q'),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    titleAnim();
    paraAnim();
    lineAnim();
    fadeUp();

    const description = `Search results for '${query}'`;

    // Group results by content type
    const groupedResults = results.reduce((acc, result) => {
        const type = result.contentType;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(result);
        return acc;
    }, {});

    const ResultItem = ({ result }) => {
        // Determine the path based on the content type
        let path = '#';
        if (result.contentType === 'Posts') {
            path = postPathBySlug(result.slug);
        } else if (result.contentType === 'Pages') {
            path = pagePathBySlug(result.slug);
        } else if (result.contentType === 'Portfolio') {
            path = workPathBySlug(result.slug);
        }

        return (
            <div className='mb-6 border p-[2vw] rounded-xl group hover:shadow-lg duration-300 w-full mobile:px-[4vw] mobile:py-[6vw]'>
                <h3 className='text-2xl font-medium mb-1 group-hover:text-blue-500 duration-300 mobile:mb-3'>
                    <Link href={path}>
                        {result.title}
                    </Link>
                </h3>
                <p className='text-sm text-gray-500 mb-2'>{formatDate(result.date)}</p>
                <LinkButton btnText={"Read More"} btnLink={path} />
            </div>
        );
    };

    return (
        <>
            <Layout>
                <Section className='py-0 bg-black' id="hero">
                    <div className='container min-h-screen pt-[10%] bg-white pb-[5%] tablet:py-[15%] mobile:py-[25%]'>
                        <div className='w-full h-full'>
                            <h1 data-title-anim className='text-[5.7vw] w-fit font-display leading-[1.1] uppercase mobile:text-[12vw] tablet:text-[6.5vw]'>{title}</h1>
                            <p data-para-anim className="text-[1.9vw] font-medium leading-[1.4] mobile:text-[4vw] mt-[3vw] mb-[4vw] w-full">{description}</p>
                        </div>
                        <Line />
                        <div className="w-full h-[1px] bg-black lineDraw hidden mobile:block tablet:block"></div>
                        <div className='w-full h-full mt-[5vw] mobile:mt-[12vw] tablet:mt-[7vw]'>
                            {Object.keys(groupedResults).length > 0 ? (
                                Object.keys(groupedResults).map((contentType) => (
                                    <div key={contentType} className='mb-8 flex gap-[2vw] mobile:flex-col mobile:gap-0'>
                                        <h2 className='text-[1.5vw] uppercase mb-4 w-[10%] text-right py-[1vw] tablet:w-[15%] tablet:text-[2.5vw] mobile:text-[4vw] mobile:w-full mobile:text-left'>{contentType}</h2>
                                        <div className='border-l-[2px] border-gray-400 pl-[2vw] w-[60%] py-[1vw] tablet:w-full mobile:border-none mobile:pl-0 mobile:w-full'>
                                            {groupedResults[contentType].map((result) => (
                                                <ResultItem key={result.slug} result={result} />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-lg text-center mt-10">
                                    Sorry, no results found for <strong>{query}</strong>
                                </p>
                            )}
                        </div>
                    </div>
                </Section>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
