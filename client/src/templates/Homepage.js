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
    <Layout title={title}>
      <p>{description}</p>

      <Link to="/">English</Link>
      <Link to="/et">Estonian</Link>
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
