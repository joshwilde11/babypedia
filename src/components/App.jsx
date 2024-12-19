import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((data) => console.log(data))

  return (
   <h1>Heeeeeyyyyy</h1>
  )
}
  )}
export default App
