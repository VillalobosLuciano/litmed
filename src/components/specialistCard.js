import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

class SpecialistCard extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <li
              className="flex flex-col mb-10 transition duration-300 ease-in-out rounded shadow-md md:mb-0 sm:hover:shadow-lg"
              style={{ maxWidth: 350 }}
              key={post.id}
            >
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `especialista ${post.frontmatter.title}`,
                }}
              />

              <div className="flex-grow px-6 py-4">
                <div className="text-xl font-bold text-gray-900">
                  {post.frontmatter.title}
                </div>
                <p className="mb-3 text-xs tracking-wide uppercase text-primary-700">
                  {post.frontmatter.specialty}
                </p>
                <p className="text-base font-light text-gray-600 line-clamp-3">
                  {post.frontmatter.description}
                </p>
              </div>

              <div className="flex justify-between px-6 py-3 space-x-4 bg-gray-100">
                <button className="w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md shadow-sm bg-primary-700 hover:bg-primary-500">
                  Agendar Hora
                </button>
                <Link
                  className="w-full px-4 py-2 text-sm font-medium text-center transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm text-primary-700 hover:text-primary-500 sm:text-sm"
                  to={ `${post.fields.slug}/`}
                >
                  Ver Más
                </Link>
              </div>
            </li>
          ))}
      </>
    )
  }
}

SpecialistCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SpecialistCardQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "specialist" } } }
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 350, maxHeight: 224, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SpecialistCard data={data} count={count} />}
  />
)
