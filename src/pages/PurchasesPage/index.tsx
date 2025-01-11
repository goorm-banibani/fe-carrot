import React from "react";
import { useNavigate } from "react-router-dom";

const PurchasesPage: React.FC = () => {
  const navigate = useNavigate();

  // 구매목록 아이템 데이터
  const items = [
    {
      id: 1,
      image: "",
      title: "아이폰 13 미니 128GB",
      location: "삼성동",
      status: "거래완료",
      price: 750000,
    },
    {
      id: 2,
      image: "",
      title: "삼성 갤럭시 S21",
      location: "역삼동",
      status: "거래완료",
      price: 600000,
    },
    {
      id: 3,
      image: "",
      title: "나이키 운동화 (사이즈 270)",
      location: "청담동",
      status: "거래완료",
      price: 50000,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 헤더 */}
      <div className="mb-4">
        {/* 이전 페이지 버튼 */}
        <button
          onClick={() => navigate(-1)} // 이전 페이지로 이동
          className="text-orange-500 text-2xl mb-2"
        >
          &lt;
        </button>
        {/* 제목 */}
        <h1 className="text-3xl font-bold text-orange-500">나의 구매목록</h1>
      </div>

      {/* 구매목록 리스트 */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-lg shadow p-4"
          >
            {/* 이미지 */}
            <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center mr-4">
              {item.image ? (
                <img
                  src={item.image}
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
                {/* 거래 상태 */}
                {item.status && (
                  <span className="text-sm text-white bg-black px-2 py-1 rounded">
                    {item.status}
                  </span>
                )}
                {/* 가격 */}
                <p className="text-lg font-bold">{item.price.toLocaleString()}원</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
