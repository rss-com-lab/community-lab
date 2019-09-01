import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

  return (
    <Layout>
      <Head title="Hello!" />
      {/* <Img fluid={data.foto.childImageSharp.fluid} /> */}
        <div id="section3">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      {/* <div>
        <Img fluid={data.demon.childImageSharp.fluid} />
      </div> */}
    </Layout>
  )
}

export default IndexPage