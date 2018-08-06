module.exports = {
  siteMetadata: {
    title: 'Lawson ',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      },
    },
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 650,
            backgroundColor: 'white',
            wrapperStyle: {
              padding: '10px'
            }

          },
        },
        {
          resolve: "gatsby-remark-embed-youtube",
          options: {
            width: 800,
            height: 400
          }
        },
        {
          resolve: "gatsby-remark-custom-blocks",
          options: {
            blocks: {
              breakLine: "custom-break-line",
              info: "custom-block-info",
            },
          },
        }
      ],
    },
  },
  ],
}
