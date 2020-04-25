import React from "react"
import Box from "../images/box.jpg"
import Functional from "../images/functional.jpg"
import Recovery from "../images/recovery.jpg"

const LitfitServices = () => (
  <div className="flex justify-center pt-4 pb-6 sm:pb-10 lg:pb-12">
    <div className="grid grid-cols-1 gap-6 row-gap-6 px-4 xl:gap-10 xl:row-gap-10 lg:gap-8 lg:row-gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="flex flex-col mx-auto rounded shadow-lg"
        style={{ maxWidth: 380 }}
      >
        <img
          className="w-full h-56 border-b-4 rounded-t border-primary-500"
          src={Box}
          alt="Box Training"
        />
        <div className="flex-grow px-6 py-4">
          <div className="mb-2 text-xl font-semibold text-gray-900">
            Box Training
          </div>
          <p className="text-base font-light text-gray-600">
            Pon a prueba tu condición fisica entrenando de igual manera que los
            boxeadores profesionales
          </p>
        </div>
        <div className="px-6 py-3 bg-gray-100">
          <button
            className="w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out rounded shadow-sm bg-primary-600 hover:bg-primary-500"
            type="button"
          >
            Ver más
          </button>
        </div>
      </div>
      <div
        className="flex flex-col mx-auto rounded shadow-lg"
        style={{ maxWidth: 380 }}
      >
        <img
          className="w-full h-56 border-b-4 rounded-t border-primary-500"
          src={Functional}
          alt="Box Training"
        />
        <div className="flex-grow px-6 py-4">
          <div className="mb-2 text-xl font-semibold text-gray-900">
            Functional Training
          </div>
          <p className="text-base font-light text-gray-600">
            Trabaja distintos grupos musculares a la vez, enseñale a tu cuerpo
            como moverse, quema grasa y tonifica
          </p>
        </div>
        <div className="px-6 py-3 bg-gray-100">
          <button
            className="w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out rounded shadow-sm bg-primary-600 hover:bg-primary-500"
            type="button"
          >
            Ver más
          </button>
        </div>
      </div>
      <div
        className="flex flex-col mx-auto rounded shadow-lg"
        style={{ maxWidth: 380 }}
      >
        <img
          className="w-full h-56 border-b-4 rounded-t border-primary-500"
          src={Recovery}
          alt="Box Training"
        />
        <div className="flex-grow px-6 py-4">
          <div className="mb-2 text-xl font-semibold text-gray-900">
            Recovery
          </div>
          <p className="text-base font-light text-gray-600">
            Reduce los riesgos de posibles lesiones, recuperate después del
            entrenamiento y competición
          </p>
        </div>
        <div className="px-6 py-3 bg-gray-100">
          <button
            className="w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out rounded shadow-sm bg-primary-600 hover:bg-primary-500"
            type="button"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  </div>
)
export default LitfitServices
