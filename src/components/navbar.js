import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.png"

function Navbar({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="sticky top-0 z-10 px-4 py-2 border-b-2 shadow-xl border-primary-600 bg-secondary-700 sm:flex sm:justify-between sm:items-center sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div className="flex items-center justify-between px-4 text-white sm:p-0">
        <Link to={`/`} className="flex items-center cursor-pointer">
          <div className="flex-shrink-0">
            <img className="w-8" src={logo} alt="Workflow logo" />
          </div>
          <span className="ml-2 text-lg font-semibold tracking-tight uppercase text-secondary-200 hover:text-secondary-100">
            {siteTitle}
          </span>
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-secondary-600 focus:outline-none focus:bg-secondary-600 focus:text-white"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isExpanded ? (
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  className="sm:hidden"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isExpanded ? `block` : `hidden`
        } px-2 pt-2 pb-3 sm:flex sm:p-0`}
      >
        <Link
          to={`/`}
          className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-secondary-500 focus:outline-none"
          activeClassName="bg-secondary-900 hover:bg-secondary-900"
        >
          Litmed
        </Link>
        <Link
          to={`/staff`}
          className="block px-3 py-2 text-base font-medium text-white rounded-md sm:ml-4 hover:bg-secondary-500 focus:outline-none"
          activeClassName="bg-secondary-900 hover:bg-secondary-900"
        >
          Staff
        </Link>
        <Link
          to={`/litfit`}
          className="block px-3 py-2 text-base font-medium text-white rounded-md sm:ml-4 hover:bg-secondary-500 focus:outline-none"
          activeClassName="bg-secondary-900 hover:bg-secondary-900"
        >
          Litfit
        </Link>
      </nav>

      {/* <div className="fixed top-0 left-0 flex items-center justify-center w-6 h-6 p-3 m-8 font-mono text-xs text-white bg-gray-700 rounded-full sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div> */}
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
