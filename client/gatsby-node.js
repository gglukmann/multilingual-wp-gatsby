/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const languages = [
  {
    path: "/",
    code: "en_US",
  },
  {
    path: "/et",
    code: "et",
  },
]

exports.createPages = async ({ actions: { createPage } }) => {
  const HomepageTemplate = path.resolve("./src/templates/Homepage.js")

  languages.forEach(lang => {
    createPage({
      path: lang.path,
      component: HomepageTemplate,
      context: {
        lang: lang.code,
      },
    })
  })
}
