import React from 'react'
import { useState } from 'react'

const Hook2 = () => {
    let [dark,setdark] = useState(false)
    
    let [show,setshow]=useState(false)
  return (
    <>
      <h1 style={{backgroundColor:dark?"black":"white", color:dark?"white":"black"}}>{dark?"Dark mode":"Light Mode"}</h1>

      <button onClick={()=>{setdark (!dark)}}>{dark?"light mode":"dark mode"}</button>

      {show&&(<h1>Hello</h1>)} 

      <button onClick={()=>{setshow(!show)}}> show text</button>
    </>
  )
}

export default Hook2
