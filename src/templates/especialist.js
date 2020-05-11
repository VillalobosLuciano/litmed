import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import _get from 'lodash/get'
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Content"

export const EspecialistTemplate = ({
  content,
  contentComponent,
  description,
  tags,
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
        <Link to={`especialists/`}>Volver</Link>
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
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="space-y-4">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
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

EspecialistTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Especialist = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)

  return (
    <Layout>
      <EspecialistTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Especialist">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        nextPostURL={_get(thisEdge, "next.fields.slug")}
        prevPostURL={_get(thisEdge, "previous.fields.slug")}
      />
    </Layout>
  )
}

Especialist.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Especialist

export const pageQuery = graphql`
  query EspecialistByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }

    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "especialist" } } }
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
