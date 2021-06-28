import React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
  return (
    <nav>
      <h3>my site?!</h3>
      <Link to="/">Go home!</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/about">About Me</Link>
    </nav>
  )
}