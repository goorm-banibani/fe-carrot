// src/pages/SignupPage.tsx
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    id: '',
    password: '',
  });

  const handleSignup = () => {
    const newErrors = {
      name: name ? '' : '이름을 입력해주세요.',
      id: id ? '' : '아이디를 입력해주세요.',
      password: password ? '' : '비밀번호를 입력해주세요.',
    };

    setErrors(newErrors);

    // 에러가 하나라도 있으면 회원가입 진행하지 않음
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // TODO: 회원가입 API 호출 로직 추가
    console.log('Signup attempt:', { name, id, password });
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <Layout>
      <section className="flex flex-col p-5 gap-4 sticky top-0 bg-white justify-center items-center">
        <img src="logo.svg" className="w-28 mb-2" />
        <h1 className="text-xl font-bold text-orange-500">Signup</h1>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            이름
          </label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            아이디
          </label>
          <Input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          {errors.id && <p className="text-red-500 text-sm mt-1">{errors.id}</p>}
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
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <Button label="회원가입" onClick={handleSignup} type="submit" />
      </form>
    </Layout>
  );
};

export default SignupPage;
