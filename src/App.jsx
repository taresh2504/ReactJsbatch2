import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { Num,Value } from "./Export";
import './App.css'


let App = ()=>{

  // javascript 

  return(
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      <Num/>
      <Value/>
    </>
  )

}


export default App