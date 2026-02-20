import React, { useState } from 'react'

const LoginForm = () => {
const[form, setform] = useState({
    email : "",
    password : ""
});

const [errors ,setErrors] = useState({});

const validate = (data) =>{
    let newErrors = {};
    if (!form.email && !data.email.include('@')){
        newErrors.email=`${form.email} is not a valid emailId`;
    }
    elseif(data.password.length < 6) 
    {
        newErrors.password="password length must be greater than six";
    }
     setErrors(newErrors);
}

const handlechange = (e) =>{
    const {name , value} = e.target;
    console.log(`${name} changed`);
    setform(
        {...prev,
        [name]: value
        }
    )
}

const handleFormSubmit = () =>{
    e.preventDefault();
    if(Validite()){
       console.log(`your email : ${form.email} and your password :${form.password}`)
    }
}
  return (
    <>
    <form onSubmit={handleFormSubmit}>
        <label>Email :</label>
        <input type='email' name = 'Email' value={form.email} onChange={handlechange}/>
        {errors.email && <p>{errors.email}</p>}
        <label>Password :</label>
        <input type='password' name = 'Password' value={form.password} onChange={handlechange}/>
        {errors.password && <p>{errors.password}</p>}
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default LoginForm;