import React from 'react'

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
    </>
  )
}

export default Child





