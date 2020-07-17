import React from "react"
import SlideShow from "../components/slideShow"

const LitmedSection = () => (
  <section className="text-gray-500 bg-secondary-600 body-font">
    <div className="pt-20 lg:text-center">
      <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
        Servicios
      </p>
      <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl sm:leading-10">
        Nos preocupamos de tu bienestar
      </h3>
      <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
        El objetivo de nuestros servicios es garantizar una mejora en tu salud
        física/mental, hábitos y estilo de vida.
      </p>
    </div>
    <div className="container flex flex-wrap px-5 py-20 mx-auto">
      <div className="w-full pr-5 mb-10 rounded-lg lg:w-1/2 lg:mb-0">
        <SlideShow />
      </div>
      <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
        <div className="flex flex-col items-center mb-10 lg:items-start">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-secondary-700 text-primary-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="mb-3 text-lg font-medium text-white title-font">
              Shooting Stars
            </h2>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 lg:items-start">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-secondary-700 text-primary-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx={6} cy={6} r={3} />
              <circle cx={6} cy={18} r={3} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="mb-3 text-lg font-medium text-white title-font">
              The Catalyzer
            </h2>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 lg:items-start">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-secondary-700 text-primary-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="mb-3 text-lg font-medium text-white title-font">
              Neptune
            </h2>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default LitmedSection
