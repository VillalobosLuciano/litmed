import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export default ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "background.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = [
        `linear-gradient(to bottom, rgba(6, 148, 102, 0.65), rgba(6, 148, 162, 1))`,
        data.desktop.childImageSharp.fluid       
      ]
      return (
        <BackgroundImage
          backgroundColor={"#000"}
          id={className}
          fluid={imageData}
          Tag="section"
          style={{           
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <div className="">
            {children}
          </div>
        </BackgroundImage>
      );
    }}
  />
);