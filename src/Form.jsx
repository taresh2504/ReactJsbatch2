import React, { useState } from 'react'
// value me apne usestate ka naam likhte h.taaki controlled component ban sake react ka control le paaaye. 
const Form = () => {

    let [name,setname] = useState('')
    let handlechange = (e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }

    let [age,setage] = useState('')
    let handleage = (a)=>{
        console.log(a.target.value)
        setage(a.target.value)
    }

    let [city,setcity] = useState('')
    let handlecity = (c)=>{
        console.log(c.target.value)
        setcity(c.target.value)
    }

    let [mail,setmail] = useState('')
    


  return (
    <>
    <h2>Form Handling</h2>
      <label htmlFor="">Enter name</label>
      <input type="text" name="" id="" onChange={handlechange} />
      <br />
      <h1>{name}</h1>

      <label htmlFor="">Age</label>
      <input type="text" name="" id="" onChange={handleage} />
      <h1>{age}</h1>

      <label htmlFor="">City</label>
      <input type="text" name="" id="" onChange={handlecity} />
      <h1>{city}</h1>

      <label htmlFor="">Email</label>
      <input type="text" name="" id="" onChange={(m)=>{setmail(m.target.value)}} />
      <h1>{mail}</h1>
    </>
  )
}

export default Form
