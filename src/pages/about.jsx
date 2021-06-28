import React from 'react'
import Header from '../components/header'

export default function About() {
  return (
    <div style={{ color: "red", fontFamily: "sans-serif" }}>
      <Header headerText='About Me'/>
      <p>Here is where my bio can go</p>
    </div>
  )
}