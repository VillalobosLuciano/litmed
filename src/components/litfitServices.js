import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function LitfitServices() {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "box.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgTwo: file(relativePath: { eq: "functional.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgThree: file(relativePath: { eq: "recovery.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Box Training
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Conjunto de ejercicios de entrenamiento de boxeo diseñados para
                desarrollar habilidades, aumentar fuerza muscular, resistencia y
                agilidad.
              </p>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                        {/* Heroicon name: globe-alt */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
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
                        Actividades
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        El desarrollo de esta actividad se fundamenta en la
                        ejecución de circuitos dinámicos y desafiantes basados
                        en una gran variedad de trabajos de bolsa, “sombra” y
                        movimientos de pies.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                        {/* Heroicon name: scale */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Horarios
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lunes, miércoles y viernes desde las 18:00 PM hasta las
                        19:00 PM.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0">
              <Img
                className="relative m-6 rounded-md shadow-lg"
                fluid={data.imgOne.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                  Functional Training
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Mejora capacidades importantes para nuestro día a día como la
                  agilidad, la movilidad, la estabilidad, la coordinación o el
                  equilibrio, corrigiendo también nuestra postura.
                </p>
                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                          {/* Heroicon name: annotation */}
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
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
                          Actividades
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Movimientos y ejercicios realizados bajo supervisión
                          profesional que garantizan una mejora en la habilidad
                          de una persona para realizar sus actividades diarias y
                          deportivas.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                          {/* Heroicon name: mail */}
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-medium leading-6 text-gray-900">
                          Horarios
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lunes, miércoles y viernes desde las 19:00 PM hasta
                          las 20:00 PM.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <Img
                  className="relative m-6 rounded-md shadow-lg"
                  fluid={data.imgTwo.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Recovery
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Reduce los riesgos de posibles lesiones, recuperate después de
                cada entrenamiento y/o competición a través de ejercicios de
                baja intensidad y masoterapia.
              </p>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                        {/* Heroicon name: globe-alt */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
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
                        Actividades
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Diversos ejercicios de estiramientos y masajes
                        orientados a mejorar la circulación, ayudando a la
                        distribución de nutrientes a través del cuerpo.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-teal-500 to-green-400">
                        {/* Heroicon name: scale */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Horarios
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lunes, miércoles y viernes desde las 18:00 PM hasta las
                        20:00 PM. Después de cada entrenamiento
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0">
              <Img
                className="relative m-6 rounded-md shadow-lg"
                fluid={data.imgThree.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
