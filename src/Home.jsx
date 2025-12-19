import React from "react"
// Default export example:-
let Home = ()=>{
    let name = 'Taresh'
    let mydetails = {
        name:'Taresh Tandy',
        age:'20',
        city:'bhopal'
    }
    return(
        <>
        <h1 id="ok">This is my home page</h1>
        <h2>my name is {name} </h2>
        <h3>my information are as follows {mydetails.name}</h3>
        <h3>{mydetails.age}</h3>
        <h3>{mydetails.city}</h3>
        </>
    )
}

export default Home