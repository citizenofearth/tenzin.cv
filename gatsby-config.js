module.exports = {
  siteMetadata: {
    title: "Tenzin Namgyal",
    description: "CV of Tenzin Namgyal",
    locale: "en",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
    "gatsby-plugin-sass"
  ],
};
