import React from 'react'
import './Tailwind.css'


const Card = () => {
  // Create a card design by using Tailwind Css and Props in static way
  return (
    <>
    <div className='border-2 border-b-black h-96 w-64 rounded-2xl bg-purple-400 ml-96'>
      <img src="beach.jpg" className='h-48 rounded-tl-2xl rounded-tr-2xl' />
      <div className='flex flex-col gap-2 justify-center items-center mt-10 font-serif font-bold bg-purple-400'>
      <p>Prime Beach</p>
      <p>Price 4999</p>
      <button className='border-2 rounded-2xl text-2xl bg-red-400 font-normal mt-2 text-black'>Book now</button>
      </div>
    </div>
    </>
  )
}

export default Card
