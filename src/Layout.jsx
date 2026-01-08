import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Footer from './Footer'


const Layout = () => {
  return (
    <>
    <h1>This is Layout page</h1>
    <h2>LOGO</h2>
      <nav>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/services'>Services</Link></li>
        </ul>
      </nav>

    {/* component will render here matlab ki home,about etc pages ki information yahaa dikhegi */}
      <Outlet/>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout
