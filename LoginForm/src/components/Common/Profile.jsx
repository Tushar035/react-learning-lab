import React from 'react'

function Profile({...rest}) {
  console.log(rest)
  return (
    <div>
      <h1>{rest.user.name}'s Profile</h1>
      <ul>
        <li>Name : {rest.user.name}</li>
        <li>Age : {rest.user.age}</li>
        <li>City : {rest.user.city}</li>
      </ul>
    </div>
  )
}

export default Profile
