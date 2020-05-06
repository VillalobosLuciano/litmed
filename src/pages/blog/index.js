import React from 'react'

import Layout from '../../components/layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="px-24 py-12">
          <div className="">
            <div className="p-6 space-x-3">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
