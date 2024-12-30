import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">All Names</Link></li>
        <li><Link to="/nature-names">Nature Names</Link></li>
        <li><Link to="/religious-names">Religious Names</Link></li>
        <li><Link to="/nicknames">Nicknames</Link></li>
        <li><Link to="/submit-name">Submit a New Name</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar