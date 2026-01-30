import React from 'react'

const BookingForm = () => {
  return (
    <>
      <h1>Booking Form</h1>
      <form action="">
        Enter name <input type="text" name="name" value={form.name} onChange={handlechange} id="" /><br /><br />
        Enter number <input type="text" name="number" value={form.number} onChange={handlechange} id="" /><br /><br />
        Enter aadharno <input type="text" name="aaadharno" value={form.aadharno} onChange={handlechange} id="" /><br /><br />
        Enter checkin <input type="text" name="checkin" value={form.checkin} onChange={handlechange} id="" /><br /><br />
        Enter checkout <input type="text" name="checkout" value={form.checkout} onChange={handlechange} id="" /><br /><br />
        Select city <select name="city" value={form.city} onChange={handlechange}  id="">
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
        </select><br /><br />
        <button type="submit">Book</button>
      </form>
    </>
  )
}

export default BookingForm
