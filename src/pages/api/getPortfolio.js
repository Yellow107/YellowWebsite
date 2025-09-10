import { getPaginatedPortfolio } from '@/lib/portfolio';

export default async function handler(req, res) {
  const page = Math.max(1, parseInt((req.query.page) || '1', 10));

  try {
    const { portfolio = [], pagination } = await getPaginatedPortfolio({
      currentPage: page,
      queryIncludes: 'archive',
    });

    // cache at the edge, allow quick recovery on blips
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    res.status(200).json({
      portfolio,
      pagination: pagination ?? { currentPage: page, pagesCount: page, basePath: '/our-work' },
    });
  } catch {
    // Soft-fail with empty results (keeps UI functional)
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=30');
    res.status(200).json({
      portfolio: [],
      pagination: { currentPage: page, pagesCount: page, basePath: '/our-work' },
    });
  }
}
