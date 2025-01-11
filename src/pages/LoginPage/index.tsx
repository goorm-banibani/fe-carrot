import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/AuthLayout'; 
import Input from '../../components/AuthInput'; 
import Button from '../../components/AuthButton'; 
import { login, getUserInfo } from '../../api/api'; // API 호출 함수 가져오기
import { useUser } from '../../context/UserContext'; // UserContext 가져오기

const LoginPage: React.FC = () => {
  // 사용자 입력 상태 관리
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { setName } = useUser(); // UserContext의 setName 함수로 사용자 이름 저장
  const navigate = useNavigate();

  // 로그인 버튼 클릭 시 실행
  const handleLogin = async () => {
    // 입력값 검증
    if (!identifier || !password) {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
        //API 호출
      const response = await login(identifier, password);
      console.log('로그인 성공:', response);

      // 사용자 정보 가져오기
      const userInfo = await getUserInfo(identifier); 
      console.log('사용자 정보:', userInfo);

      // UserContext에 사용자 이름 저장
      if (userInfo?.name) {
        setName(userInfo.name); 
      }

      alert('로그인에 성공했습니다!');
      // 로그인 성공 시 메인 페이지로 이동
      navigate('/main'); 
    } catch (error: any) {
      // 로그인 실패 시 오류 처리
      console.error('로그인 실패:', error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || '로그인 중 문제가 발생했습니다. 다시 시도해주세요.'
      );
    }
  };

  return (
    <Layout>
      {/* 오류 메시지 표시 */}
      {errorMessage && (
        <div className="text-white-500 bg-red-100 p-3 text-center rounded mb-4">
          {errorMessage}
        </div>
      )}

      <section className="flex flex-col p-5 gap-4 sticky top-0 bg-white justify-center items-center">
        <img src="logo.svg" className="w-28 mb-2" />
        <h1 className="text-xl font-bold text-orange-500">Login</h1>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // 페이지 새로고침 방지
          handleLogin(); // 로그인 실행
        }}
        className="space-y-4"
      >
        {/* 아이디 입력 */}
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
            아이디
          </label>
          <Input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)} // 아이디 상태 업데이트
            placeholder="아이디를 입력하세요"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            비밀번호
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        
        {/* 로그인 버튼 */}
        <Button label="로그인" onClick={handleLogin} type="submit" />
      </form>

      {/* 회원가입 링크 */}
      <div className="text-center mt-4">
        <Link to="/signup" className="text-gray-500 hover:text-gray-600">
          회원가입
        </Link>
      </div>
    </Layout>
  );
};

export default LoginPage;
