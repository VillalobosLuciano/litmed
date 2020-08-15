import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { FaTimes } from "react-icons/fa"

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          <button className="absolute bottom-0 right-0 m-3 lg:m-6 focus:outline-none">
            <Link to={closeTo}>
              <FaTimes className="w-8 h-8 text-white transition-colors duration-200 fill-current hover:text-primary-500" />
            </Link>
          </button>
          <div className="bg-red-600">
              
            <div className="mx-auto bg-orange-400">{children}</div>
          </div>
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
