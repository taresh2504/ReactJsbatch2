import React, { useEffect, useState } from 'react'
import './App.css'

const AdminPanel = () => {

  const [title, setTitle] = useState('')
  const [flatNo, setFlatNo] = useState('')
  const [complaints, setComplaints] = useState([])

  
  useEffect(() => {
    let data = localStorage.getItem('complaints')
    if (data) {
      setComplaints(JSON.parse(data))
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem('complaints', JSON.stringify(complaints))
  }, [complaints])


  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === '' || flatNo === '') {
      alert('All fields required')
      return
    }

    let newComplaint = {
      id: Date.now(),
      title: title,
      flatNo: flatNo,
      status: 'Pending'
    }

    setComplaints([...complaints, newComplaint])
    setTitle('')
    setFlatNo('')
  }

  const changeStatus = (id) => {
    let updated = complaints.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'Resolved' }
      }
      return item
    })

    setComplaints(updated)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Apartment Support - Admin Panel</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Flat No"
          value={flatNo}
          onChange={(e) => setFlatNo(e.target.value)}
        />

        <button>Add Complaint</button>
      </form>

      {/* <hr /> */}
      <br />

      <h3>All Complaints</h3>

      {complaints.length === 0 && <p>No complaints found</p>}

      {
        complaints.map((c) => (
          <div key={c.id} style={{ border: '1px solid black', margin: '11px', padding: '11px' }}>
            <p><b>Title:</b> {c.title}</p>
            <p><b>Flat No:</b> {c.flatNo}</p>
            <p><b>Status:</b> {c.status}</p>

            {
              c.status === 'Pending' &&
              <button onClick={() => changeStatus(c.id)}>
                Mark as Resolved
              </button>
            }
          </div>
        ))
      }
    </div>
  )
}

export default AdminPanel
