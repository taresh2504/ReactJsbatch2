import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Formvalidation = () => {

  let navigate = useNavigate()

    let handlechange=(e)=>{
        setform({...form, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    let [form,setform] = useState({
        myname:'',
        myage:'',
        mycity:'',
        mycontact:'',
        myemail:'',
        mypassword:'',
        mycpassword:''
    })

    let handlesubmit=(e)=>{
        e.preventDefault() //Prevent form refresh 

        let valid = true

        if (form.myname.trim()==''){
            alert('please fill your name')
            valid = false
        }
        else if (form.myage.trim()==''){
            alert('fill your age')
            valid = false
        }
        else if(isNaN(form.myage)){
          alert('please enter age in numbers')
          valid = false
        }
        else if (form.mycity.trim()==''){
          alert('please enter city name')
          valid = false
        }
        else if (form.mycontact.trim()==''){
          alert('please fill contact number')
          valid = false
        }
        else if (isNaN(form.mycontact)||form.mycontact.length<10||form.mycontact.length>10){
          alert('please enter 10 digit number')
          valid = false
        }
        else if (form.myemail.trim()==''){
          alert('please enter email')
          valid = false
        }
        else if (!(form.myemail.includes('@gmail.com'||'@yahoo.com'||'@outlook.com'))){
          alert('please enter valid email')
          valid = false
        }
        else if (form.mypassword.trim()==''){
          alert('please enter your password')
          valid = false
        }
        else if (!(form.mypassword.match(/[!@#$%^&*]/))){
          alert('password must contain 1 special character')
          valid = false
        }
        else if (!(form.mypassword.match(/[A-Z]/))){
          alert('password must contain one capital letter')
          valid = false
        }
        else if (!(form.mypassword.match(/[a-z]/))){
          alert('password must contain one small letter')
          valid = false
        }
        else if (!(form.mypassword.match(/[0-9]/))){
          alert('password must contain one number')
          valid = false
        }
        else if (form.mypassword.length < 8 || form.mypassword.length > 15){
          alert('Password must be between 8 and 15 characters only')
          valid = false
        }
        else if (form.mycpassword.trim()==''){
          alert('please enter your cpassword')
          valid = false
        }
        else if (!((form.mypassword)==(form.mycpassword))){
          alert('password and cpassword must be same')
          valid = false
        }

        if (valid){
          let users = JSON.parse(localStorage.getItem('users')) || []
          let alreadyuser = users.find((e)=>{
            return e.email == form.myemail 
          })

          if (alreadyuser){
            alert('Already a user')
            navigate('/Login')
            return
          }

          users.push(form)
          localStorage.setItem('users',JSON.stringify(users))
          alert('signup success')
          
          navigate('/Login')

        }
    }
  return (
    <>
      <h1>Form validation</h1> <br /><br />
      <form action="" onSubmit={handlesubmit}>

        Enter name : <input type="text" name="myname" value={form.myname} onChange={handlechange} id="" /> <br /><br />
        Enter age : <input type="text" name="myage" value={form.myage} onChange={handlechange} id="" /> <br /><br />
        Enter city : <input type="text" name="mycity" value={form.mycity} onChange={handlechange} id="" /> <br /><br />
        Enter contact : <input type="text" name="mycontact" value={form.mycontact} onChange={handlechange} id="" /> <br /><br />
        Enter email : <input type="text" name="myemail" value={form.myemail} onChange={handlechange} id="" /> <br /><br />
        Enter password : <input type="text" name="mypassword" value={form.mypassword} onChange={handlechange} id="" /> <br /><br />
        Enter cpassword : <input type="text" name="mycpassword" value={form.mycpassword} onChange={handlechange} id="" /> <br /><br />
        <button type='submit'>Sign-Up</button>
      </form>
    </>
  )
}

export default Formvalidation



