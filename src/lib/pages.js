/**
 * pagesPathBySlug
 */

const servicePages = ['communication', 'naming', 'brand-strategy', 'brand-identity', 'digital'];

export function pagePathBySlug(slug) {
    if (slug === 'homepage') {
        return '/'; // Redirect "homepage" slug to the root path
    } else if (servicePages.includes(slug)) {
        return `/what-we-do/${slug}`; // Route service pages correctly
    }
    return `/${slug}`; // Default path for other pages
}