import React from 'react'
import Items from '../mock/Item.json';

type Items = {
  id: number,
  date: string,
  title: string,
  price: number,
  description: string,
  traded: string
}


// const ItemList = ({ items }: {item: Items}) => { 
//   console.log(items);

//   return (
//   <>
// <div className='flex flex-col pb-5'>
//       {items.map(({
//         id,
//         date,
//         title,
//         price,
//         description,
//         traded,
//         writedId,
//       }) => (
//         <>
//         <div key={id} className='flex py-4 items-center'>
//             <div  className='px-10 rounded-md'>
//             {/* <img src={imageUrl} className='rounded-md'/> */}
//             </div>
//             <div className='flex flex-col p-5'>
//                 <span>{title}</span>
//                 <span className='text-sm text-gray-500'>{date}</span>
//                 <span className='text-sm text-gray-500'>{description}</span>
//                 {traded && (
//                 <div
//                   className='bg-orange-400 w-[60px] py-1 rounded-full my-2 text-white text-sm text-center'>예약 중</div>
//               )}
//                 <span className='font-bold'>{price}원</span>
           
//             </div>
//         </div>
//         <hr />
//         </>
//       ))}
//     </div>

const ItemList = ({items}) => { 
  return (
    <>
      <div className="flex flex-col pb-5">
        {items.map(({
          id,
          title,
          price,
          location,
          imageUrl,
          isReserved,
        }) => (
          <div key={id}> {/* Ensure the key is directly on the root element */}
            <div className="flex py-4 items-center">
              <div className="px-10 rounded-md">
                <img src={imageUrl} alt={title} className="rounded-md" />
              </div>
              <div className="flex flex-col p-5">
                <span>{title}</span>
                <span className="text-sm text-gray-500">{location}</span>
                {isReserved && (
                  <div className="bg-orange-400 w-[60px] py-1 rounded-full my-2 text-white text-sm text-center">
                    예약 중
                  </div>
                )}
                <span className="font-bold">{price}원</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
