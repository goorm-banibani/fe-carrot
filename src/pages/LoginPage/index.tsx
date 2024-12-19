import React, { useState } from 'react';
import { FaCarrot } from 'react-icons/fa';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    // TODO: 로그인 처리
    if(id !== 'correctId' || password !== 'correctPassword') {
        setErrorMessage('아이디나 비밀번호가 잘못 되었습니다.');
    }
    else {
        //로그인 성공 시 메인 페이지로 이동
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

        <div className="flex items-center justify-center space-x-2 mb-8">
        <FaCarrot className="text-orange-500 w-8 h-8" />
        <h1 className="text-2xl font-bold text-center text-orange-500">바니바니</h1>
        </div>
        
        <form
            onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
            }}
            className="space-y-4"
        >
            <div>
                <Input
                    type="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디를 입력하세요"
                />
            </div>
            <div>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                />
            </div>
            <Button label="로그인" onClick={handleLogin} type="submit" />
        </form>
    </Layout>
  );
};

export default LoginPage;
