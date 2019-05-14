module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/gatsbytango',
  siteMetadata: {
    title: 'Tango Brand Alliance',
    description:
      'This is Tango Brand Alliances site created with wordpress and Gatsby.js.',
    author: '@weibenfalk',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: ['/wp/v2/users/**', '/wp/v2/settings*'],
        baseUrl: 'tango.startlearningreact.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://tango.startlearningreact.com',
          replacementUrl: '',
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Teko',
            variants: ['200', '400', '500', '600', '700'],
          },
        ],
      },
    },
  ],
};
