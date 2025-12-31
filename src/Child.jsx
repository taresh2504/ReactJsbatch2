import React from 'react'
import img1 from './assets/react.svg'

const Child = ({myname,age,city}) => {
    // console.log(props)
    // let {myname,age,city} = props //destructuring
  return (
    <>
      <h1>This is child Page</h1>
      {/* <h2>my name is {props.myname}</h2>
      <h2>my age is {props.age}</h2>
      <h2>my city is {props.city}</h2> */}
      <h2>{myname}{age}{city}</h2>
      <div style={{border:1,borderStyle:'solid',borderColor:'black',height:400,width:250}}>
        <img src={img1} style={{height:170,width:200,marginLeft:20,marginTop:20}} />
        <hr />
        <div style={{marginLeft:80}}>
          Price = 999 <br /><br />
          React-logo
        </div>
        <br />
        <button style={{marginLeft:95}}>
          Buy
        </button>
      </div>
      <div id='card'>
        <img src="" alt="" />
        <h2>Price</h2>
        <h2></h2>
        <button>Buy</button>
      </div>
    </>
  )
}

export default Child





