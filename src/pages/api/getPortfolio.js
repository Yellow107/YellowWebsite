import { getPaginatedPortfolio } from '@/lib/portfolio';

export default async function handler(req, res) {
    const { page = 1 } = req.query;

    try {
        const { portfolio, pagination } = await getPaginatedPortfolio({
            currentPage: parseInt(page, 10),
            queryIncludes: 'archive',
        });

        res.status(200).json({ portfolio, pagination });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch portfolio' });
    }
}
