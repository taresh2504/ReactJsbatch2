import React from 'react'
import logo from './assets/react.svg'

// Create a Navbar with css and left side with image logo


const Assignment1 = () => {
  return (
    <>
    <div style={{border:1, borderStyle:'solid',borderColor:'black',height:50}}>
        <img src={logo} style={{marginTop:10,marginLeft:10}} alt="" />
        <div>
            <ul style={{display:'flex',justifyContent:'center',alignItems:'center',gap:70,listStyle:'none',marginTop:-30}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Assignment1
