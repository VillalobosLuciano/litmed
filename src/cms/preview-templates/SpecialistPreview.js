import React from "react"
import PropTypes from "prop-types"
import { SpecialistTemplate } from "../../templates/specialist"

const SpecialistPreview = ({ entry, widgetFor }) => {
  return (
    <SpecialistTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
    />
  )
}

SpecialistPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SpecialistPreview
