import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state; // 전달된 게시물 데이터

  const [title, setTitle] = useState(item?.title || "");
  const [price, setPrice] = useState(item?.price?.toString() || "");
  const [description, setDescription] = useState(item?.description || "");
  const [locationValue, setLocationValue] = useState(item?.location || "");
  const [image, setImage] = useState<File | null>(null); // 새로 업로드된 이미지를 저장

  // 기존 이미지 URL을 상태로 관리 (새 이미지가 없으면 사용)
  const [existingImageUrl, setExistingImageUrl] = useState(item?.imageUrl || null);

  useEffect(() => {
    if (!item) {
      alert("잘못된 접근입니다.");
      navigate("/sales"); // 게시물이 없으면 판매내역으로 이동
    }
  }, [item, navigate]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 선택된 파일
    if (file) {
      setImage(file); // 이미지 저장
      setExistingImageUrl(null); // 새 이미지를 업로드하면 기존 이미지는 제거
    }
  };

  const handleUpdateSubmit = () => {
    // 필수 입력값 검증
    if (!title || !price || !description || !locationValue) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 수정된 게시물 객체 생성
    const updatedPost = {
      ...item,
      title,
      price: parseInt(price, 10),
      description,
      location: locationValue,
      imageUrl: image ? URL.createObjectURL(image) : existingImageUrl, // 새 이미지 URL 또는 기존 이미지
    };

    // 로컬스토리지에서 판매내역 업데이트
    const sales = JSON.parse(localStorage.getItem("sales") || "[]");
    const updatedSales = sales.map((sale: any) =>
      sale.id === item.id ? updatedPost : sale
    );
    localStorage.setItem("sales", JSON.stringify(updatedSales));

    alert("게시물이 수정되었습니다.");
    navigate("/sales"); // 수정 완료 후 판매내역 페이지로 이동
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 헤더 */}
      <div className="flex items-center mb-6">
        <button className="text-2xl text-gray-600" onClick={() => navigate(-1)}>
          &lt;
        </button>
        <h1 className="text-xl font-bold ml-4">게시물 수정</h1>
      </div>

      {/* 이미지 업로드 */}
      <div className="mb-6">
        <label
          htmlFor="image-upload"
          className="flex items-center justify-center bg-gray-200 w-24 h-24 rounded-lg cursor-pointer"
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)} // 새 이미지 미리보기
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : existingImageUrl ? (
            <img
              src={existingImageUrl} // 기존 이미지
              alt="Existing"
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
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
          placeholder="장소를 입력하세요"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* 수정 완료 버튼 */}
      <button
        onClick={handleUpdateSubmit}
        className="w-full bg-orange-500 text-white font-bold py-3 rounded"
      >
        수정 완료
      </button>
    </div>
  );
};

export default EditPage;
