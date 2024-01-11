import React, { useEffect } from 'react'
import ProfileUserInfo from '../components/profileUserInfo/ProfileUserInfo'

function Profile() {
  useEffect(() => {
    console.log(localStorage.getItem('token'))
  })
  return (
    <>
      <ProfileUserInfo />
    </>
  )
}

export default Profile