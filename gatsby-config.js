/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My Portfolio`,
    author: `Ryan Castaneda`,
    intro_image: 'https://live.staticflickr.com/65535/50642550658_e3e689667d_k.jpg',
    description: `My portfolio written in Gatsby.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clients`,
        path: `./content/clients/`,
      },
    },
    `gatsby-transformer-remark`
  ],
}
