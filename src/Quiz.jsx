import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Cards from './Cards'

const Quiz = () => {
  return (
    <div className='bg-blue-400 min-h-screen'>


      <div className='bg-purple-700 p-4'>
        <h1 className='text-center text-4xl font-serif text-white'>
          React Quiz
        </h1>

        <nav>
          <ul className='flex justify-center gap-8 mt-3 font-black'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/services'>Services</Link></li>
          </ul>
        </nav>

        <div className='flex justify-end gap-3 mt-3'>
          <Link to='/signup'><p className='border-2 border-black font-serif bg-red-600 text-center rounded-2xl h-8 w-20 -mt-10'>Sign up</p></Link>
          <Link to='/login2'><p className='border-2 border-black font-serif bg-red-600 text-center rounded-2xl h-8 w-20 -mt-10'>Login</p></Link>
        </div>
      </div>

      
      <div className='p-6'>
        <Outlet />
      </div>

      
      <div className='p-6'>
        <h1 className='text-center text-2xl'>Select Categories</h1>

        <div className='flex justify-center gap-6 mt-6'>
          <Cards img="arts.jpg" />
          <Cards img="english.jpg" />
          <Cards img="python.jpg" />
          <Cards img="science.jpg" />
        </div>

        <br />


        <div className='flex justify-center gap-6 mt-6'>
          <Cards img="geography.jpg" />
          <Cards img="java.jpg" />
          <Cards img="history.jpg" />
          <Cards img="java.jpg" />
        </div>
      </div>

    </div>
  )
}

export default Quiz
