import { useState } from 'react'
import './App.css'
import AdminForm30PlusInput from './Components/FormHandling/AdminForm30PlusInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminForm30PlusInput />

    </>
  )
}

export default App
