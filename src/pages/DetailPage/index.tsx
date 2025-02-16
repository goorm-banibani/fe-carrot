import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const DetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  const { name } = useUser();//로그인 확인

  // 관심 목록 상태
  const [isWishListed, setIsWishListed] = useState<boolean>(() => {
    const wishList = JSON.parse(localStorage.getItem("wishList") || "[]");
    return wishList.some((wishItem: any) => wishItem.id === item.id);
  });

  if (!item) {
    return <div>잘못된 접근입니다.</div>;
  }

  const handleWishToggle = () => {
    // 로그인 여부 확인
    if (!name) {
      alert("로그인이 필요합니다!");
      navigate("/");
      return;
    }

    const wishList = JSON.parse(localStorage.getItem("wishList") || "[]");

    if (isWishListed) {
      // 관심 목록에서 제거
      const updatedWishList = wishList.filter((wishItem: any) => wishItem.id !== item.id);
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    } else {
      // 관심 목록에 추가
      wishList.push(item);
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }

    setIsWishListed(!isWishListed);
  };

  return (
    <div className="p-6">
      {/* 뒤로가기 버튼 */}
      <button
        className="text-orange-500 text-2xl mb-4 flex items-center"
        onClick={() => navigate(-1)}
      >
        &lt; 뒤로가기
      </button>

      {/* 이미지 */}
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded mb-4">
          이미지 없음
        </div>
      )}

      {/* 상세 정보 */}
      <h1 className="text-xl font-bold mb-2">{item.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{item.location}</p>
      <p className="text-gray-700 mb-4">{item.description || "상세 설명 없음"}</p>

      {/* 예약 상태 표시 */}
      {item.isReserved && (
        <div className="bg-orange-400 w-[80px] py-1 rounded-full my-2 text-white text-sm text-center">
          예약 중
        </div>
      )}

      {/* 가격 정보 */}
      <div className="border-t border-gray-300 mt-6 pt-4">
        <p className="text-lg font-bold mb-2">{item.price.toLocaleString()}원</p>
      </div>

      {/* 하트 버튼 */}
      <button
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isWishListed ? "bg-red-500 text-white" : "bg-gray-300 text-gray-500"
        }`}
        onClick={handleWishToggle}
      >
        {isWishListed ? "♥" : "♡"}
      </button>

      {/* 채팅하기 버튼 */}
      <button
        className="w-full bg-orange-500 text-white font-bold py-3 rounded mt-6"
        onClick={() => navigate(`/chat/${item.id}`, { state: item })}
      >
        채팅하기
      </button>
    </div>
  );
};

export default DetailPage;
