import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full flex justify-between items-center p-4 px-20'>
      <h1 className='bg-teal-400 px-3 py-1  font-semibold rounded-md'>Orange</h1>
      <div className='flex py-1 justify-between items-center bg-orange-600 p-4 rounded-md text-white gap-2 text-sm'>
        <h1 class>Favourites</h1>
        <h1>{data.filter(item=>item.added).length}</h1>
      </div>
    </div>
  )
}

export default Navbar