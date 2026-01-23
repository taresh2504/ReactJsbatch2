import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

// 1. get method
// 2. delete

const Datashow = () => {
  // json-server --watch db.json
  let [data,setdata] = useState([])

  let FetchData = ()=>{
    let api = 'http://localhost:3000/railway'

    axios.get(api).then((res)=>{

      console.log(res.data);

      setdata(res.data)

    }).catch((err)=>{

      console.log(err);

    })
  }

  useEffect(()=>{

    FetchData()

    },[])

    let DeleteData=(id)=>{
      
      let api = `http://localhost:3000/railway/${id}`

      axios.delete(api).then(()=>{
        FetchData()

        alert("data deleted")
      })
    }

        let api = 'http://localhost:3000/railway'

        axios.get(api).then((res)=>{

          console.log(res.data);
          setdata(res.data)

        }).catch( (err)=>{

          console.log(err);

        })
      })
  return (
    <>
    <table border={1}>
      <thead>
        <tr>
          <th>name</th>
          <th>number</th>
          <th>aadharno</th>
          <th>age</th>
          <th>checkin</th>
          <th>checkout</th>
          <th>people</th>
        </tr>
      </thead>

      <tbody>
        {data.map((e)=>(
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.number}</td>
            <td>{e.aadharno}</td>
            <td>{e.age}</td>
            <td>{e.checkin}</td>
            <td>{e.checkout}</td>
            <td>{e.people}</td>
          </tr>
        ))}
      </tbody>


    </table>
    </>
  )
}

export default Datashow
