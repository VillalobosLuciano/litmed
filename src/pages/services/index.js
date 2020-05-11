import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ServiceCard from "../../components/ServiceCard"

export default class ServicesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Staff" />
        <div className="max-w-screen-xl px-4 py-6 mx-auto sm:py-10 lg:py-12 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
              Litmed Staff
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Conoce a nuestro equipo
            </h3>
            <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
              Contamos con un completo equipo multidisciplinario para asegurar
              el cuidado integrar de tu salud
            </p>
          </div>
          <div className="flex justify-center mt-10 sm:mb-8 lg:mt-12">
            <ul className="sm:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
              <ServiceCard />
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}
