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
  nextPostURL,
  prevPostURL,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="">
      {helmet || ""}
      <div className="p-6">
        <Link to={`specialists/`}>Volver</Link>
        <div className="flex">
          <div className="">
            <h1 className="font-semibold">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
            <div className="">
              {prevPostURL && (
                <Link className="" to={prevPostURL}>
                  Previous Post
                </Link>
              )}
              {nextPostURL && (
                <Link className="" to={nextPostURL}>
                  Next Post
                </Link>
              )}
            </div>

            {services && services.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>services</h4>
                <ul className="">
                  {services.map(service => (
                    <li key={service + `service`}>
                      <Link to={`/services/${kebabCase(service)}/`}>
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

SpecialistTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
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
