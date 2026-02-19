import { useState } from 'react'
import Child from './Components/child';
import Skills from './Components/Skills';
import Profile from './Components/Profile';
import Layout from './Components/Layout';
import Counter from './Components/Counter';
import UserProfile from './Components/UserProfile';
import UncontrolledForm from './Components/UncontrolledForm';
import SignUp from './Components/SignUp';
import MyForm from './Components/MyForm';
import RHFForm from './Components/RHFForm';

// function App() {
//   return (
//     <>
//       <h1> first react app</h1>
//       {/* <Child isOk = {false}/> */}
//       <Layout child = {<Child isOk = {false}/>}/>
//       <Skills skills = {["c#","NET"]}/>
//       <Profile  name ="Tushar" age={32} city ="Latur"/>
//     </>
//   )
// }

  // function handleClick(e) {
  //   // debugger
  //   // console.log(e.type);        // click
  //   // console.log(e.target);      // button element
  //   // console.log(e.currentTarget);      // button element
  //   // e.preventDefault();
  //  e.persist();
  //  console.log(e.target);
  // }

  // return <button onClick={handleClick}>Click Me</button>;

function App() {
  return(
  <>
     <RHFForm/>
  </>
  )
}

export default App;
