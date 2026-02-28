import { useState } from 'react'
import './App.css'
import FormWithYup from './components/Rohit/FormHandling/FormWithYup'
import AdminForm30PlusInput from './components/Rohit/FormHandling/AdminForm30PlusInput'
import Counter from './components/Common/Counter'
import Profile from './components/Common/Profile'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
     <Routes>
      <Route path="/" element={<FormWithYup />} />
      <Route path="/form30" element={<AdminForm30PlusInput />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/profile" element={<Profile user = {{name :"tushar",age:"32" , city : "Nilanga"}} />} />
    </Routes>
  )
}

export default App
