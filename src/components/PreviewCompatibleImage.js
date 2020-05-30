import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { 
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  }
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} alt={alt} />
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} imgStyle={{ objectFit: 'contain' }} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
