import React from "react"

let Navbar = ()=>{
    // sm = 640px-768px Tablet
    // md = 768px-1024px laptop
    // lg = 1024-1300px 
    let mesage = ()=>{
        return(
            alert('download button pressed')
        )
    }

    let fruits = ['apple','mango','banana','grapes']
    return(
        <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
        <div>
            <button onClick={mesage}>Download</button>
        </div>
        <div>
            <ul>
            {
                fruits.map((e,i)=>(
                    
                        <li key={i}>{e}</li>
                    
                ))
            }
            </ul>
        </div>

        </>
    )
}

export default Navbar


