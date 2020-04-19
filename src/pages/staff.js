import React from "react"
import Layout from "../components/layout"
import ProfileCard from "../components/profileCard"
import SEO from "../components/seo"

const Staff = () => (
  <Layout>
    <SEO title="Staff" />
    <section className="p-10 px-4 lg:py-12 sm:px-8 lg:px-16 xl:px-42 2xl:px-64 md:pt-20">
      <div className="pb-8 text-center lg:pb-16">
        <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Litmed Staff
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Conoce a nuestro equipo
        </h3>
        <hr className="hidden w-10 m-auto my-6 border-b lg:block border-primary-500" />
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 row-gap-6 xl:gap-10 xl:row-gap-10 lg:gap-8 lg:row-gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </section>
  </Layout>
)

export default Staff
