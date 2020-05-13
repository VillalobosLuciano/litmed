import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import _get from "lodash/get"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Content"

export const ServiceTemplate = ({
  content,
  contentComponent,
  description,
  specialists,
  title,
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
        to={`services/`}
      >
        « Ver todos los servicios
      </Link>
      <div className="mt-4 mb-1 sm:mt-8">
        <h3 className="mt-4 mb-1 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {title}
        </h3>
        <p className="text-sm font-semibold leading-6 tracking-wide uppercase text-primary-600">
          Kinesiología
        </p>
      </div>

      <div class="sm:flex mb-6">
        <div class="sm:w-2/3">
          <div className="mt-4 sm:mt-6 sm:mb-8">
            <h5 className="font-bold tracking-wide sm:pb-1 text-secondary-700">Descripción</h5>
            <p className="mt-1 mb-4">{description}</p>
            <h5 className="font-bold tracking-wide sm:pb-1 text-secondary-700">Beneficios</h5>
            <PostContent className="pt-1" content={content} />
          </div>
        </div>

        <div class="sm:flex pb-2 sm:mt-2 sm:w-1/3 justify-center">
          <div>
            {specialists && specialists.length ? (
              <div className="pt-4">
                <h5 className="font-bold tracking-wide sm:pb-1 text-secondary-700">Especialistas</h5>
                <ul className="pt-1 space-y-2">
                  {specialists.map(specialist => (
                    <li key={specialist + `specialist`}>
                      <Link
                        className="underline text-secondary-600 hover:text-primary-600"
                        to={`/specialists/${kebabCase(specialist)}/`}
                      >
                        {specialist}
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
            to={prevPostURL}
          >
            « Anterior
          </Link>
        )}
        {nextPostURL && (
          <Link
            className="underline text-secondary-600 hover:text-primary-600"
            to={nextPostURL}
          >
            Siguiente »
          </Link>
        )}
      </div>
    </div>
  )
}

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Service = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)

  return (
    <Layout>
      <ServiceTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Service">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        specialists={post.frontmatter.specialists}
        title={post.frontmatter.title}
        nextPostURL={_get(thisEdge, "next.fields.slug")}
        prevPostURL={_get(thisEdge, "previous.fields.slug")}
      />
    </Layout>
  )
}

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Service

export const pageQuery = graphql`
  query ServiceByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        specialists
      }
    }

    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "service" } } }
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
