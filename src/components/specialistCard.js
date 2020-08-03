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
              className="w-full max-w-sm mb-6 transition duration-300 ease-in-out border rounded cursor-pointer lg:max-w-full lg:flex md:mb-0 sm:hover:border-primary-500 sm:hover:shadow-lg"
              key={post.id}
            >
              <Link
                state={{
                  modal: true,
                }}
                className="flex justify-center pt-4 lg:pt-0"
                to={`${post.fields.slug
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}/`}
              >
                <div className="flex-none object-fill w-32 h-32 overflow-hidden text-center border rounded-full border-primary-500 lg:border-0 lg:min-h-full lg:w-32 lg:rounded-none lg:rounded-l">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `especialista ${post.frontmatter.title}`,
                    }}
                  />
                </div>
              </Link>
              <Link
                state={{
                  modal: true,
                }}
                to={`${post.fields.slug
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}/`}
              >
                <div className="flex-grow p-4 text-center lg:text-left">
                  <div className="text-xl font-bold text-gray-900">
                    {post.frontmatter.title}
                  </div>
                  <p className="mb-3 text-xs tracking-wide uppercase text-primary-700">
                    {post.frontmatter.specialty}
                  </p>
                  <p className="mb-2 text-sm font-light text-gray-600 line-clamp-4">
                    {post.frontmatter.description}
                  </p>
                </div>
              </Link>
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
                    fluid(maxWidth: 335, quality: 100) {
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
