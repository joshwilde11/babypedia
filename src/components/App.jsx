import React, { useState, useEffect } from 'react'
import NameCard from './NameCard'
import '../App.css'

function App({ genderFilter }) {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/names')
      .then((res) => res.json())
      .then((data) => setNames(data))
  }, [])

  const filteredNames = names.filter((name) => {
    if (genderFilter === 'all') return true
    return name.gender === genderFilter
  })

  return (
    <div className="name-cards-container">
      {filteredNames.map((name) => (
        <NameCard key={name.id} {...name} />
      ))}
    </div>
  )
}

export default App
