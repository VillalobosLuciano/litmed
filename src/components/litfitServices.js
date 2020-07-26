import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LitfitModal from "./litfitModal"

export default function LitfitServices() {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "box.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(relativePath: { eq: "functional.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgThree: file(relativePath: { eq: "recovery.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <section className="flex flex-wrap py-8">
        <div className="p-0 mb-6 md:p-4 md:w-1/3">
          <div className="transition duration-300 ease-in-out border rounded-md sm:hover:shadow-lg hover:border-primary-500">
            <div className="h-56 overflow-hidden">
              <Img
                className="z-0 w-full h-full shadow-md rounded-t-md"
                fluid={data.imgOne.childImageSharp.fluid}
              />
            </div>
            <div className="p-4 border-t-2 border-primary-500">
              <h2 className="pb-1 text-xl font-medium text-gray-900 title-font">
                Box Training
              </h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">
                conjunto de ejercicios de entrenamiento de boxeo diseñados para
                desarrollar habilidades, aumentar fuerza muscular, resistencia y
                agilidad.
              </p>
              <LitfitModal />
            </div>
          </div>
        </div>
        <div className="p-0 mb-6 md:p-4 md:w-1/3">
          <div className="transition duration-300 ease-in-out border rounded-md sm:hover:shadow-lg hover:border-primary-500">
            <div className="h-56 overflow-hidden">
              <Img
                className="z-0 w-full h-full shadow-md rounded-t-md"
                fluid={data.imgTwo.childImageSharp.fluid}
              />
            </div>
            <div className="p-4 border-t-2 border-primary-500">
              <h2 className="pb-1 text-xl font-medium text-gray-900 title-font">
                Functional Training
              </h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">
                Mejora capacidades importantes para nuestro día a día como la
                agilidad, la movilidad, la estabilidad, la coordinación o el
                equilibrio, corrigiendo también nuestra postura.
              </p>
              <LitfitModal />
            </div>
          </div>
        </div>
        <div className="p-0 mb-6 md:p-4 md:w-1/3">
          <div className="transition duration-300 ease-in-out border rounded-md sm:hover:shadow-lg hover:border-primary-500">
            <div className="h-56 overflow-hidden">
              <Img
                className="z-0 w-full h-full shadow-md rounded-t-md"
                fluid={data.imgThree.childImageSharp.fluid}
              />
            </div>
            <div className="p-4 border-t-2 border-primary-500">
              <h2 className="pb-1 text-xl font-medium text-gray-900 title-font">
                Recovery
              </h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">
                Reduce los riesgos de posibles lesiones, recuperate después de
                cada entrenamiento y/o competición a través de ejercicios de
                baja intensidad y masoterapia.
              </p>
              <LitfitModal />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
