import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.title}/>
      Hello, friend.
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`