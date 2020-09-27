module.exports = {
    siteMetaData: {
      title: "hacktoberfest-2020",
      description: "hacktoberfest-2020",
      domain: "https://426codershacktoberfest2020.netlify.app",
    },
    buildPath: "build",
    pagesPath: "pages",
    templatesPath: "templates",
    plugins: [],
    contents: [
      {
        path: "contributors",
        generatePath: ".",
        template: "hack.ulka",
      },
    ],
  };