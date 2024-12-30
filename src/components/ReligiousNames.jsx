import React, { useState, useEffect } from 'react'
import NameCard from './NameCard'
import '../App.css'

const ReligiousNames = () => {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/names')
      .then((res) => res.json())
      .then((data) => setNames(data.filter(name => name.category === 'religious')))
  }, [])

  return (
    <div className="name-cards-container">
      {names.map((name) => (
        <NameCard key={name.id} {...name} />
      ))}
    </div>
  )
}

export default ReligiousNames