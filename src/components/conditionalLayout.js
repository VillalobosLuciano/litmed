import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { FaTimes } from "react-icons/fa"

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          {children}
          <button className="absolute top-0 right-0 mt-20 mr-2 lg:m-24 focus:outline-none">
            <Link to={closeTo}>
              <FaTimes className="w-8 h-8 text-white transition-colors duration-200 fill-current hover:text-primary-500" />
            </Link>
          </button>
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
