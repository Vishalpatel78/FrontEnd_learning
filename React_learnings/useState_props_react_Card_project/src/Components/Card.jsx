import React from 'react'

const Card = ({image,song,artist,added,handleClick,index}) => {
  return (
    <div className='w-60 bg-zinc-100 rounded-md flex gap-4 p-4 pb-8 relative mt-10'>
      <div className='w-20 h-20 bg-orange-600 rounded-md'> 
        <img className='h-full w-full object-cover overflow-hidden rounded-md' src={image} alt="" srcset="" />
      </div>
      <div className=''>
        <h3 className='text-xl font-semibold leading-non'>{song}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-700" } absolute bottom-0 text-white text-xs rounded-full translate-y-[50%] -translate-x-[50%] left-1/2 `}> {added === false ? "Add To Favourites" : "Added"}</button>
    </div>
  )
}

export default Card