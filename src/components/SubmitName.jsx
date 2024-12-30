import React, { useState } from 'react'
import '../App.css'

const SubmitName = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [gender, setGender] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = { name, category, gender }

    fetch('http://localhost:3001/names', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newName),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('New name added:', data)
        setName('')
        setCategory('')
        setGender('')
      })
  }

  return (
    <div>
      <h2>Submit a New Name</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitName