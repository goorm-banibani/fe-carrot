import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null); // 업로드된 이미지를 저장

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 선택된 첫 번째 파일
    if (file) {
      setImage(file); // 이미지 저장
    }
  };

  const handlePostSubmit = () => {
    // 게시물 작성 검증
    if (!title || !price || !description || !location) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 작성된 게시물 객체 생성
    const newPost = {
      id: Date.now(), // 고유 ID 생성
      title,
      price: parseInt(price, 10),
      description,
      location,
      imageUrl: image ? URL.createObjectURL(image) : null, // 이미지 URL
      isReserved: false, // 초기 예약 상태
    };

    // 기존 판매내역 가져오기
    const sales = JSON.parse(localStorage.getItem("sales") || "[]");
    localStorage.setItem("sales", JSON.stringify([...sales, newPost])); // 새 게시물 추가

    alert("게시물이 작성되었습니다!");

    // 작성된 게시물의 상세페이지로 이동
    navigate(`/details/${newPost.id}`, { state: newPost });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 헤더 */}
      <div className="flex items-center mb-6">
        <button className="text-2xl text-gray-600" onClick={() => window.history.back()}>
          &lt;
        </button>
        <h1 className="text-xl font-bold ml-4">내 물건 팔기</h1>
      </div>

      {/* 이미지 업로드 */}
      <div className="mb-6">
        <label
          htmlFor="image-upload"
          className="flex items-center justify-center bg-gray-200 w-24 h-24 rounded-lg cursor-pointer"
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)} // 이미지 미리보기
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-gray-500 text-sm">+ 업로드</span>
          )}
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*" // 이미지 파일만 선택 가능
          onChange={handleImageChange}
          className="hidden" // 파일 입력창 숨김
        />
      </div>

      {/* 제목 입력 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* 가격 입력 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">가격</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="₩ 가격을 입력해주세요."
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* 상세 설명 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">자세한 설명</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="내용을 작성해주세요."
          className="w-full border border-gray-300 p-2 rounded h-24"
        />
      </div>

      {/* 거래 희망 장소 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">거래 희망 장소</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="장소를 입력하세요"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* 작성 완료 버튼 */}
      <button
        onClick={handlePostSubmit}
        className="w-full bg-orange-500 text-white font-bold py-3 rounded"
      >
        작성 완료
      </button>
    </div>
  );
};

export default WritePage;
