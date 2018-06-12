require("dotenv").config({
  path: `.env`,
});



const query = `
{
  allMarkdownRemark {
    edges {
      node {
        objectID: id
        excerpt(pruneLength: 35)
        fields {
          slug
        }
        frontmatter {
          title
          image
          category
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`

const queries = [
  {
    query,
    transformer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => node), // optional
    indexName: 'blog', // overrides main index name, optional
  },
];

module.exports = {
  siteMetadata: {
    title: 'Techvax',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
     {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_APP_ID,
        apiKey: process.env.GATSBY_API_KEY,
        indexName: "blog", // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TechVax',
        short_name: 'TechVax',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333',
        display: 'minimal-ui',
        icon: 'src/img/logo.svg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
