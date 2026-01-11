import React from 'react'
import { useState } from 'react'

const Hook = () => {
    // keyword [variable,function] = useState(initial value)
    
    let [count,setcount] = useState(0)
    let add = ()=>{
        setcount(count+1)
    }
    let sub = ()=>{
        if (count==0){
            alert('cannot decrease below zero')
        }
        else{
            setcount(count-1)
        }
        
    }
    let reset=()=>{
        setcount(count=0)
    }
    
    console.log(count)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={sub}>subtract</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Hook
