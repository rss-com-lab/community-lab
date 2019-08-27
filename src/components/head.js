import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <title>{`${data.site.siteMetadata.title} | ${title}` }</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author}></meta>
      </Helmet>
    </div>
  )
}

export default Head