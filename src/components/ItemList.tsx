import React from "react";
import { useNavigate } from "react-router-dom";

// Item 타입 정의
type Item = {
  id: number;
  title: string;
  price: number;
  location: string;
  imageUrl?: string; // 선택적 프로퍼티
  isReserved?: boolean; // 선택적 프로퍼티
  description?: string; // 선택적 프로퍼티
};

// props 타입 정의
interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pb-5">
      {items.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
          onClick={() =>
            navigate(`/details/${item.id}`, {
              state: item, // 아이템 데이터를 상태로 전달
            })
          }
        >
          <div className="flex py-4 items-center">
            <div className="px-10 rounded-md">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} className="rounded-md w-20 h-20" />
              ) : (
                <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">
                  이미지 없음
                </div>
              )}
            </div>
            <div className="flex flex-col p-5">
              <span>{item.title}</span>
              <span className="text-sm text-gray-500">{item.location}</span>
              {item.isReserved && (
                <div className="bg-orange-400 w-[60px] py-1 rounded-full my-2 text-white text-sm text-center">
                  예약 중
                </div>
              )}
              <span className="font-bold">{item.price.toLocaleString()}원</span>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
