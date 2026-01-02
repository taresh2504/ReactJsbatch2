import React from 'react'
import './Tailwind.css'

const Tailwind = () => {
    // width 1 = 4px
    // h.w = make a card by using tailwind css 
  return (
    <>
    <div className='flex justify-center items-center text-green-600 border-2 '>
      <h1 className='bg-blue-600 text-white text-4xl'>Tailwind css</h1>
      <button className='border-2 border-amber-600 rounded-2xl'>click</button>
    </div>
    </>
  )
}

export default Tailwind
