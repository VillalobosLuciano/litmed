import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Litmed() {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "s_one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgTwo: file(relativePath: { eq: "s_two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgThree: file(relativePath: { eq: "s_three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="text-gray-700 body-font">
      <div className="max-w-screen-xl px-4 py-6 mx-auto sm:mb-12 sm:py-10 lg:pt-16 lg:pb-24 sm:px-6 lg:px-8">
        <div className="pb-12 lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide text-teal-600 uppercase">
            litmed
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Centro Médico Integral
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            Ofrecemos un excelente servicio de salud, accesible para todos los ciudadanos de la región de Coquimbo 
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Img
                className="w-full h-full"
                fluid={data.imgOne.childImageSharp.fluid}
              />
            </div>
            <h2 className="mt-5 text-base font-medium text-teal-800 uppercase title-font">
              Rehabilitación física
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              La finalidad es que la persona tenga una vida autónoma,
              dependiendo en el menor grado posible de los demás.
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Img
                className="w-full h-full"
                fluid={data.imgTwo.childImageSharp.fluid}
              />
            </div>
            <h2 className="mt-5 text-base font-medium text-teal-800 uppercase title-font">
              Salud física y mental
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Cuerpo y mente saludables ayudan a prevenir ciertas enfermedades
              como afecciones cardíacas y diabetes.
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Img
                className="w-full h-full"
                fluid={data.imgThree.childImageSharp.fluid}
              />
            </div>
            <h2 className="mt-5 text-base font-medium text-teal-800 uppercase title-font">
              Estilo de vida saludable
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Te ayudamos a incorporar aquellos hábitos de nuestra vida diaria
              que nos ayudan a mantenernos más sanos y con menos limitaciones
              funcionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

