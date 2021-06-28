import React from 'react'

export default function Footer() {
  return (
    <footer style={{textAlign: 'right'}}>
      <p>
        <small>&copy; {new Date().getFullYear()} Matt Packer</small>
      </p>
    </footer>
  )
}