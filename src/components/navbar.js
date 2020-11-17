import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.png"

export default function Navbar({ siteTitle }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="sticky top-0 z-10 w-full bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to={`/`} className="flex items-center cursor-pointer">
                <div className="flex-shrink-0">
                  <img className="w-8" src={logo} alt="Workflow logo" />
                </div>
                <span className="ml-2 font-semibold tracking-tight text-gray-900 uppercase hover:text-secondary-100">
                  {siteTitle}
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <Link
                to={`/`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                activeClassName="text-gray-900 border-teal-500 focus:border-teal-700 hover:text-gray-900 hover:border-teal-500"
              >
                Litmed
              </Link>
              <Link
                to={`/services`}
                className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                activeClassName="text-gray-900 border-teal-500 focus:border-teal-700 hover:text-gray-900 hover:border-teal-500"
              >
                Tratamientos
              </Link>
              <Link
                to={`/specialists`}
                className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                activeClassName="text-gray-900 border-teal-500 focus:border-teal-700 hover:text-gray-900 hover:border-teal-500"
              >
                Especialistas
              </Link>
              <Link
                to={`/litfit`}
                className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                activeClassName="text-gray-900 border-teal-500 focus:border-teal-700 hover:text-gray-900 hover:border-teal-500"
              >
                Litfit
              </Link>
            </div>
            <div className="flex items-center -mr-2 sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {navbarOpen ? (
                    <path
                      className="inline-flex"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      className="sm:hidden"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${navbarOpen ? `block` : `hidden`}`}>
          <div className="pt-2 pb-3 sm:hidden">
            <Link
              to={`/`}
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              activeClassName="text-teal-700 border-teal-500 bg-teal-50 focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-500"
            >
              Litmed
            </Link>
            <Link
              to={`/services`}
              className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              activeClassName="text-teal-700 border-teal-500 bg-teal-50 focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-500"
            >
              Tratamientos
            </Link>
            <Link
              to={`/specialists`}
              className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              activeClassName="text-teal-700 border-teal-500 bg-teal-50 focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-500"
            >
              Especialistas
            </Link>
            <Link
              to={`/litfit`}
              className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              activeClassName="text-teal-700 border-teal-500 bg-teal-50 focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-500"
            >
              Litfit
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}