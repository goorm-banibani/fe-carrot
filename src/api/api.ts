// src/api/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://50b4-222-232-44-239.ngrok-free.app', // 백엔드에서 제공한 ngrok 주소
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '1', // ngrok 경고 무시 헤더
  },
});

// 회원가입 API 호출 함수
export const signup = async (name: string, identifier: string, password: string) => {
  try {
    const response = await apiClient.post('/user/create', {
      name,
      identifier,
      password,
    });
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw error; // 에러를 호출부로 전달
  }
};


export const login = async (identifier: string, password: string) => {
  const response = await apiClient.post('/user/login', { identifier, password });
  return response.data;
};
