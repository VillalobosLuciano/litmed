import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LitfitServices from "../../components/litfitServices"

export default class LitfitIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Staff" />
        <div className="max-w-screen-xl px-4 py-6 mx-auto sm:py-10 lg:py-16 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base font-semibold leading-6 tracking-wide text-teal-600 uppercase">
              Litfit
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Mejora tu calidad de vida
            </h3>
            <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
              Realizamos ejercicios multiarticulares y multimusculares que
              buscan desarrollar la inteligencia del movimiento humano
            </p>
          </div>
          <LitfitServices />
        </div>
      </Layout>
    )
  }
}
