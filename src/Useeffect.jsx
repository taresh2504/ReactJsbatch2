import React from 'react'
import { useEffect,useState } from 'react'
// dependency array ki vajah se useeffect sirf 1 baar chalta unless and until jab ham kuch chedte nhi h 
// use effect k 2 parameter dete h  
const Useeffect = () => {

  let [count,setcount] = useState(0)

  let add = ()=>{
    setcount(count+1)
  }

  useEffect(()=>{

    console.log('Running')

  }, [] )
  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
    </>
  )
}

export default Useeffect
