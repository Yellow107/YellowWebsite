"use client"
import useSearch, { SEARCH_STATE_LOADED } from '@/hooks/use-search';
import { postPathBySlug } from "@/lib/posts";
import { workPathBySlug } from "@/lib/portfolio";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { pagePathBySlug } from "@/lib/pages";
import styles from "./search.module.css";

const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';

const SearchButton = ({ isInverted, menuOpen }) => {

    const lenis = useLenis();
    const formRef = useRef();
    const searchWrapper = useRef();
    const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);
    const { query, results, search, clearSearch, state } = useSearch({
        maxResults: 10,
    });
    const searchIsLoaded = state === SEARCH_STATE_LOADED;

    const groupedResults = results.reduce((acc, result) => {
        const type = result.contentType;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(result);
        return acc;
    }, {});

    useEffect(() => {
        if (searchVisibility === SEARCH_HIDDEN) {
            removeDocumentOnClick();
            return;
        }
        addDocumentOnClick();
        addResultsRoving();
        
        const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');
        searchInput.focus();
        return () => {
            removeResultsRoving();
            removeDocumentOnClick();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchVisibility]);
    
    function addDocumentOnClick() {
        document.body.addEventListener('click', handleOnDocumentClick, true);
    }

    function removeDocumentOnClick() {
        document.body.removeEventListener('click', handleOnDocumentClick, true);
    }
   
    function handleOnDocumentClick(e) {
        if (!e.composedPath().includes(formRef.current)) {
            setSearchVisibility(SEARCH_HIDDEN);
            clearSearch();
        }
    }
   
    function handleOnSearch({ currentTarget }) {
        search({
            query: currentTarget.value,
        });
    }
    
    function handleOnToggleSearch() {
        setSearchVisibility(SEARCH_VISIBLE);
        searchWrapper.current.classList.add(`${styles.open}`);
        lenis.stop();
    }
    
    function addResultsRoving() {
        document.body.addEventListener('keydown', handleResultsRoving);
    }
    
    function removeResultsRoving() {
        document.body.removeEventListener('keydown', handleResultsRoving);
    }
    function onSearchCloseClick() {
        searchWrapper.current.classList.remove(`${styles.open}`);
        lenis.start();
    }

    function handleResultsRoving(e) {
        const focusElement = document.activeElement;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
                focusElement.nextSibling.children[0].firstChild.firstChild.focus();
            } else if (focusElement.parentElement.nextSibling) {
                focusElement.parentElement.nextSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.firstChild.firstChild.focus();
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
                focusElement.parentElement.previousSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.lastChild.firstChild.focus();
            }
        }
    }

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            clearSearch();
            setSearchVisibility(SEARCH_HIDDEN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex items-center relative" id="search-btn">
            <div ref={searchWrapper} className={`${styles.searchWrapper}`}>
                <span className={styles.bg}></span>
                <div className={`${styles.searchBarContainer} container flex items-center justify-between w-full py-[2.7%] tablet:py-[5%] mobile:py-[7%] h-fit relative`}>
                    <div className="flex flex-wrap mx-auto items-center w-full justify-between mobile:flex-nowrap">
                        <span className={styles.bg}></span>
                        <div className="w-fit overflow-hidden tablet:hidden mobile:hidden">
                            <Link href="/" className="pointer-events-auto">
                                <Image
                                    loading="lazy"
                                    className={`w-[9vw] opacity-0 ${styles.logo} mobile:w-[25vw] relative z-[202] tablet:w-[15vw]`}
                                    src="/logo-white.svg"
                                    alt="Yellow Brand Logo"
                                    width={153}
                                    height={48}
                                />
                            </Link>
                        </div>
                        <div className={`${styles.searchContainer} w-[50%] tablet:w-[80%] mobile:w-[80%]`}>
                            <form ref={formRef} action="/search" data-search-is-active={!!query} className="flex items-center justify-center w-full h-full mobile:justify-end">
                                <input
                                    placeholder="Search for something"
                                    className={`${styles.searchInput} ${styles.landscapeInput} placeholder:font-normal z-10 text-[1.4vw] tablet:text-[4vw] mobile:text-[4.5vw]`}
                                    type="search"
                                    name="q"
                                    value={query || ''}
                                    onChange={handleOnSearch}
                                    autoComplete="off"
                                    required
                                />
                                <div data-lenis-prevent className={styles.navSearchResults}>
                                    {results.length > 0 && (
                                        <ul className="space-y-[2vw] tablet:space-y-[3vw]">
                                            {Object.keys(groupedResults).map((contentType) => (
                                                <li key={contentType} className="flex gap-[2vw] mobile:flex-col mobile:py-[2vw]">
                                                    <h3 className="text-white uppercase text-right w-[10%] text-[1.1vw] py-[0.5vw] tablet:text-[2vw] tablet:w-[15%] mobile:text-left mobile:w-auto mobile:text-[3vw]">
                                                        {contentType}
                                                    </h3>
                                                    <ul className="border-l border-gray-500 py-[0.5vw] px-[2vw] space-y-[0.5vw] w-[80%] tablet:space-y-[2vw] mobile:border-none mobile:px-0 mobile:w-full mobile:space-y-[2vw]">
                                                        {groupedResults[contentType].map(({ slug, title }, index) => {
                                                            // Determine the path based on the content type
                                                            let path = '#';
                                                            if (contentType === 'Posts') {
                                                                path = postPathBySlug(slug);
                                                            } else if (contentType === 'Pages') {
                                                                path = pagePathBySlug(slug);
                                                            } else if (contentType === 'Portfolio') {
                                                                path = workPathBySlug(slug);
                                                            }

                                                            return (
                                                                <li key={slug}>
                                                                    <Link tabIndex={index} href={path}>
                                                                        {title}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {results.length === 0 && (
                                        <p className="text-white text-[1.2vw] text-center">
                                            Sorry, not finding anything for <strong>{query}</strong>
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="ml-[-10px] mobile:mt-0">
                            <button aria-label="close" className={styles.closeBtn} onClick={onSearchCloseClick}>
                                <span className={styles.closeBg}></span>
                                <span className={styles.label}>Close</span>
                                <span className={styles.icon}>
                                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.desktopIcon} ${styles.iconSvg}`}>
                                        <line x1="2.06066" y1="1" x2="25.8909" y2="24.8302" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                        <line x1="1" y1="24.8302" x2="24.8302" y2="0.999996" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                    </svg>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.mobileIcon} ${styles.iconSvg}`}>
                                        <line x1="1.99816" y1="1.94167" x2="15.0625" y2="15.006" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                        <line x1="15.0625" y1="2.06066" x2="1.99816" y2="15.125" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button aria-label="Search Button" className={styles.searchBtn} onClick={handleOnToggleSearch} disabled={!searchIsLoaded}>
                <span className={styles.bg}></span>
                <span className={styles.label}>Search</span>
                <span className={styles.icon}>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className={`${isInverted ? "text-white" : ""} ${menuOpen ? "text-white" : ""} ${styles.searchIcon}`} >
                        <circle cx="11" cy="11" r="10" strokeWidth="2" ></circle>
                        <line x1="18.6585" y1="18.2474" x2="26.6585" y2="25.2474" strokeWidth="2" ></line>
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default SearchButton;