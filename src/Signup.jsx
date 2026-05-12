import React from 'react'
import './Tailwind.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    let navigate = useNavigate()

    let handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
    let [form, setform] = useState({
    myname: '',
    myemail: '',
    mypassword: '',
    mycpassword: ''
  })

  let handlesubmit = (e) => {
    e.preventDefault()
    let valid = true

    if (form.myname.trim() === '') {
      alert('please enter your name')
      valid = false
    }
    else if (form.myemail.trim() === '') {
      alert('please enter your email')
      valid = false
    }
    else if (
      !(form.myemail.includes('@gmail.com') ||
        form.myemail.includes('@yahoo.com') ||
        form.myemail.includes('@outlook.com'))
    ) {
      alert('please enter a valid email')
      valid = false
    }
    else if (form.mypassword.trim() === '') {
      alert('please enter your password')
      valid = false
    }
    else if (!(form.mypassword.match(/[A-Z]/))) {
      alert('password must contain one Capital Letter')
      valid = false
    }
    else if (!(form.mypassword.match(/[a-z]/))) {
      alert('password must contain one small letter')
      valid = false
    }
    else if (!(form.mypassword.match(/[0-9]/))) {
      alert('password must contain one number')
      valid = false
    }
    else if (!(form.mypassword.match(/[!@#$%&*-_.`~^/?]/))) {
      alert('password must contain one special character')
      valid = false
    }
    else if (!(form.mypassword.length >= 7 && form.mypassword.length <= 16)) {
      alert('password is greater than 7 and less than 16 digits')
      valid = false
    }
    else if (form.mycpassword.trim() === '') {
      alert('please enter your confirm password')
      valid = false
    }
    else if (form.mypassword !== form.mycpassword) {
      alert('password and confirm password are not same')
      valid = false
    }

    if (valid) {
      let users = JSON.parse(localStorage.getItem('users')) || []
      let alreadyuser = users.find((e) => e.myemail === form.myemail)

      if (alreadyuser) {
        alert('Already a user')
        navigate('/Login')
        return
      } else {
        users.push(form)
        localStorage.setItem('users', JSON.stringify(users))
        alert('signup success ✅')
        navigate('/Login')
      }
    }
  }
  return (
  <>
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      
      <div className="border-2 border-black w-96 rounded-2xl bg-white shadow-lg p-6">
        
        <h2 className="text-center text-2xl font-serif mb-4">
          Signup
        </h2>

        <form onSubmit={handlesubmit} className="space-y-3">

          <div>
            <p className="font-serif text-sm">Enter Name</p>
            <input
              type="text"
              className="border-2 border-black h-9 rounded-xl w-full px-3"
              name="myname"
              value={form.myname}
              onChange={handlechange}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <p className="font-serif text-sm">Enter Email</p>
            <input
              type="email"
              className="border-2 border-black h-9 rounded-xl w-full px-3"
              name="myemail"
              value={form.myemail}
              onChange={handlechange}
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <p className="font-serif text-sm">Enter Password</p>
            <input
              type="password"
              className="border-2 border-black h-9 rounded-xl w-full px-3"
              name="mypassword"
              value={form.mypassword}
              onChange={handlechange}
              placeholder="Enter your Password"
            />
          </div>

          <div>
            <p className="font-serif text-sm">Confirm Password</p>
            <input
              type="password"
              className="border-2 border-black h-9 rounded-xl w-full px-3"
              name="mycpassword"
              value={form.mycpassword}
              onChange={handlechange}
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="border-2 border-black h-10 w-full rounded-2xl font-serif bg-amber-300 hover:bg-amber-400 transition"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  </>
)
}

export default Signup
