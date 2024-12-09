import { Article } from '@/types/article';

export const fetchArticles = async (query: string): Promise<Article[]> => {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await res.json();
  return data.response.docs;
};
