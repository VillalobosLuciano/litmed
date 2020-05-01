import React from "react"
import ServiceCard from "../components/serviceCard"

const ServicesSection = () => (
  <div className="py-24 bg-white lg:mt-6">
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Servicios
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Nos preocupamos de tu bienestar
        </h3>
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div className="mt-8 lg:mt-16">
        <ul className="sm:grid md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </ul>
        <div className="max-w-screen-xl py-8 text-center">
        <button
          className="px-6 py-3 text-xs font-semibold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm text-primary-600 hover:text-primary-700 lg:mt-8 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:shadow-outline-red sm:text-sm sm:leading-5"
          type="button"
        >
          Ver todos los servicios
        </button>
        </div>
      </div>
    </div>
  </div>
)
export default ServicesSection
