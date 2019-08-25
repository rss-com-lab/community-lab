import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      foto: file(relativePath: { eq: "foto.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      demon: file(relativePath: { eq: "demon.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <Layout>
      <Head title="Hello!" />
      
      <Img fluid={data.foto.childImageSharp.fluid} />
      <Img fluid={data.demon.childImageSharp.fluid} />
    </Layout>
  )
}

export default IndexPage