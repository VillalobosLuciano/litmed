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

          {/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/forms'),
    ]
  }
  ```
*/}

          <div className="px-4 pt-12 mx-auto sm:mt-12 max-w-7xl sm:px-6 lg:py-16 lg:px-8">
            <div className="px-6 py-6 bg-teal-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Want products news and updates?
                </h2>
                <p className="max-w-3xl mt-3 text-lg leading-6 text-teal-200">
                  Sign up for our newsletter to stay up to date.
                </p>
              </div>
              <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form className="sm:flex">
                  <label htmlFor="emailAddress" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-teal-500 border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
