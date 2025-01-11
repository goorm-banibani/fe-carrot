import React from 'react';
import { BsChatSquareDots, BsPerson } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const Items = [
    { Icon: IoHomeOutline, name: '홈', link: '/main' },
    { Icon: BsChatSquareDots, name: '채팅', link: '/chat' },
    { Icon: BsPerson, name: '나의 당근', link: '/profile' },
  ];

  return (
    <div className="sticky bottom-0 bg-orange-500 text-white py-3 rounded-t-md">
      <div className="flex justify-around">
        {Items.map(({ Icon, name, link }) => (
          <button 
            key={name}
            className="flex flex-col items-center justify-center text-white mx-auto"
            onClick={() => navigate(link)} // React Router로 이동
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs pt-0.5">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nav;
