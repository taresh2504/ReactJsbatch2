import React from 'react'
import UserContext from './Context'
import { useContext } from 'react'

const MainChild = () => {
    let {mydata,course,institute} = useContext(UserContext)

  return (
    <>
      <h1>MainChild starts here</h1>
      <br />
      my name is {mydata.name}
      <br />
      currently i m studying in {institute}
      <br />
      and persuing {course}

    </>
  )
}

export default MainChild
