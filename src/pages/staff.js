/* import React from "react"
import Layout from "../components/layout"
import ProfileCard from "../components/profileCard"
import SEO from "../components/seo"

const Staff = () => (
  <Layout>
    <SEO title="Staff" />

    <div className="px-4 py-6 sm:px-8 md:px-16 sm:py-10 lg:px-16 lg:py-12 xl:px-48">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Litmed Staff
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Conoce a nuestro equipo
        </h3>
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
          Contamos con un completo equipo multidisciplinario para asegurar el
          cuidado integrar de tu salud
        </p>
      </div>
    </div>

    <div className="flex justify-center pt-2 pb-6 sm:pb-10 lg:pb-12">
      <div className="grid grid-cols-1 gap-6 row-gap-6 px-2 xl:gap-10 xl:row-gap-10 lg:gap-8 lg:row-gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  </Layout>
)

export default Staff

 */

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileCard from "../components/profileCard"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="max-w-screen-xl px-4 py-6 mx-auto sm:py-10 lg:py-12 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Litmed Staff
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Conoce a nuestro equipo
        </h3>
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
          Contamos con un completo equipo multidisciplinario para asegurar el
          cuidado integrar de tu salud
        </p>
      </div>
      <div className="my-8 lg:mt-20">
        <ul className="sm:grid md:grid-cols-2 lg:grid-cols-3 md:col-gap-8 md:row-gap-10">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </ul>
      </div>
    </div>
  </Layout>
)

export default Services
