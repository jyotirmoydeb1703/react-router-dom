import React from 'react'
import './Content.css'

export default function Contact() {
  return (
    <div className='childStyle'>
    <div className='contactStyle'>
      <form action="">
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="FirstName" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">First Name</label>
          <input type="text" name="lastName" id="lname" />
        </div>
        <div>
          <label htmlFor="email">First Name</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

    </div>
    </div>
  )
}
