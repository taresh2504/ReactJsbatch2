import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    let navigate = useNavigate()

    let [pass,setpass] = useState('')
    let [email,setemail] = useState('')

    let handlesubmit =(e)=>{
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem('users')) || []

        let existuser = users.find((e)=>{
            return e.email == email
        })

        if(!existuser){
            alert('please signup first')
            return
        }

        if(pass != existuser.pass){
            alert('invalid Password')
            return
        }

        localStorage.setItem('username',email)

        alert('Login succes')
        navigate('/home')

    }
  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        Enter email: <input type="text" name="" value={email} onChange={(e)=>{setemail(e.target.value)}} id="" />
        Enter email: <input type="text" name="" value={pass} onChange={(e)=>{setpass(e.target.value)}} id="" />
        
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
