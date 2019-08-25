module.exports = {
  siteMetadata: {
    title: 'Community lab',
    author: 'Dmitriy Paromenko'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-react-helmet',
        ]
      }
    },
  ]
}
