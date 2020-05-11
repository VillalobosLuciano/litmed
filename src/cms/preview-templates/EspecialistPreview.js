import React from "react"
import PropTypes from "prop-types"
import { EspecialistTemplate } from "../../templates/especialist"

const EspecialistPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"])
  return (
    <EspecialistTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  )
}

EspecialistPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EspecialistPreview
