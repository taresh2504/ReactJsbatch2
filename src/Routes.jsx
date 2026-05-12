import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Quiz from './Quiz'
import Signup from './Signup'
import Login2 from './Login2'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Home from './Home'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Quiz />}>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login2' element={<Login2 />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
