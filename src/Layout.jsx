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
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/Services'>Services</Link></li>
        </ul>
      </nav>

    {/* component will render here matlab ki home,about etc pages ki information yahaa dikhegi outlet me */}
    <Outlet/>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout
