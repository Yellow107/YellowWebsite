// pages/api/getPosts.js
import { getPaginatedPosts } from '@/lib/posts';

export default async function handler(req, res) {
  const page = Math.max(1, parseInt(req.query.page || '1', 10));

  try {
    const { posts = [], pagination } = await getPaginatedPosts({
      currentPage: page,
      queryIncludes: 'archive',
    });

    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    res.status(200).json({
      posts,
      pagination: pagination ?? { currentPage: page, pagesCount: page, basePath: '/blog' },
    });
  } catch {
    // Soft-fail keeps UI functional even if WP blips
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=30');
    res.status(200).json({
      posts: [],
      pagination: { currentPage: page, pagesCount: page, basePath: '/blog' },
    });
  }
}
