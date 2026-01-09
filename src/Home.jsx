import React from "react"
import img from './assets/react.svg'
import { Navigate, useNavigate } from "react-router-dom"

// Default export example:-
let Home = ()=>{
//     let name = 'Taresh'
//     let mydetails = {
//         name:'Taresh Tandy',
//         age:'20',
//         city:'bhopal'
//     }
    let Navigate = useNavigate()

    let cont =()=>{
        Navigate('/contact')
    }
    
    return(
        <>
        <h1>This is my home page</h1>
        <button onClick={cont}>go to contact</button>
        {/* <h1 id="ok">This is my home page</h1> */}
        {/* <h2>my name is {name} </h2>
        <h3>my information are as follows {mydetails.name}</h3>
        <h3>{mydetails.age}</h3>
        <h3>{mydetails.city}</h3>
        <img src={img} alt="" />
        <img src="vite.svg" alt="" /> */}

        </>
    )
}

export default Home