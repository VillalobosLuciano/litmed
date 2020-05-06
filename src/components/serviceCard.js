import React from "react"

const ServiceCard = () => (
  <li className="mb-6 md:m-2">
    <div className="flex px-16 pt-5 pb-4 transition duration-300 ease-in-out transform border rounded-lg border-primary-200 sm:border-transparent sm:hover:shadow-lg sm:hover:-translate-y-1 sm:hover:scale-105 sm:p-6 sm:pb-4">
      <div className="p-1 sm:flex sm:items-start">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            className="w-6 h-6 text-primary-600"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Servicio Litmed
          </h3>
          <div className="mt-2 mb-1 text-sm leading-5">
            <p className="pb-1 text-gray-500">
              Are you sure you want to deactivate your account? All of your data
              will be permanantly removed. This action cannot be undone.
            </p>
            <a className="font-light underline cursor-pointer text-primary-600 hover:text-primary-500">
              Ver más.
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
)
export default ServiceCard
