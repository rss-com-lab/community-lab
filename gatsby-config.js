const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Community lab',
    author: 'Dmitriy Parhomenko',
    description: 'Free seminar for beginners Frontend-developers and mentors who want learning students.'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            browsers: ['last 2 version'],
          }),
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
