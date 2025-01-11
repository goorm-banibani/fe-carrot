// src/context/UserContext.tsx
import React, { createContext, useState, useContext } from 'react';

// UserContext 타입 정의
interface UserContextType {
  name: string;
  setName: (name: string) => void;
}

// UserContext 생성
const UserContext = createContext<UserContextType | undefined>(undefined);

// Context Provider 생성
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>(''); // 사용자 이름 상태

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

// Context 사용을 위한 커스텀 훅
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
