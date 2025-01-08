// src/api/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-endpoint.comhttps://04ef-222-232-44-239.ngrok-free.app/articles',
  headers: {
    'Content-Type': `application/json`,
    'ngrok-skip-browser-warning': 'true',
  },
  timeout: 5000,
});

// 로그인 요청 함수
export const login = async (id: string, password: string) => {
    const response = await apiClient.post('/login', { id, password });
    return response.data;
  };
  
  // 회원가입 요청 함수
  export const signup = async (name: string, id: string, password: string) => {
    const response = await apiClient.post('/signup', { name, id, password });
    return response.data;
  };
  
  export default apiClient;