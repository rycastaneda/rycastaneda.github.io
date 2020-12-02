import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
/**
 * Shadow me to add your own bio content
 */

const BioContent = () => {
  const data = useStaticQuery(authorQuery)

  const {
    site: {
      siteMetadata: { author },
    },
  } = data

  return (
    <Fragment>
      by <a href="http://rycastaneda.xyz/">{author}</a>.
      <br />

    </Fragment>
  )
}

export default BioContent

const authorQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`