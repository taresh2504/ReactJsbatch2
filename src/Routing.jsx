import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

const Routing = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Services' element={<Services />} />
          <Route path='*' element={<h1>page not found</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Routing
