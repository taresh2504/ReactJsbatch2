import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Login2 = () => {
  let navigate = useNavigate()

  let [pass, setpass] = useState('')
  let [email, setemail] = useState('')

  let handlesubmit = (e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users')) || []

    let existuser = users.find((e) => {
      return e.myemail == email
    })

    if (!existuser) {
      alert('please signup first')
      return
    }

    if (pass != existuser.mypassword) {
      alert('invalid Password')
      return
    }

    localStorage.setItem('username', email)
    alert('Login success')
    navigate('/home')
  }

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handlesubmit}>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
          />

          <p>Password</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login2
