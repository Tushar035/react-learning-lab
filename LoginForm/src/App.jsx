import { useState } from 'react'
import './App.css'
import AdminForm30PlusInput from './Rohit/Components/FormHandling/AdminForm30PlusInput'
import FormWithYup from './components/Rohit/FormHandling/FormWithYup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormWithYup />
    </>
  )
}

export default App
