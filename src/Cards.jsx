import React from 'react'
import './Tailwind.css'

const Cards = ({img}) => {
  return (
    <>
      <div className=' border-2 h-59 w-60 border-black rounded-2xl'>
        <img src={img} className='rounded-t-2xl rounded-b-2xl h-58.5 ' alt="" />
      </div>
    </>
  )
}

export default Cards
