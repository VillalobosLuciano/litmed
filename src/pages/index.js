import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "../components/bgLitmed"
import SEO from "../components/seo"
import LitmedServices from "../components/litmedServices"
import AppointmentForm from "../components/appointmentForm"

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
    <AppointmentForm />
    <LitmedServices />
  </Layout>
)

export default IndexPage
