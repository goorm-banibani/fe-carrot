import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Nav from '../../components/Nav';

const MyPage: React.FC = () => {
  const { name } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      alert('로그인이 필요합니다!');
      navigate('/login'); // 로그인하지 않았으면 로그인 페이지로 이동
    }
  }, [name, navigate]);

  return (
    <div className="profile-page flex flex-col min-h-screen">
      {/* 상단 프로필 영역 */}
      <div className="flex-grow p-6">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">나의 당근</h1>
        <p className="text-3xl text-lg mb-8">{name ? `${name}님!` : '이름이 없습니다.'}</p>

        {/* 관심목록, 판매내역, 구매내역 리스트 */}
        <div className="space-y-4">
          <div
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow cursor-pointer"
            onClick={() => navigate('/wishlist')}
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl">❤️</span>
              <span className="text-lg font-medium">관심목록</span>
            </div>
            <span className="text-gray-400">{'>'}</span>
          </div>

          <div
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow cursor-pointer"
            onClick={() => navigate('/sales')}
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl">📑</span>
              <span className="text-lg font-medium">판매내역</span>
            </div>
            <span className="text-gray-400">{'>'}</span>
          </div>

          <div
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow cursor-pointer"
            onClick={() => navigate('/purchases')}
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl">🛍️</span>
              <span className="text-lg font-medium">구매내역</span>
            </div>
            <span className="text-gray-400">{'>'}</span>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 바 */}
      <Nav />
    </div>
  );
};

export default MyPage;
