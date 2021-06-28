/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Matt Packer's Portfolio`,
    author: `Matt Packer`,
    description: `Matt Packer's developer portfolio website. Built with React, Gatsby, and GraphQL.`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Serif', 'Fira Sans', 'Raleway']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gnotes`,
        path: `${__dirname}/src/data/posts/`,
      },
    },
  ],
}
