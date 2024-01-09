import React from 'react'


function Signup() {
  return (
    <>
      <h1>Create an Account</h1>
      <form action="POST">
        <label htmlFor="">First Name: </label>
        <input type="text" />
        <label htmlFor="">Last Name: </label>
        <input type="text" />
        <label htmlFor="">Email: </label>
        <input type="text" />
        <label htmlFor="">Password: </label>
        <input type="password" />
        <label htmlFor="">Confirm Password: </label>
        <input type="password" />
      </form>
    </>
  )
}

export default Signup