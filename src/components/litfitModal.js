import React from "react"
import { Link } from "gatsby"

const LitfitModal = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <button
        className="inline-flex items-center mt-3 cursor-pointer text-primary-600 hover:text-primary-400"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver Más
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      {showModal ? (
        <>
          <div
            className="fixed inset-x-0 bottom-0 z-50 px-2 sm:inset-0 sm:flex sm:items-center sm:justify-center"
            onClick={() => setShowModal(false)}
          >
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-700 opacity-75" />
            </div>

            <div className="relative w-auto max-w-3xl mx-auto my-2">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white rounded-md shadow-xl outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between px-4 py-3 border-b border-gray-300 lg:px-6">
                  <div>
                    <h3 className="text-xl font-semibold leading-none text-gray-800">
                      Olivia Hall
                    </h3>
                    <p className="text-xs tracking-wide uppercase text-primary-600">
                      Kinesiología
                    </p>
                  </div>

                  <button onClick={() => setShowModal(false)}>
                    <span className="text-2xl font-semibold leading-none text-gray-700 hover:text-gray-600">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div
                  className="relative flex-auto p-4 overflow-y-scroll lg:p-6"
                  style={{ height: 440 }}
                >
                  <p className="text-base font-light leading-6 text-gray-600">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves.
                  </p>
                  <div className="mt-8 mb-4 lg:mb-0 lg:mt-10">
                    <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                      <li>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-primary-600">
                              1
                            </div>
                          </div>
                          <div className="ml-4">
                            <h5 className="text-lg font-medium leading-6 text-gray-900">
                              Competitive exchange rates
                            </h5>
                            <p className="mt-2 text-base font-light leading-6 text-gray-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Maiores impedit perferendis
                              suscipit eaque, iste dolor cupiditate blanditiis
                              ratione.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-6 md:mt-0">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-primary-600">
                              2
                            </div>
                          </div>
                          <div className="ml-4">
                            <h5 className="text-lg font-medium leading-6 text-gray-900">
                              No hidden fees
                            </h5>
                            <p className="mt-2 text-base font-light leading-6 text-gray-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Maiores impedit perferendis
                              suscipit eaque, iste dolor cupiditate blanditiis
                              ratione.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-6 md:mt-0">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-primary-600">
                              3
                            </div>
                          </div>
                          <div className="ml-4">
                            <h5 className="text-lg font-medium leading-6 text-gray-900">
                              Transfers are instant
                            </h5>
                            <p className="mt-2 text-base font-light leading-6 text-gray-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Maiores impedit perferendis
                              suscipit eaque, iste dolor cupiditate blanditiis
                              ratione.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-6 md:mt-0">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-primary-600">
                              4
                            </div>
                          </div>
                          <div className="ml-4">
                            <h5 className="text-lg font-medium leading-6 text-gray-900">
                              Mobile notifications
                            </h5>
                            <p className="mt-2 text-base font-light leading-6 text-gray-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Maiores impedit perferendis
                              suscipit eaque, iste dolor cupiditate blanditiis
                              ratione.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-md lg:py-4 lg:px-6">
                  <ul className="inline-flex text-base font-medium leading-6">
                    <li>
                      <a
                        href="https://www.facebook.com/CentroMedicoLitmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="text-gray-600 fill-current hover:text-primary-600"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-6">
                      <a
                        href="http://localhost:8000/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="text-gray-600 fill-current hover:text-primary-600"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-6">
                      <a
                        href="http://localhost:8000/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Linkedin"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="text-gray-600 fill-current hover:text-primary-600"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-6">
                      <a
                        href="https://www.instagram.com/CentroMedicoLitmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="text-gray-600 fill-current hover:text-primary-600"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <Link
                    to={`/`}
                    className="px-4 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm lg:text-base bg-primary-700 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                  >
                    Agendar Hora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default LitfitModal
