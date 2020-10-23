module.exports = {
  siteMetadata: {
    title: `page title`,
    description: `page desc`,
    author: `@tomekkoniec`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          types: `src/types`,
          work: `src/components/templates/Work`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/content/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito Sans`,
            variants: [`400`, `600`, `700`, `800`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/static/favicons/fav.png`,
            size: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
