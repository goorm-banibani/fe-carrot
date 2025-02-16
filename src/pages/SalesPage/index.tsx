import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SalesPage: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<any[]>([]); // 판매내역 데이터 상태

  // 판매내역 로드
  useEffect(() => {
    const sales = JSON.parse(localStorage.getItem("sales") || "[]");
    setItems(sales);
  }, []);

  // 게시물 삭제 함수
  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id); // 해당 ID를 제외한 리스트 생성
    setItems(updatedItems); // 상태 업데이트
    localStorage.setItem("sales", JSON.stringify(updatedItems)); // 로컬스토리지 업데이트
    alert("게시물이 삭제되었습니다.");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 헤더 */}
      <div className="mb-4">
        {/* 제목과 이전 버튼을 같은 줄에 정렬 */}
        <div className="flex items-center">
          {/* 이전 페이지 버튼 */}
          <button
            onClick={() => navigate(-1)} // 이전 페이지로 이동
            className="text-orange-500 text-2xl mr-2"
          >
            &lt;
          </button>
          {/* 제목 */}
          <h1 className="text-3xl font-bold text-orange-500">나의 판매내역</h1>
        </div>

        {/* 글쓰기 버튼 */}
        <button
          onClick={() => navigate("/write-post")} // 게시물 작성 페이지로 이동
          className="mt-2 px-4 py-2 bg-orange-500 text-white font-bold rounded shadow hover:bg-orange-600"
        >
          글쓰기
        </button>
      </div>

      {/* 판매내역 리스트 */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-lg shadow p-4 relative cursor-pointer"
            onClick={() =>
              navigate(`/details/${item.id}`, { state: item }) // 상세 페이지로 이동
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
                <p className="text-lg font-bold">{item.price.toLocaleString()}원</p>
              </div>
            </div>

            {/* 삭제 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation(); //클릭 시 상세 페이지로 가지 않게
                handleDelete(item.id);
              }}
              className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded shadow hover:bg-red-600"
            >
              삭제
            </button>

            {/* 수정 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation(); //클릭 시 상세 페이지로 가지 않게
                navigate(`/edit-post/${item.id}`, { state: item }); // 수정 페이지로 이동
              }}
              className="absolute top-4 right-20 bg-blue-500 text-white text-sm px-3 py-1 rounded shadow hover:bg-blue-600"
            >
              수정
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
