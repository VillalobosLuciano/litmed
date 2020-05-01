import React from "react"
import DatePicker from "../components/datePicker"

const AppointmentForm = () => (
  <div
    className="relative hidden max-w-4xl mx-auto shadow-lg bg-secondary-700 z-5 lg:block"
    style={{ marginTop: "-120px", borderRadius: 20 }}
  >
    <div className="px-6 pt-4 pb-2">
      <form className="w-full">
        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mt-2 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
              htmlFor="grid-state"
            >
              area de la salud
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                id="grid-state"
              >
                <option value="" selected disabled hidden>
                  Seleccionar área
                </option>
                <option>Kinesiología</option>
                <option>Nutrición</option>
                <option>Medicina</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mt-2 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
              htmlFor="grid-state"
            >
              Especialista
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                id="grid-state"
              >
                <option value="" selected disabled hidden>
                  Seleccionar especialista
                </option>
                <option>Diego Hidalgo</option>
                <option>Jaime Castillo</option>
                <option>Camilo Menares</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mt-2 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
              htmlFor="grid-zip"
            >
              Fecha
            </label>
            <DatePicker />
          </div>

          <div className="w-full px-3 mt-8 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
              htmlFor="grid-state"
            >
              Hora
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                id="grid-state"
              >
                <option value="" selected disabled hidden>
                  Seleccionar hora
                </option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full px-3 mt-8 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
              htmlFor="grid-zip"
            >
              E-Mail
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
              id="grid-zip"
              type="text"
              placeholder={"tu@email.com"}
            />
          </div>
          <div className="w-full px-3 mt-8 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase select-none"
              htmlFor="grid-zip"
            >
              Número de contacto
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
              id="grid-zip"
              type="text"
              placeholder={"8765 4321"}
            />
          </div>
        </div>
        <button
          className="w-full px-6 py-3 my-4 text-xs font-semibold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline-red sm:text-sm sm:leading-5"
          type="button"
        >
          Agendar Hora
        </button>
      </form>
    </div>
  </div>
)

export default AppointmentForm
