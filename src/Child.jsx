import React from 'react'
import img1 from './assets/react.svg'

const Child = ({myimg,mydes,myprice,data}) => {
    // console.log(props)
    // let {myname,age,city} = props //destructuring
  return (
    <>
      {/* <h1>This is child Page</h1> */}
      {/* <h2>my name is {props.myname}</h2>
      <h2>my age is {props.age}</h2>
      <h2>my city is {props.city}</h2> */}
      {/* <h2>{myname}{age}{city}</h2> */}
      {/* Static card */}
      {/* <div style={{border:1,borderStyle:'solid',borderColor:'black',height:400,width:250}}>
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
      </div> */}
      <br />
      {/* <div id='card'>
        <img src={myimg} height='170' width='200' style={{marginLeft:20,marginTop:20}} />
        <hr />
        <h2 style={{marginLeft:70}}>Price {myprice}</h2>
        <h2 style={{marginLeft:70}}>{mydes}</h2>
        <button style={{marginLeft:90}}>Buy</button>
      </div> */}

      
      {
        data.map((e)=>(
          <div key={e.id}>
            <h2>{e.name}</h2>
            <h2>{e.price}</h2>
          </div>
        ))
      }
    </>
  )
}




export default Child

