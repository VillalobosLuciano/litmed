import React from "react"
import ServiceCard from "../components/serviceCard"

const LitfitSection = () => (
  <div className="py-24 bg-white lg:mt-6">
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Litfit
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
        <ul className="md:grid md:grid-cols-3 md:col-gap-8 md:row-gap-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </ul>
      </div>
    </div>
  </div>
)
export default LitfitSection