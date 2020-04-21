import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import YupTest from "../components/yupTest"

const Litfit = () => (
  <Layout>
    <SEO title="Litfit" />
    <Link to="/">Go back to the homepage</Link>
    <YupTest />
  </Layout>
)

export default Litfit
