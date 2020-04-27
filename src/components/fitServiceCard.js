import React from "react"
import Box from "../images/box.jpg"
import LitfitModal from "../components/litfitModal"

const LitmedServices = () => (
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
      <LitfitModal />
    </div>
  </div>
)
export default LitmedServices
