module.exports = {
    siteMetaData: {
      title: "hacktoberfest-2020",
      description: "",
      domain: "https://ulka-starter-default.netlify.app/",
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