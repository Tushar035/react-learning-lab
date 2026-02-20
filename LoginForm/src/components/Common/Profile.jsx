import React from 'react'

function Profile({...rest}) {
  return (
    <div>
      <h1>{rest.name}'s Profile</h1>
      <ul>
        <li>Name : {rest.name}</li>
        <li>Age : {rest.age}</li>
        <li>City : {rest.city}</li>
      </ul>
    </div>
  )
}

export default Profile
