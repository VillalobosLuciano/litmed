import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import _get from "lodash/get"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Content, { HTMLContent } from "../components/Content"
import { FaAngleLeft, FaAngleRight} from "react-icons/fa"
import { navigate } from "gatsby"
import ConditionalLayout from "../components/conditionalLayout"

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
  const goPrevious = () => {
    if (!prevPostURL) {
      return
    }
    navigate(
      `${prevPostURL.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/`,
      { state: { modal: true } }
    )
  }

  const goNext = () => {
    if (!nextPostURL) {
      return
    }
    navigate(
      `${nextPostURL.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/`,
      { state: { modal: true } }
    )
  }

  const keyboardNavigation = event => {
    switch (event.keyCode) {
      case 37:
        goPrevious()
        break
      case 39:
        goNext()
        break
      case 27:
        closeModal()
        break
      default:
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyboardNavigation)
    return () => {
      window.removeEventListener("keydown", keyboardNavigation)
    }
  })

  const closeModal = () => {
    navigate("/specialists/", { state: { noScroll: true } })
  }

  const PostContent = contentComponent || Content
  return (
    <ConditionalLayout>
    <div className="relative flex h-screen">
      <div className="flex flex-wrap items-end justify-center w-full max-w-screen-xl mx-auto md:items-center">
        <div className="order-3 w-8 pb-2 mx-2 md:order-first md:mx-4">
          {prevPostURL && (
            <Link
              state={{
                modal: true,
              }}
              className="inline-block w-10 h-10 px-2 text-white hover:text-primary-500"
              to={`${prevPostURL
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}/`}
            >
              <FaAngleLeft className="w-full h-full transition-colors duration-200 fill-current" />
            </Link>
          )}
        </div>
        <div className="w-full mx-3 mt-12 overflow-hidden bg-white rounded-md shadow-lg md:mt-0 md:mx-0 md:flex-1">
          <div className="p-4 lg:p-8" name="modalContent">
            {helmet || ""}
            <div className="mt-4 sm:mt-8">
              <h3 className="mt-4 mb-1 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                {title}
              </h3>
              <p className="text-sm font-semibold leading-6 tracking-wide uppercase text-primary-600">
                {specialty}
              </p>
            </div>

            <div className="mb-2 lg:flex">
              <div className="lg:w-2/3">
                <div className="mt-4 sm:mb-8">
                  <p className="mt-1 mb-4 font-light">{description}</p>
                  <h5 className="text-sm leading-6 uppercase text-primary-800">
                    Experiencia
                  </h5>
                  <PostContent className="pt-2 font-light" content={content} />
                </div>
              </div>

              <div className="justify-center pb-2 mt-6 lg:flex sm:mt-2 lg:w-1/3">
                <div>
                  {services && services.length ? (
                    <div className="p-4 border rounded-sm bg-primary-100 border-primary-300">            
                        <span className="text-lg font-semibold leading-8 tracking-wide text-gray-900">
                          Servicios
                        </span>
                      <ul className="pt-3 space-y-3">
                        {services.map(service => (
                          <li key={service + `service`}>
                            <Link
                              className="p-2 font-light leading-6 transition duration-150 ease-in-out rounded-sm hover:bg-primary-200 text-primary-800 hover:text-primary-900"
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
          </div>
        </div>
        <div className="order-last w-8 pb-2 mx-2 md:mx-4">
          {nextPostURL && (
            <Link
              state={{
                modal: true,
              }}
              className="inline-block w-10 h-10 px-2 text-white hover:text-primary-500"
              to={`${nextPostURL
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}/`}
            >
              <FaAngleRight className="w-full h-full transition-colors duration-200 fill-current" />
            </Link>
          )}
        </div>
      </div>
    </div>
    </ConditionalLayout>
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
    <React.Fragment>
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
    </React.Fragment>
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
