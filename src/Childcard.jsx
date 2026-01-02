import React from 'react'
import './Tailwind.css'

const Childcard = ({image,place,price,button}) => {
    // Assignment 2 :- Create a card design by using Tailwind Css and Props
  return (
    <>
    <div className='border-2 border-b-black h-96 w-64 rounded-2xl bg-purple-400 ml-16'>
      <img src={image} className='h-48 rounded-tl-2xl rounded-tr-2xl' alt="" />
      <div className='flex flex-col gap-2 justify-center items-center mt-10 font-serif font-bold bg-purple-400'>
        <p>{place}</p> 
        <p>{price}</p>
        <button className='border-2 rounded-2xl text-2xl bg-red-400 font-normal mt-2 text-black'>{button}</button>
      </div>
    </div>
    </>
  )
}

export default Childcard
