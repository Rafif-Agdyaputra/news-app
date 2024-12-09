import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/article";
import SearchBar from "@/components/SearchBar";
import { fetchArticles } from "@/services/api";
import ErrorModal from "@/components/modals/ErrorModal";
import {languages} from "@/types/lang";

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const currentText = languages[language];

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const data = await fetchArticles(query);
      setArticles(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Data gagal dimuat, silahkan coba lagi.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-indigo-50 via-yellow-100 to-amber-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">{currentText.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{currentText.subtitle}</p>
      </header>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded mr-2 ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('id')}
          className={`px-4 py-2 rounded ${language === 'id' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Indonesia
        </button>
      </div>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} placeholder={currentText.placeholder} searchButton={currentText.searchButton} />

      {loading ? (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500">{currentText.noArticles}</p>
          )}
        </div>
      )}
      {error && <ErrorModal message={error} onClose={closeErrorModal} />}
    </div>
  );
}
