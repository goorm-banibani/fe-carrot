import React from 'react'
import { BsChatSquareDots, BsPerson } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

const Nav = () => {
    const Items = [
        {Icon: IoHomeOutline, name: '홈', link: '/'},
        {Icon: BsChatSquareDots, name: '채팅', link: '/'},
        {Icon: BsPerson, name: '나의 당근', link: '/'},
    ]

  return (
   <div className='shadow-md flex justify-around items-center rounded-t-md bg-orange-500'>
    {Items.map(({Icon, name, link}) => (
        <button className='text-white py-2 flex flex-col items-center justify-center'>
            <Icon key={name} className='size-7' />
            <span className='text-xs pt-0.5'>{name}</span>
        </button>
    ))}
   </div>
  )
}

export default Nav
