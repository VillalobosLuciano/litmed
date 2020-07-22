import React from "react"
import SlideShow from "../components/slideShow"
import styled from "styled-components"

const Wrapper = styled.section`
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
`

const LitmedSection = () => (
  <Wrapper>
    <section className="py-16 text-gray-500 bg-secondary-700 body-font border-primary-800">
      <div className="container px-6 mx-auto">
        <div className="pt-20 lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
            Litmed
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl sm:leading-10">
            Centro Médico Integral
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            El objetivo de nuestros servicios es garantizar una mejora en tu
            salud física/mental, hábitos y estilo de vida.
          </p>
        </div>
        <div className="container flex flex-col items-center pt-4 pb-12 mx-auto lg:pb-24 lg:pt-6 md:flex-row">
          <div className="w-full mb-10 lg:max-w-xl lg:w-full md:mb-0">
            <SlideShow />
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h3 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
              Nuestro compromiso
            </h3>
            <p className="mb-2 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
)
export default LitmedSection
