import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Header headerText='About Me'/>
      <p>Here is where my bio can go</p>
    </Layout>
  )
}