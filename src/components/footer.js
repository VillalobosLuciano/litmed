import React from "react"
import ContactForm from "../components/contactForm"

const Footer = () => (
  <footer>
    

    <div className="py-12">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="mt-5">
            <h5 className="text-lg font-medium leading-6 text-gray-900">
              LITMED
            </h5>
            <p className="mt-4 text-base leading-6 text-gray-500">
              Nuestro compromiso está en mejorar tu calidad de vida,
              respaldados por un gran equipo de profesionales con gran
              formación valórica y vocación.
            </p>
            <ul className="mt-4">
              <li>
                <p className="flex items-center text-gray-500">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="text-teal-500 fill-current"
                    >
                      <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                    </svg>
                  </span>
                  <a
                    className="ml-3 text-base"
                    href="https://www.google.com/maps/place/Eleuterio+Ram%C3%ADrez+19,+Coquimbo,+Chile/@-29.9609467,-71.3392486,17z/data=!3m1!4b1!4m5!3m4!1s0x9691c8fd103f949d:0xe217d34b8a2828c3!8m2!3d-29.9609467!4d-71.3370599"
                  >
                    Eleuterio Ramírez N° 19 - Coquimbo
                  </a>
                </p>
              </li>
              <li className="mt-2 md:mt-3">
                <p className="flex items-center text-gray-500">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="text-teal-500 fill-current"
                    >
                      <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                    </svg>
                  </span>
                  <a className="ml-3 text-base" href="tel:+512 64 25 59">
                    +569 9763 2995
                  </a>
                </p>
              </li>
              <li className="mt-2 overflow-hidden md:mt-3">
                <p className="flex items-center text-gray-500">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="text-teal-500 fill-current"
                    >
                      <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                    </svg>
                  </span>
                  <a
                    className="ml-3 text-base"
                    href="mailto: centromedicolitmed@gmail.com"
                  >
                    centromedicolitmed@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="mt-5">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                Horarios de atención
              </h5>
              <ul className="w-3/4 mt-4 space-y-2 sm:w-full lg:w-3/4">
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Lunes</label>
                  <p className="font-light">10:00 a 20:00</p>
                </li>
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Martes</label>
                  <p className="font-light">10:00 a 20:00</p>
                </li>
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Miércoles</label>
                  <p className="font-light">10:00 a 20:00</p>
                </li>
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Jueves</label>
                  <p className="font-light">10:00 a 20:00</p>
                </li>
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Viernes</label>
                  <p className="font-light">10:00 a 20:00</p>
                </li>
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Sábado</label>
                  <p className="font-light">10:00 a 20:00</p>
                </li>
                <li className="flex justify-between text-gray-500">
                  <label className="font-medium">Domingo</label>
                  <p className="font-light">Cerrado</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="mt-5">
              <h5 className="pb-1 text-lg font-medium leading-6 text-gray-900">
                Contáctanos
              </h5>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-screen-xl px-4 py-12 pt-8 mx-auto border-t border-gray-200 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        <a
          href="https://www.facebook.com/CentroMedicoLitmed"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Facebook</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/CentroMedicoLitmed"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Instagram</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-base leading-6 text-center text-gray-400">
          © {new Date().getFullYear()}, LITMED - Centro Médico Integral
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
