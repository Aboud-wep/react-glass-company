import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Highlight from "../../assets/Images/Highlight.png";

// News Item Type Definition
type NewsItemType = {
  id: string;
  created_at: string;
  updated_at: string;
  image: string;
  title_gr: string;
  description_gr: string;
  learn_more_gr: string;
};

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  
  // Get current page from URL or default to 1
  const currentPage = Number(searchParams.get("page")) || 1;

  // Check if the user is logged in by checking the token
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("accessToken") !== null);

  
  }, []);
 

  // Fetch news items
  const fetchNews = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/news/news/website?page=${page}`);
      const { items, total_pages } = response.data.data;
      setNews(items);
      setTotalPages(total_pages);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() }); // Update URL with the new page
    }
  };

  return (
    <div>
      {/* Background Image */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[623px] xlg:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/OIPNews.png')]">
        <img
          src={Highlight}
          alt="Overlay"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-56"
        />
      </div>

      {/* News Content */}
      <div className="p-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title_gr}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{item.title_gr}</h2>
                  <p className="text-gray-600">{item.description_gr}</p>
                  <a
                    href={item.learn_more_gr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-4 block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-100 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r-md disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Plus Button for Authenticated Users */}
      {isAuthenticated && (
        <div className=" bg-blue-500 w-16 text-center text-white rounded-full p-4 shadow-lg cursor-pointer">
          <Link to="/add-news">
            <span className="text-2xl">+</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default News;
