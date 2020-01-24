import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const HomepageTemplate = ({
  data: {
    wordpressPage: {
      acf: { title, description },
    },
  },
}) => {
  return (
    <Layout>
      <Link to="/">English</Link>
      <Link to="/et">Estonian</Link>

      <h1>{title}</h1>
      <p>{description}</p>
    </Layout>
  )
}

export const query = graphql`
  query($lang: String) {
    wordpressPage(
      slug: { eq: "homepage" }
      wpml_current_locale: { eq: $lang }
    ) {
      acf {
        title
        description
      }
    }
  }
`

export default HomepageTemplate
