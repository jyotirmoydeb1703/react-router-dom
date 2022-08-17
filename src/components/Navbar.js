import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbarStyle">
      <Link className="navbarStyleItem" to="home">Home</Link>
      <Link className="navbarStyleItem" to="about">About</Link>
      <Link className="navbarStyleItem" to="gallery">Gallery</Link>
      <Link className="navbarStyleItem" to="blogs">Blogs</Link>
      <Link className="navbarStyleItem" to="contact">Contacts</Link>
    </div>
  )
}
