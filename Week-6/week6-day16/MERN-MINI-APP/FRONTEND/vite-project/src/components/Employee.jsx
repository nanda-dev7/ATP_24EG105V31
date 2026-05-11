import React from 'react'
import {useLocation} from 'react-router-dom'

function Employee() {

const {state}=useLocation();
// read state received in navigation
  return (

    <div className="p-16 text-center text-3xl justify-around bg-green-500">
      <p className="text-4xl bg-amber-300 p-5 m-4">User Details</p>
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>

    </div>
  )
}

export default Employee


