import { getPaginatedPosts } from '@/lib/posts';

export default async function handler(req, res) {
    const { page = 1 } = req.query;

    try {
        const { posts, pagination } = await getPaginatedPosts({
            currentPage: parseInt(page, 10),
            queryIncludes: 'archive',
        });

        res.status(200).json({ posts, pagination });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}
