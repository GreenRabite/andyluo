import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Andy Luo`,
    url: `https://greenrabite.github.io`,
    siteUrl: `https://greenrabite.github.io`,
    description: `powered by NES.CSS`,
    author: `Andy Luo`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Nes`,
        short_name: `Nes`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#0000ff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
}

export default config
