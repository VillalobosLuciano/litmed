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
        to={`services/`}
      >
        « Ver todos los servicios
      </Link>
      <div className="mt-4 mb-1 sm:mt-8">
        <h3 className="mt-4 mb-1 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {title}
        </h3>
        <p className="text-sm font-semibold leading-6 tracking-wide uppercase text-primary-600">
          {specialty}
        </p>
      </div>

      <div className="mb-6 lg:flex">
        <div className="lg:w-2/3">
          <div className="mt-4 sm:mt-6 sm:mb-8">
            <h5 className="tracking-wide font-base text-primary-800">
              Descripción
            </h5>
            <p className="mt-1 mb-4 font-light">{description}</p>
            <h5 className="tracking-wide font-base text-primary-800">
              Objetivos y beneficios
            </h5>
            <PostContent className="pt-1 font-light" content={content} />
          </div>
        </div>

        <div className="justify-center pb-2 mt-6 lg:flex sm:mt-2 lg:w-1/3">
          <div>
            {specialists && specialists.length ? (
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
                      <path d="M16.835 0c-1.656 0-3 1.344-3 2.999s1.344 2.999 3 2.999c1.655 0 3-1.344 3-2.999s-1.345-2.999-3-2.999m0 1c1.103 0 2 .896 2 1.999 0 1.103-.897 2-2 2s-2-.897-2-2 .897-1.999 2-1.999m-9.669-1c-1.656 0-3 1.344-3 2.999s1.344 2.999 3 2.999c1.655 0 3-1.344 3-2.999s-1.345-2.999-3-2.999m0 1c1.103 0 2 .896 2 1.999 0 1.103-.897 2-2 2s-2-.897-2-2 .897-1.999 2-1.999m9.648 14.828c.694 0 1.231.524 1.277 1.245.05.741.172 2.201.28 3.489l.156 1.896c.02.251.164.542.508.542.404 0 .455-.425.46-.556l.472-11.447c.022-.512.701-.655.937-.222l1.645 2.977c.118.215.451.125.451-.117l-1.6-5.675c-.093-.335-.402-.567-.749-.567h-17.303c-.346 0-.655.232-.749.566l-1.59 5.61c-.022.402.364.326.442.183l1.645-2.977c.244-.439.916-.283.937.222l.471 11.448c.011.256.146.555.49.555.329 0 .497-.271.518-.541l.16-1.94c.107-1.277.227-2.712.277-3.448.047-.719.584-1.243 1.277-1.243.584 0 1.218.465 1.27 1.244.049.734.169 2.169.276 3.446l.16 1.94c.019.251.161.542.499.542.382 0 .439-.389.446-.556.122-2.956.629-12.29.635-12.384.014-.266.233-.473.499-.473h1.963c.266 0 .485.208.499.474.006.094.494 9.427.617 12.384.012.276.174.555.509.555.344 0 .49-.291.508-.541l.165-1.982c.105-1.266.223-2.679.272-3.406.052-.778.687-1.243 1.27-1.243m2.222 8.172c-.807 0-1.44-.616-1.506-1.465-.035-.455-.092-1.143-.155-1.889-.108-1.294-.231-2.761-.282-3.507-.015-.231-.154-.311-.279-.311-.079 0-.256.078-.272.31-.049.731-.168 2.15-.274 3.422-.066.779-.126 1.502-.163 1.976-.065.848-.698 1.464-1.504 1.464-.826 0-1.474-.65-1.511-1.513-.106-2.567-.489-9.954-.591-11.9h-1.015c-.105 1.944-.502 9.333-.608 11.899-.038.892-.631 1.514-1.444 1.514-.803 0-1.432-.616-1.497-1.465l-.16-1.934c-.107-1.283-.228-2.724-.277-3.462-.016-.233-.194-.311-.272-.311-.125 0-.265.081-.279.309-.05.74-.171 2.182-.278 3.465l-.16 1.934c-.065.848-.702 1.464-1.513 1.464-.827 0-1.453-.637-1.491-1.513l-.398-9.665-.78 1.413c-.323.584-1.088.781-1.573.538-.46-.195-.754-.637-.754-1.138 0-.115.016-.229.047-.339l1.59-5.609c.215-.762.919-1.294 1.711-1.294h17.303c.793 0 1.497.533 1.712 1.294l1.59 5.61c.031.109.047.223.047.338 0 .503-.297.947-.759 1.14l-.037.017c-.566.218-1.238-.028-1.53-.558l-.781-1.412-.398 9.664c-.038.892-.638 1.514-1.459 1.514" />{" "}
                    </svg>
                  </span>
                  <span className="ml-3 text-sm tracking-wide uppercase">
                    Especialistas
                  </span>
                </h5>

                <ul className="pt-4 space-y-3">
                  {specialists.map(specialist => (
                    <li key={specialist + `specialist`}>
                      <Link
                        className="px-4 py-2 font-light leading-6 transition duration-150 ease-in-out rounded-lg hover:bg-primary-200 text-primary-800 hover:text-primary-700"
                        to={`/specialists/${kebabCase(specialist)}/`}
                        state={{
                          modal: true,
                        }}
                      >
                        ‣ {specialist}
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

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  specialty: PropTypes.string,
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
        specialty={post.frontmatter.specialty}
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
        specialty
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
