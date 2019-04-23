module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        pathPrefix: "/step-3-com",

    },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }