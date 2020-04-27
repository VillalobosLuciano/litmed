import React from "react"

const LitmedServices = () => (
  <li className="mt-10 md:mt-0">
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-500">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <h5 className="text-lg font-medium leading-6 text-gray-900">
          Mobile notifications
        </h5>
        <p className="mt-2 text-base leading-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
    </div>
  </li>
)
export default LitmedServices
