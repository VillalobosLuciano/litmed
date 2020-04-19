import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "../components/bgLitmed"
import SEO from "../components/seo"
import ServiceTab from "../components/serviceTab"
import DatePicker from "../components/datePicker"

const IndexPage = () => (
  <Layout>
    <SEO title="Litmed" />

    <BackgroundImage>
      <section
        className="relative flex items-center md:max-w-3xl md:mx-auto"
        style={{
          height: 450,
        }}
      >
        <div className="mb-24 text-center xl:mb-0 xl:mt-30">
          <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Un mejor estilo de vida empieza con el cuidado de la salud
          </h1>
          <p className="mt-4 text-xl leading-snug text-blue-100 md:text-2xl">
            En LITMED estamos comprometidos con la salud integral
          </p>
        </div>
      </section>
    </BackgroundImage>
    <svg
      className="hidden text-white fill-current bg-secondary-500 md:block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fillOpacity={1}
        d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>

    <div
      className="relative hidden max-w-4xl mx-auto shadow-lg bg-secondary-700 z-5 lg:block"
      style={{ marginTop: "-410px", borderRadius: 20 }}
    >
      <div className="px-6 pt-4 pb-2">
        <form className="w-full">
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mt-2 mb-6 md:w-1/3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
                htmlFor="grid-state"
              >
                area de la salud
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  id="grid-state"
                >
                  <option value="" selected disabled hidden>Seleccionar área</option>
                  <option>Kinesiología</option>
                  <option>Nutrición</option>
                  <option>Medicina</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-3 mt-2 mb-6 md:w-1/3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
                htmlFor="grid-state"
              >
                Especialista
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  id="grid-state"
                >
                  <option value="" selected disabled hidden>Seleccionar especialista</option>
                  <option>Diego Hidalgo</option>
                  <option>Jaime Castillo</option>
                  <option>Camilo Menares</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-3 mt-2 mb-6 md:w-1/3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
                htmlFor="grid-zip"
              >
                Fecha
              </label>
              <DatePicker />
            </div>

            <div className="w-full px-3 mt-8 mb-6 md:w-1/3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
                htmlFor="grid-state"
              >
                Hora
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  id="grid-state"
                >
                  <option value="" selected disabled hidden>Seleccionar hora</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full px-3 mt-8 mb-6 md:w-1/3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
                htmlFor="grid-zip"
              >
                E-Mail
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                id="grid-zip"
                type="text"
                placeholder={"tu@email.com"}
              />
            </div>
            <div className="w-full px-3 mt-8 mb-6 md:w-1/3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
                htmlFor="grid-zip"
              >
                Número de contacto
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                id="grid-zip"
                type="text"
                placeholder={'8765 4321'}
              />
            </div>
          </div>
          <button
            className="w-full px-6 py-3 my-4 text-xs font-semibold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline-red sm:text-sm sm:leading-5"
            type="button"
          >
            Agendar Hora
          </button>
        </form>
      </div>
    </div>

    <div className="py-24 bg-white lg:mt-6">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
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
        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    Competitive exchange rates
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    No hidden fees
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    Transfers are instant
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    Mobile notifications
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ServiceTab />

    <div className="bg-gray-200">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          <span className="text-primary-600">Start your free trial today.</span>
        </h2>
        <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="http://localhost:8000/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline"
            >
              Get started
            </a>
          </div>
          <div className="inline-flex ml-3 rounded-md shadow">
            <a
              href="http://localhost:8000/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-primary-600 hover:text-primary-500 focus:outline-none focus:shadow-outline"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
