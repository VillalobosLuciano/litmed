import React from "react"
import PropTypes from "prop-types"
import { ServiceTemplate } from "../../templates/service"

const ServicePreview = ({ entry, widgetFor }) => {
  return (
    <ServiceTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
      specialty={entry.getIn(["data", "specialty"])}
    />
  )
}

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicePreview