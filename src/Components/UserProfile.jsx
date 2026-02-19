import React, { useState } from 'react'

const UserProfile = () => {
    const [user, setUser] =useState(
        {
            name:"",
            age : 0
        }
    );
  return (
    <div>
     <h1>User Details form</h1>
     Name : <input value={user.name} onChange={(e) => setUser({...user , name: e.target.value})} />
     <br/>
     Age : <input value={user.age} onChange={(e) => setUser({...user, age: e.target.value})}/>
     <hr/>
     <h2>Name :{user.name}</h2>
     <h2>Age :{user.age}</h2>
    </div>
  )
}

export default UserProfile
