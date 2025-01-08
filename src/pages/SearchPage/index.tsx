import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { IoIosArrowBack } from "react-icons/io";
import Items from '../../mock/Item.json';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchTerm = searchParams.get('q') || '';
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 검색어가 있을 때만 필터링 수행
    if (!searchTerm) {
      setItems([]);
      return;
    }

    setIsLoading(true);

    // 검색 시뮬레이션을 위한 setTimeout
    setTimeout(() => {
      const filteredItems = Items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setItems(filteredItems);
      setIsLoading(false);
    }, 500); // 0.5초 지연
  }, [searchTerm]);

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