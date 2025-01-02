import React, { useState } from 'react'
import Navbar from './navbar'
import '../App.css'

const Layout = ({ children, title }) => {
  const [genderFilter, setGenderFilter] = useState('all')

  const cycleGenderFilter = () => {
    const filters = ['all', 'male', 'female', 'neutral']
    setGenderFilter((prevFilter) => {
      const currentIndex = filters.indexOf(prevFilter)
      const nextIndex = (currentIndex + 1) % filters.length
      return filters[nextIndex]
    })
  }

  return (
    <div className="layout-wrapper">
      <div className={`layout ${genderFilter}`}>
        <h1>BABYPEDIA</h1>
        <h2>Baby Name Database</h2>
        <div className="navbar-container">
          <Navbar />
        </div>
        <button onClick={cycleGenderFilter} style={{ position: 'absolute', top: '10px', right: '10px' }}>
          Show {genderFilter === 'all' ? 'Male' : genderFilter === 'male' ? 'Female' : genderFilter === 'female' ? 'Neutral' : 'All'} Names
        </button>
        <div style={{ flex: 1 }}>
          {title && <h3>{title}</h3>}
          {React.cloneElement(children, { genderFilter })}
        </div>
      </div>
    </div>
  )
}

export default Layout