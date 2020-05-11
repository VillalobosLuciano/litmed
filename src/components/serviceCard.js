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
            <li className="mb-6" key={post.id}>
              <div className="flex px-16 pt-5 pb-4 transition duration-300 ease-in-out transform border border-primary-200 sm:border-transparent sm:hover:shadow-lg sm:hover:-translate-y-1 sm:hover:scale-105 sm:p-6 sm:pb-4">
                <div className="p-1 sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {post.frontmatter.title}
                    </h3>
                    <div className="mt-2 mb-1 text-sm leading-5">
                      <p className="pb-1 text-gray-500 line-clamp-5">
                        {post.frontmatter.description}
                      </p>
                      <Link
                        className="font-light underline cursor-pointer text-primary-600 hover:text-primary-500"
                        to={`${post.fields.slug}/`}
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
