import React from 'react'
import Childcard from './Childcard'
import hillstation from './assets/hillstation.jpg'


const Propscard = () => {
    // Assignment 2 :- Create a card design by using Tailwind Css and Props
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'100px'}}>
      <Childcard image='beach.jpg' place='Prime Beach' price='4999' button='Book now'/>
      <Childcard image={hillstation} place='Hill station' price='3000' button='Book ticket'/>
    </div>
    </>
  )
}

export default Propscard
