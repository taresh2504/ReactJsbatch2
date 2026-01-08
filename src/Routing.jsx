import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

const Routing = () => {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='services' element={<Services/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default Routing
