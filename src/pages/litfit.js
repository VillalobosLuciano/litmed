import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LitfitServices from "../components/litfitServices"

const Litfit = () => (
  <Layout>
    <SEO title="Litfit" />

    {/* <div className="grid grid-cols-1 px-4 py-10 lg:grid-cols-2 sm:py-12 md:py-16 lg:py-24 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div className="text-white bg-gray-100">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your
            <br className="xl:hidden" />
            <span className="text-indigo-600">online business</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="text-white bg-gray-600">col 2</div>
    </div> */}

    <div className="px-4 py-6 sm:px-8 md:px-16 sm:py-10 lg:px-16 lg:py-12 xl:px-48">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Servicios
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Nos preocupamos de tu bienestar
        </h3>
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
    </div>
    <LitfitServices />
  </Layout>
)

export default Litfit
