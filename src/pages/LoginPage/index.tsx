import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Input from '../../components/AuthInput';
import Button from '../../components/AuthButton';

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: 로그인 처리
    if (id !== 'correctId' || password !== 'correctPassword') {
      // 로그인 실패 시 경고문
      setErrorMessage('아이디나 비밀번호가 잘못 되었습니다.');
    } else {
      // 로그인 성공 시 메인 페이지로 이동
      navigate('/');
      console.log('login success');
    }
    console.log('Login attempt:', { id, password });
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
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                아이디
            </label>
          <Input
            type="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
