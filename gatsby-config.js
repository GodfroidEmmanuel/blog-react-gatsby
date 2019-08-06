module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    `gatsby-plugin-mdx`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Myblog tuto react`,
    author: `Emmanuel Godfroid`,
    description: `tuto sur les trucs de merde`,
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
}
