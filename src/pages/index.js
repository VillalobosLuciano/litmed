import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "../components/bgLitmed"
import SEO from "../components/seo"
import ServicesSection from "../components/servicesSection"
import LitmedSection from "../components/litmedSection"
import LitfitSection from "../components/litfitSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Litmed" />

    {/* <BackgroundImage>
      <section
        className="flex items-center md:max-w-3xl md:mx-auto"
        style={{
          height: 550,
        }}
      >
        <div className="p-4 mb-24 lg:text-center xl:mb-0 xl:mt-30">
          <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Un mejor estilo de vida empieza con el cuidado de la salud
          </h1>
          <p className="mt-4 text-xl leading-snug text-blue-100 md:text-2xl">
            En LITMED estamos comprometidos con la salud integral
          </p>
        </div>
      </section>
    </BackgroundImage> */}
    <ServicesSection />
    {/* <LitmedSection /> 
    <LitfitSection /> */}
  </Layout>
)

export default IndexPage
