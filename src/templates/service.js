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
    <section className="">
      {helmet || ""}
      <div className="p-6">
        <Link to={`services/`}>Volver</Link>
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

            {specialists && specialists.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>specialists</h4>
                <ul className="">
                  {specialists.map(specialist => (
                    <li key={specialist + `specialist`}>
                      <Link to={`/specialists/${kebabCase(specialist)}/`}>
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
    </section>
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
