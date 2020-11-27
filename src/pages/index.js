import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "../components/bgLitmed"
import SEO from "../components/seo"
import ServicesSection from "../components/servicesSection"
import LitmedSection from "../components/litmedSection"
import LitfitSection from "../components/litfitSection"
import { Link } from "gatsby"
import LogoFonasa from "../images/logofonasa.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Litmed" />

    <BackgroundImage>
      <section
        className="flex items-center md:max-w-3xl md:mx-auto"
        style={{
          height: 580,
        }}
      >
        <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-5xl md:text-6xl">
              <span className="block">
                Un mejor estilo de vida empieza con el
              </span>
              <span className="block text-teal-100">cuidado de la salud</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-teal-50 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              En LITMED estamos comprometidos con la salud integral
            </p>
          </div>
        </div>
      </section>
    </BackgroundImage>
    <svg
      className="text-teal-500 fill-current"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="shape-fill"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="shape-fill"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="shape-fill"
      />
    </svg>

    <LitmedSection />

    <>
      <div className="relative bg-white">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-teal-50 to-teal-500" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
          <div className="px-4 py-16 bg-white sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-teal-600 uppercase">
                Servicios
              </h2>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Everything you need to talk with your customers
              </p>
              <dl className="mt-12 space-y-10">
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                    {/* Heroicon name: view-boards */}
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Boards
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Purus lobortis volutpat posuere id integer nunc tellus.
                      Non mauris malesuada feugiat massa mi pellentesque cum
                      est. Pharetra a varius urna rhoncus, tempor rutrum.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                    {/* Heroicon name: calendar */}
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Calendar
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Purus lobortis volutpat posuere id integer nunc tellus.
                      Non mauris malesuada feugiat massa mi pellentesque cum
                      est. Pharetra a varius urna rhoncus, tempor rutrum.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                    {/* Heroicon name: users */}
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Teams
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Tincidunt sollicitudin interdum nunc sit risus at bibendum
                      vitae. Urna, quam ut sit justo non, consectetur et varius.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-4 py-16 bg-gradient-to-r from-teal-500 to-green-400 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
            <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
              <div>
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold tracking-tight text-white">
                    Nuestros servicios
                  </span>
                  <span className="mt-2 text-base font-medium text-teal-100">
                    Más consultados
                  </span>
                </span>
              </div>
              <ul className="bg-teal-700 bg-opacity-50 rounded sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col">
                <li className="flex items-center px-4 py-4 text-base text-white hover:bg-teal-500">
                  <svg
                    className="w-6 h-6 text-teal-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">Unlimited Projects</span>
                </li>
                <li className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-500">
                  <svg
                    className="w-6 h-6 text-teal-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">Unlimited storage</span>
                </li>
                <li className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-500">
                  <svg
                    className="w-6 h-6 text-teal-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">Cancel anytime</span>
                </li>
                <li className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-500 sm:border-t-0 sm:border-l">
                  <svg
                    className="w-6 h-6 text-teal-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">No per user fees</span>
                </li>
                <li className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-500 sm:border-l">
                  <svg
                    className="w-6 h-6 text-teal-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">24/7 support</span>
                </li>
                <li className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-500 sm:border-l">
                  <svg
                    className="w-6 h-6 text-teal-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">Cancel anytime</span>
                </li>
              </ul>
              <Link
                to={`services/`}
                className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 text-teal-700 bg-white border border-transparent rounded-md hover:bg-teal-50 md:px-10"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Logo cloud */}

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:pt-24 lg:pb-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Convenios de salud</span>
          <span className="block text-xl text-teal-500 lg:text-2xl">
            Litmed otorga cobertura de atención mediante FONASA e ISAPRES.
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="flex-shrink-0">
            <img className="h-16" src={LogoFonasa} alt="fonasa" />
          </div>
        </div>
      </div>
    </>

    {/* <LitmedSection />
    <LitfitSection /> */}
  </Layout>
)

export default IndexPage

{
  /* <div className="flex justify-center mt-12 sm:mt-16">
<Link to={`services/`} className="px-8 py-2 m-3 text-lg text-center text-white bg-teal-500 border-0 rounded focus:outline-none hover:bg-teal-400">
  Ver todos los servicios
</Link>
</div> */
}
