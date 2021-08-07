/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `FullStack Portfolion`,
    description: `An awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | FullStack Portfolio`,
    url: `https://demiglace0505.netlify.app`,
    image: `/mainimg.png`,
    twitterUsername: `@GatsbyJS`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 5000, // Defaults to 100
        collectionTypes: [`jobs`, "project"],
        singleTypes: [`about`],
      },
    },
  ],
}
