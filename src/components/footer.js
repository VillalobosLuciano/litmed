import React from "react"

const Footer = () => (
  <footer className="relative px-4 py-12 text-white border-t-2 border-primary-600 bg-secondary-700 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:pt-24">
    <div className="flex flex-col md:flex-row">
      <div className="w-full mt-8 lg:mt-0 lg:w-2/6 md:pr-4 lg:mx-4 lg:pr-8">
        <h3 className="mb-4 text-2xl font-bold">LITMED.</h3>
        <p className="text-secondary-200">
          Comprometidos con mejorar la calidad de vida de las personas.
        </p>
        <ul className="mt-4 ml-0">
          <li>
            <p className="flex items-center block text-secondary-200">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current text-primary-600"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
              </span>
              <span className="ml-3">Eleuterio Ramírez N° 19 - Coquimbo</span>
            </p>
          </li>
          <li className="mt-4">
            <p className="flex items-center block text-secondary-200">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current text-primary-600"
                >
                  <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                </svg>
              </span>
              <span className="ml-3">+512 64 25 59</span>
            </p>
          </li>
          <li className="mt-4">
            <p className="flex items-center block text-secondary-200">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current text-primary-600"
                >
                  <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                </svg>
              </span>
              <span className="ml-3">centromedicolitmed@gmail.com</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full mt-8 mr-4 lg:w-2/6 lg:mt-0 lg:mx-4 lg:pr-8">
        <h5 className="font-semibold tracking-wider uppercase">
          Horarios de atención
        </h5>
        <label
          className="block mt-4 mb-2 text-xs font-bold tracking-wide uppercase text-secondary-100"
          htmlFor="grid-last-name"
        >
          Centro médico
        </label>
        <p className="mb-2 text-sm text-secondary-200">
          Lunes a viernes: 10:00 am a 20:00 pm. <br />
          Sábado: 8:00 am a 10:00 am.
        </p>
        <label
          className="block mt-4 mb-2 text-xs font-bold tracking-wide uppercase text-secondary-100"
          htmlFor="grid-last-name"
        >
          Box training
        </label>
        <p className="mb-2 text-sm text-secondary-200">
          Martes y jueves: 19:00 am a 20:00 pm. <br />
          Sábado: 8:00 am a 10:00 am.
        </p>
        <label
          className="block mt-4 mb-2 text-xs font-bold tracking-wide uppercase text-secondary-100"
          htmlFor="grid-last-name"
        >
          Functional training
        </label>
        <p className="mb-2 text-sm text-secondary-200">
          Lunes, miércoles y viernes: 19:00 am a 20:00 pm.
        </p>
      </div>
      <div className="w-full mt-8 lg:w-2/6 lg:mt-0 lg:ml-4">
        <h5 className="font-semibold tracking-wider uppercase">Contáctanos</h5>
        <form className="mt-4">
          <div className="flex flex-wrap mb-4">
            <input
              className="w-full h-10 p-2 text-white border-l rounded placeholder-secondary-100 border-primary-600 bg-secondary-500"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="flex flex-wrap mb-4">
            <input
              className="w-full h-10 p-2 text-white border-l rounded placeholder-secondary-100 border-primary-600 bg-secondary-500"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full h-24 px-2 pt-2 text-white border-l rounded placeholder-secondary-100 border-primary-600 bg-secondary-500"
              placeholder="Mensaje"
              defaultValue={""}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-2 font-semibold tracking-wide text-white rounded bg-primary-600 hover:bg-primary-500"
              type="button"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between mt-16 md:flex-row">
      <div className="mb-4 sm:mb-0">
        <p className="text-sm text-secondary-200">
          © {new Date().getFullYear()}, desarrollado por
          {` `}
          <a
            href="http://localhost:8000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline text-secondary-200 hover:text-primary-600">
              Luciano
            </span>
          </a>
        </p>
      </div>
      <div>
        <ul className="flex">
          <li className="text-secondary-200 hover:text-primary-600">
            <a
              href="https://www.facebook.com/CentroMedicoLitmed"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
              </svg>
            </a>
          </li>
          <li className="ml-2 text-secondary-200 hover:text-primary-600">
            <a
              href="https://www.instagram.com/CentroMedicoLitmed"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                <circle cx="11.994" cy="11.979" r="3.003" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
