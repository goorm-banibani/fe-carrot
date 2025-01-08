import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = () => {
  const [content, setContent] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(content)
  }

  return ( 
    <form 
      onSubmit={submitHandler}
      className='flex items-center border-2 border-slate-200 rounded-md'>
      <input 
        onChange={(e) => setContent(e.target.value)}
        className='p-2 w-full rounded-l-md outline-none'
        placeholder='찾고있는 물품 검색'
        value={content}
        type="text" />
      
     <button
        type='submit'
        className='bg-white p-2 rounded-r-md'>
            <IoSearchOutline
            className='text-2xl' />
    </button>
    </form>
  )
}

export default Searchbar
