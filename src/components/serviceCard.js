import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

class ServiceCard extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <li className="flex mb-6 sm:m-0" key={post.id}>
              <div className="px-10 py-4 transition duration-300 ease-in-out transform border rounded-lg sm:rounded-none border-primary-200 sm:border-transparent sm:hover:shadow-lg sm:hover:-translate-y-1 sm:hover:scale-105 sm:p-4">
                <div className="p-1 sm:flex sm:items-start">
                  <div
                    className={
                      "flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full sm:mx-0 sm:h-10 sm:w-10 uppercase font-semibold " +
                      `        
                        ${
                          post.frontmatter.specialty === "Medicina"
                            ? "text-blue-600 bg-blue-100"
                            : ""
                        }
                        ${
                          post.frontmatter.specialty === "Kinesiología"
                            ? "text-primary-600 bg-primary-100"
                            : ""
                        }
                        ${
                          post.frontmatter.specialty === "Nutrición"
                            ? "text-purple-600 bg-purple-100"
                            : ""
                        }
                        ${
                          post.frontmatter.specialty === "Fonoaudiología"
                            ? "text-orange-600 bg-orange-100"
                            : ""
                        }
                        ${
                          post.frontmatter.specialty === "Psicología"
                            ? "text-red-600 bg-red-100"
                            : ""
                        }
                        ${
                          post.frontmatter.specialty === "Terapia Ocupacional"
                            ? "text-teal-600 bg-teal-100"
                            : ""
                        }
                      `
                    }
                  >
                    {post.frontmatter.specialty.charAt(0)}
                  </div>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {post.frontmatter.title}
                    </h3>
                    <div className="mt-2 mb-1 text-sm leading-5">
                      <p className="mb-2 text-gray-500 line-clamp-4">
                        {post.frontmatter.description}
                      </p>
                      <Link
                        className="font-light underline cursor-pointer text-primary-900 hover:text-primary-600"
                        to={`${post.fields.slug
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")}/`}
                      >
                        Ver más.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </>
    )
  }
}

ServiceCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ServiceCardQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "service" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                specialty
                description
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ServiceCard data={data} count={count} />}
  />
)
