module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
      // "gatsby-plugin-loadable-components-ssr",
      // OR
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-loadable-components-ssr`,
          options: {
              // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
              // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
              useHydrate: true,
          },
      },
  ],
};
