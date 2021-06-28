import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import * as styles from './index.module.css'

export default function Home({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.title}/>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <h3 className={styles.postTitle}>
            {node.frontmatter.title}
          </h3>
          <p className={styles.postByline}><small>
            Written by: {node.frontmatter.author} on {node.frontmatter.date}
          </small></p>
          <p className={styles.postDescription}>
						{node.frontmatter.description}
					</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query myQuery{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            description
            title
          }
        }
      }
      totalCount
    }
  }
`