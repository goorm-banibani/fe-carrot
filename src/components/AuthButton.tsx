import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void; // 버튼 클릭 시 동작
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded`}
    >
      {label}
    </button>
  );
};

export default Button;
