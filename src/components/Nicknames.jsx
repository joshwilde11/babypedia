import React, { useState, useEffect } from 'react'
import NameCard from './NameCard'
import '../App.css'

const Nicknames = ({ genderFilter }) => {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/names')
      .then((res) => res.json())
      .then((data) => setNames(data.filter(name => name.category === 'nicknames')))
  }, [])

  const filteredNames = names.filter((name) => {
    if (genderFilter === 'all') return true
    return name.gender === genderFilter
  })

  return (
    <div>
      <h4>Names with a lot of nicknames</h4>
      <div className="name-cards-container">
        {filteredNames.map((name) => (
          <NameCard key={name.id} {...name} />
        ))}
      </div>
    </div>
  )
}

export default Nicknames