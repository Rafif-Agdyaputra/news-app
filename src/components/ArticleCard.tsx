import { Article } from '@/types/article';
import { JSX } from 'react';

const ArticleCard: ({ article }: { article: Article }) => JSX.Element = ({ article }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800 truncate">{article.headline.main}</h2>
        <p className="text-sm text-gray-500">{article.byline?.original || 'Unknown Author'}</p>
        <p className="text-sm text-gray-400">{new Date(article.pub_date).toLocaleDateString()}</p>

        <p className="text-base text-gray-600 line-clamp-3">
          {article.lead_paragraph || 'No description available.'}
        </p>
        <a
          href={article.web_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-500 hover:text-blue-700 text-sm font-semibold"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
