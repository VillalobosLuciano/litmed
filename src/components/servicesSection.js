import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "s_one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(relativePath: { eq: "s_two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgThree: file(relativePath: { eq: "s_three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="pb-12 lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
            Servicios
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Nos preocupamos de tu bienestar
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            El objetivo de nuestros servicios es garantizar una mejora en tu
            salud física/mental, hábitos y estilo de vida.
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
            <h2 className="mt-5 text-base font-medium uppercase text-primary-800 title-font">
              Rehabilitación física
            </h2>
            <p className="mt-2 text-base leading-relaxed">
            La finalidad es que la persona tenga una vida autónoma, dependiendo en el menor grado posible de los demás.
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Img
                className="w-full h-full"
                fluid={data.imgTwo.childImageSharp.fluid}
              />
            </div>
            <h2 className="mt-5 text-base font-medium uppercase text-primary-800 title-font">
              Salud física y mental
            </h2>
            <p className="mt-2 text-base leading-relaxed">
            Cuerpo y mente saludables ayudan a prevenir ciertas enfermedades como afecciones cardíacas y diabetes. También previenen la depresión y reducen el estrés.
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Img
                className="w-full h-full"
                fluid={data.imgThree.childImageSharp.fluid}
              />
            </div>
            <h2 className="mt-5 text-base font-medium uppercase text-primary-800 title-font">
              Estilo de vida saludable
            </h2>
            <p className="mt-2 text-base leading-relaxed">
            Te ayudamos a incorporar aquellos hábitos de nuestra vida diaria que nos ayudan a mantenernos más sanos y con menos limitaciones funcionales. 
            </p>
          </div>
        </div>
        <Link to={`services/`}>
          <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white border-0 rounded bg-primary-600 focus:outline-none hover:bg-primary-500">
            Ver todos los servicios
          </button>
        </Link>
      </div>
    </section>
  )
}
