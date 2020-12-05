import React from "react"
import { Link } from "gatsby"
import LogoFonasa from "../images/logofonasa.png"

export default function Services() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r lg:from-teal-500 to-green-400" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
          <div className="px-4 py-16 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-teal-600 uppercase">
                Servicios
              </h2>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Tenemos todo lo que necesitas para el cuidado de tu salud
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
                      Consultas y diagnostico
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Gracias a la experiencia y la atención al detalle
                      obtenemos un diagnostico certero y tratamientos adecuados.
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
                      Programas, tratamientos y seguimiento
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Te acompañamos activamente en tu proceso de rehabilitación
                      para garantizar buenos resultados.
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
                      Equipo de profesionales
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Ofrecemos un alto nivel de especialización en las
                      distintas diciplinas practicadas en nuestro centro médico.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-4 py-16 bg-gradient-to-r from-teal-500 to-green-400 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
            <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
              <span className="flex flex-col text-center">
                <span className="text-5xl font-extrabold tracking-tight text-white">
                  Nuestros servicios
                </span>
                <span className="mt-2 text-base font-medium text-teal-50">
                  Más consultados
                </span>
              </span>
              <ul className="bg-teal-700 bg-opacity-50 rounded sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col">
                <li>
                  <Link
                    to={`services/neurorehabilitacion/`}
                    className="flex items-center px-4 py-4 text-base text-white hover:bg-teal-700"
                  >
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
                    <span className="ml-3">Neurorehabilitación</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`services/psicologia/`}
                    className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-700"
                  >
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
                    <span className="ml-3">Psicologîa</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`services/kinesiologia-deportiva/`}
                    className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-700"
                  >
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
                    <span className="ml-3">Kinesiología Deportiva</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`services/nutricion-y-dietetica/`}
                    className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-700 sm:border-t-0 sm:border-l"
                  >
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
                    <span className="ml-3">Nutrición y dietética</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`services/fonoaudiologia/`}
                    className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-700 sm:border-l"
                  >
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
                    <span className="ml-3">Fonoaudiología</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`services/medicina-general/`}
                    className="flex items-center px-4 py-4 text-base text-white border-t border-teal-300 border-opacity-25 hover:bg-teal-700 sm:border-l"
                  >
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
                    <span className="ml-3">Medicina General</span>
                  </Link>
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

      <div className="px-4 py-12 mx-auto text-center lg:text-left max-w-7xl sm:px-6 lg:pt-24 lg:pb-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Convenios de salud</span>
          <span className="block text-xl text-teal-500 lg:text-2xl">
            Litmed otorga cobertura de atención mediante FONASA e ISAPRES.
          </span>
        </h2>
        <div className="flex justify-center mt-8 lg:justify-start lg:mt-0 lg:flex-shrink-0">
          <div className="flex-shrink-0">
            <img className="h-16" src={LogoFonasa} alt="fonasa" />
          </div>
        </div>
      </div>
    </>
  )
}
