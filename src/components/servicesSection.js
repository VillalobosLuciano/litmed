import React from "react"
import ServiceCard from "../components/serviceCard"
import { Link } from "gatsby"

const ServicesSection = () => (
  <div className="h-56 mt-10">
    <h3 className="">Services section</h3>
    <div className="max-w-screen-xl pt-6 text-center">
      <Link to={`/services`}>
        <button
          className="px-6 py-3 text-xs font-semibold leading-6 text-white uppercase transition duration-150 ease-in-out border rounded-full shadow-sm border-primary-200 text-primary-600 hover:text-primary-700 lg:mt-8 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:shadow-outline-red sm:text-sm sm:leading-5"
          type="button"
        >
          Ver todos los servicios
        </button>
      </Link>
    </div>
  </div>
)
export default ServicesSection
