import React from 'react'
import Items from '../mock/Item.json';

const ItemList = () => {
  return (
    <div className='flex flex-col gap-3'>
      {Items.map(({id, title, price, location, imageUrl}) => (
        <div key={id} className='bg-slate-100 flex p-2'>
            {/* <img src={imageUrl} className='px-10 rounded-md' /> */}
            <div className='flex flex-col p-5'>
                <span>{title}</span>
                <span className='text-sm text-gray-500'>{location}</span>
                <span className='font-bold'>{price}원</span>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
