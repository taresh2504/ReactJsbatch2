import React from 'react'
import { useState } from 'react'

const Formvalidation = () => {
    let handlechange=(e)=>{
        setform({...form, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    let [form,setform] = useState({
        myname:'',
        myage:'',
        mycity:'',
        myemail:'',
        mypassword:'',
        mycpassword:''
    })

    let handlesubmit=(e)=>{
        e.preventDefault() //Prevent form refresh 

        if (form.myname.trim()==''){
            alert('please fill your name')
        }
        else if (form.myage.trim()=''){
            alert('fill your age')
        }
        else if(isNaN(form.myage))
    }
  return (
    <>
      <h1>Form validation</h1> <br /><br />
      <form action="" onSubmit={handlesubmit}>

        Enter name : <input type="text" name="myname" value={form.myname} onChange={handlechange} id="" /> <br /><br />
        Enter age : <input type="text" name="myage" value={form.myage} onChange={handlechange} id="" /> <br /><br />
        Enter city : <input type="text" name="mycity" value={form.mycity} onChange={handlechange} id="" /> <br /><br />
        Enter email : <input type="text" name="myemail" value={form.myemail} onChange={handlechange} id="" /> <br /><br />
        Enter password : <input type="text" name="mypassword" value={form.mypassword} onChange={handlechange} id="" /> <br /><br />
        Enter cpassword : <input type="text" name="mycpassword" value={form.mycpassword} onChange={handlechange} id="" /> <br /><br />
        <button type='submit'>Sign-Up</button>
      </form>
    </>
  )
}

export default Formvalidation
