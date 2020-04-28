import React from "react"
import WorkerModal from "../components/workerModal"

const ProfileCard = () => (
  <li className="flex flex-col mx-auto mt-10 rounded shadow-lg md:mt-2" style={{ maxWidth: 350 }}>
    <img
      className="w-full h-56 rounded-t"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      alt="Sunset in the mountains"
    />
    <div className="flex-grow px-6 py-4">
      <div className="text-xl font-bold text-gray-900">Olivia Hall</div>
      <p className="mb-3 text-xs tracking-wide uppercase text-primary-700">
        Kinesiología
      </p>
      <p className="text-base font-light text-gray-600">
        Especialista en disfunsiones del Piso Pélvico, terapia kinesiológica en
        embarazo y post-parto.
      </p>
    </div>
    <div className="flex justify-between px-6 py-3 bg-gray-100">
      <button
        className="w-full px-4 py-2 mr-2 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md shadow-sm bg-primary-700 hover:bg-primary-500"
        type="button"
      >
        Agendar Hora
      </button>
      <WorkerModal />
    </div>
  </li>
)

export default ProfileCard
