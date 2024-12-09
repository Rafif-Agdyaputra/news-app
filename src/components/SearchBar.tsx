import { JSX } from "react";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: ({ query, setQuery, onSearch }: SearchBarProps) => JSX.Element = ({ query, setQuery, onSearch }) => (
  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
    <div className="relative w-full sm:w-80">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="w-full p-3 pr-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
    </div>

    <button
      onClick={onSearch}
      className="p-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 w-full sm:w-auto"
    >
      Search
    </button>
  </div>
);

export default SearchBar;
