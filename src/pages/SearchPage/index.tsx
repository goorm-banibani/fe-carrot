// pages/SearchPage/index.tsx
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { IoIosArrowBack } from "react-icons/io";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchTerm = searchParams.get('q') || '';
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const searchItems = async () => {
  //     if (!searchTerm) return;
      
  //     setIsLoading(true);
  //     setError(null);
      
  //     try {
  //       const res = await fetch(`https://04ef-222-232-44-239.ngrok-free.app/articles`, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'ngrok-skip-browser-warning': 'true',
  //         }
  //       });
        
  //       if (!res.ok) {
  //         throw new Error('검색에 실패했습니다');
  //       }
        
  //       const data = await res.json();
  //       setItems(data);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : '검색 중 오류가 발생했습니다');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   searchItems();
  // }, [searchTerm]);

  // if (error) {
  //   return (
  //     <div className="p-4 text-red-500">
  //       {error}
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="flex items-center gap-4 p-4">
          <div 
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          >
            <IoIosArrowBack className="text-2xl" />
          </div>
          <h1 className="text-lg font-medium">
            '{searchTerm}' 검색 결과
          </h1>
        </div>
      </div>

      <div className="p-4">
        {isLoading ? (
          <div className="text-center text-gray-500 mt-8">
            검색 중...
          </div>
        ) : items.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            검색 결과가 없습니다
          </div>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;