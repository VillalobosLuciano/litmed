import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import _get from "lodash/get"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Content"

export const SpecialistTemplate = ({
  content,
  contentComponent,
  description,
  services,
  title,
  specialty,
  nextPostURL,
  prevPostURL,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div className="px-4 py-6 mx-auto sm:py-10 lg:py-12 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      {helmet || ""}
      <Link
        className="underline text-secondary-600 hover:text-primary-600"
        to={`specialists/`}
      >
        « Ver todos los especialistas
      </Link>
      <div className="mt-4 mb-1 sm:mt-8">
        <h3 className="mt-4 mb-1 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {title}
        </h3>
        <p className="text-sm font-semibold leading-6 tracking-wide uppercase text-primary-600">
          {specialty}
        </p>
      </div>

      <div class="lg:flex mb-6">
        <div class="lg:w-2/3">
          <div className="mt-4 sm:mt-6 sm:mb-8">
            <h5 className="tracking-wide font-base text-primary-800">
              Descripción
            </h5>
            <p className="mt-1 mb-4 font-light">{description}</p>
            <h5 className="tracking-wide font-base text-primary-800">
              Experiencia
            </h5>
            <PostContent className="pt-1 font-light" content={content} />
          </div>
        </div>

        <div class="lg:flex pb-2 mt-6 sm:mt-2 lg:w-1/3 justify-center">
          <div>
            {services && services.length ? (
              <div className="p-4 border rounded-md bg-primary-100 border-primary-300">
                <h5 className="flex items-center text-primary-900">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="fill-current text-primary-600"
                    >
                      <path d="M0 2h8l3 3h10v4h3l-4 13h-20v-20zm22.646 8h-17.907l-3.385 11h17.907l3.385-11zm-2.646-1v-3h-9.414l-3-3h-6.586v15.75l3-9.75h16z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm tracking-wide uppercase">
                    Servicios
                  </span>
                </h5>

                <ul className="pt-4 space-y-3">
                  {services.map(service => (
                    <li key={service + `service`}>
                      <Link
                        className="px-4 py-2 font-light leading-6 transition duration-150 ease-in-out rounded-lg hover:bg-primary-200 text-primary-800 hover:text-primary-700"
                        to={`/services/${kebabCase(service)}/`}
                      >
                        ‣ {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="space-x-6">
        {prevPostURL && (
          <Link
            className="underline text-secondary-600 hover:text-primary-600"
            to={`${(prevPostURL).normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/`}
          >
            « Anterior
          </Link>
        )}
        {nextPostURL && (
          <Link
            className="underline text-secondary-600 hover:text-primary-600"
            to={`${(nextPostURL).normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/`}
          >
            Siguiente »
          </Link>
        )}
      </div>
    </div>
  )
}

SpecialistTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  specialty: PropTypes.string,
  helmet: PropTypes.object,
}

const Specialist = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)

  return (
    <Layout>
      <SpecialistTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Specialist">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        services={post.frontmatter.services}
        specialty={post.frontmatter.specialty}
        title={post.frontmatter.title}
        nextPostURL={_get(thisEdge, "next.fields.slug")}
        prevPostURL={_get(thisEdge, "previous.fields.slug")}
      />
    </Layout>
  )
}

Specialist.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Specialist

export const pageQuery = graphql`
  query SpecialistByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        specialty
        description
        services
      }
    }

    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "specialist" } } }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
