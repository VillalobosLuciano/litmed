import React from "react"
import ServiceCard from "../components/serviceCard"
import { Link } from "gatsby"

const LitfitSection = () => (
  <section className="text-gray-700 body-font">
    <div className="container flex flex-col items-center px-6 py-24 mx-auto md:flex-row">
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          Functional & Box Training
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <button className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-primary-600 focus:outline-none hover:bg-primary-500">
          <Link to={`services/`}>Ver entrenamientos</Link>
        </button>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  </section>
)
export default LitfitSection
