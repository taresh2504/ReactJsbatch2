import React from 'react'
import { useEffect } from 'react'

const Datashow = () => {
  return (
    <>
      useEffect(()=>{
        let api = 'http://localhost:3000/railway'

        axios.get(api).then((res)=>{

          console.log(res.data);

        }).catch((err)=>{

          console.log(err);

        })
      })
      
    </>
  )
}

export default Datashow
