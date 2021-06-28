import React from 'react'
import NavBar from '../navbar'

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto 0`, maxWidth: 850, padding: `0 1rem` }}>
			<NavBar />
      <main>
	      {children}
			</main>
    </div>
  )
}