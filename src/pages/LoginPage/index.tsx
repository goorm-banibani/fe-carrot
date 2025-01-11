import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Layout from '../../components/AuthLayout';
import Input from '../../components/AuthInput';
import Button from '../../components/AuthButton';
import { login } from '../../api/api';

const LoginPage: React.FC = () => {
  const [identifier, setIdentifier] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

  const navigate = useNavigate();

  const handleLogin = async () => {
    // 입력값 검증
    if (!identifier || !password) {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      // API 호출
      const response = await login(identifier, password);
      console.log('로그인 성공:', response);
      alert('로그인에 성공했습니다!');
      navigate('/'); // 메인 페이지로 이동
    } catch (error: any) {
      console.error('로그인 실패:', error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || '로그인 중 문제가 발생했습니다. 다시 시도해주세요.'
      );
    }
  };

  return (
    <Layout>
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
          e.preventDefault();
          handleLogin();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
            아이디
          </label>
          <Input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            비밀번호
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <Button label="로그인" onClick={handleLogin} type="submit" />
      </form>

      <div className="text-center mt-4">
        <Link to="/signup" className="text-gray-500 hover:text-gray-600">
          회원가입
        </Link>
      </div>
    </Layout>
  );
};

export default LoginPage;
