import React, { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, type = 'text', placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-orange-500 rounded focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default Input;
