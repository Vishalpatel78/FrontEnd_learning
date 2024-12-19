import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {

  const data = [
    {image:"https://images.unsplash.com/photo-1530419248307-be80b9468e77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Ranjhna",artist:"AR Rehman", added:false},
    {image:"https://plus.unsplash.com/premium_photo-1681182425439-a94cbb2435ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Tum hi ho ",artist:"Arijit singh", added:false},
    {image:"https://plus.unsplash.com/premium_photo-1681074651975-f036fb8b3db9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Disco Dancer",artist:"Honey singh", added:false},
    {image:"https://images.unsplash.com/photo-1615591415377-566e450cd564?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Old School",artist:"KK", added:true},
  ]

  const [songData,setSongData] = useState(data)

  const handleClick = (index) => {
    setSongData((prev)=>{
         return prev.map((item, itemIndex) => {
    if(itemIndex === index){
     return {...item, added:!item.added}
     } else {
    return item;
  }
         }) 
     })
  };

  return (
    <div className='w-full h-screen bg-slate-200'>
      <Navbar data={songData} /> 
      <div className='flex flex-wrap mt-10 px-20 gap-10'> 
        {songData.map((item,index)=>{
          return <Card key={index} image={item.image} song={item.song} artist={item.artist} added={item.added} handleClick={handleClick} index={index}    />
        })}
      </div>
      

    </div>
  )
}

export default App