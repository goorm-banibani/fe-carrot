import React from 'react'

const Header = () => {
    const Items = [
        {name: 'chat-icon.svg', link: '/'},
        {name: 'mypage-icon.svg', link: '/'},
        {name: 'logout-icon.svg', link: '/'},
    ]

  return (
    <div className='bg-slate-500 flex justify-between items-center p-5'>
        <img src='logo.svg' className='w-24' />
        <div className='flex gap-2'>
            {Items.map(({name, link}) => (
                <button key={name} className='size-7'>
                    <img src={name} alt={name} />
                </button>
            ))}
        </div>
       
    </div>
  )
}

export default Header
