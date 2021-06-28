import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <Header headerText="Well hello there!"/>
      Hello, friend.
    </Layout>
  )
}
