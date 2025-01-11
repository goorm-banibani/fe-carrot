import React, { useState } from 'react';
import Layout from '../../components/AuthLayout';
import Input from '../../components/AuthInput';
import Button from '../../components/AuthButton';
import { signup } from '../../api/api';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    identifier: '',
    password: '',
  });

  const handleSignup = async () => {
    // 입력 값 검증
    const newErrors = {
      name: name ? '' : '이름을 입력해주세요.',
      identifier: identifier ? '' : '아이디를 입력해주세요.',
      password: password ? '' : '비밀번호를 입력해주세요.',
    };

    setErrors(newErrors);

    // 에러가 있으면 요청을 보내지 않음
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    try {
      // API 호출
      const response = await signup(name, identifier, password); // API에 입력된 값 전달
      console.log('회원가입 성공:', response);
      alert('회원가입이 완료되었습니다!');
    } catch (error: any) {
      console.error('회원가입 실패:', error.message || error);
      alert('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
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
        {/* 이름 입력 */}
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

        {/* 아이디 입력 */}
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
          {errors.identifier && (
            <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>
          )}
        </div>

        {/* 비밀번호 입력 */}
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

        {/* 회원가입 버튼 */}
        <Button label="회원가입" onClick={handleSignup} type="submit" />
      </form>
    </Layout>
  ); 
};

export default SignupPage;
