import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WishPage: React.FC = () => {
  const navigate = useNavigate();
  const [wishList, setWishList] = useState<any[]>([]);

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList") || "[]");
    setWishList(storedWishList);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 헤더 */}
      <div className="mb-4 flex items-center">
        {/* 이전 페이지 버튼 */}
        <button
          onClick={() => navigate(-1)} // 이전 페이지로 이동
          className="text-orange-500 text-2xl mr-2"
        >
          &lt;
        </button>
        {/* 제목 */}
        <h1 className="text-3xl font-bold text-orange-500">나의 관심목록</h1>
      </div>

      {/* 관심목록 리스트 */}
      <div className="space-y-6">
        {wishList.length > 0 ? (
          wishList.map((item) => (
            <div
              key={item.id}
              className="flex bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() =>
                navigate(`/details/${item.id}`, { state: item })
              }
            >
              {/* 이미지 */}
              <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center mr-4">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">이미지 없음</span>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>

                <div className="flex items-center justify-between">
                  {/* 예약 상태 */}
                  {item.isReserved && (
                    <span className="text-sm text-orange-500 bg-orange-100 px-2 py-1 rounded">
                      예약 중
                    </span>
                  )}
                  {/* 가격 */}
                  <p className="text-lg font-bold">{item.price.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">관심목록이 비어 있습니다.</p>
        )}
      </div>
    </div>
  );
};

export default WishPage;
