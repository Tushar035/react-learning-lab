import React, { useState } from 'react'
import "../App.css" 

const ToggleTheme = () => {
  const [isLight, setTheme] = useState(true);
  return (
    <div className={isLight? "light":"dark"}>
      <h1>Hello {isLight}</h1>
      <button onClick={()=>setTheme(!isLight)}>Toggle Theme</button>
    </div>
  )
}

export default ToggleTheme
