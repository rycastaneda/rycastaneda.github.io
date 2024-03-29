import { graphql } from "gatsby"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useState } from "react"
import Hero from "../components/Hero"
// import ContactCard from '../components/ContactCard'
import Projects from "../components/Projects"
import Layout from "../layouts"
import "../styles/styles.css"
import Challenge from "../components/Challenge"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

export default function Home({ data }) {
  const [theme] = useState("day")
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      `var(--${theme}-background-color)`
    )
    document.documentElement.style.setProperty(
      "--theme-accent-color",
      `(--${theme}-accent-color)`
    )
    document.documentElement.style.setProperty(
      "--gradient",
      `var(--${theme}-gradient)`
    )
    document.documentElement.style.setProperty(
      "--text-color",
      `(--${theme}-text-color)`
    )
  }, [theme])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
    })

    gsap.to(".challenges h1", {
      scrollTrigger: ".challenges",
      duration: 0.5,
      opacity: 1,
      y: "0%",
    })

    gsap.to(".projects h1", {
      scrollTrigger: ".projects",
      duration: 0.5,
      opacity: 1,
      y: "0%",
    })
  }, [])

  const projects = data.allMarkdownRemark.edges
  return (
    <Layout data={data.basic.value}>
      <Hero {...data.basic.value} />
      <Challenge
        challenges={projects.filter(
          project => !project.node.frontmatter.disabled && project.node.fileAbsolutePath.includes('challenges')
        )}
      />
      <Projects
        projects={projects.filter(
          project => !project.node.frontmatter.disabled && project.node.fileAbsolutePath.includes('clients')
        )}
      />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        intro_image
      }
    }
    basic {
      id
      value {
        profiles {
          network
          username
          url
        }
        email
        headline
        label
        name
        phone
        picture
        region
        summary
        username
        website
        yearsOfExperience
      }
    }
    allBlogPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          date(formatString: "MMMM Do, YYYY")
          excerpt
          slug
          title
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          html
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "YYYY")
            slug
            excerpt
            image_url
            background
            background_color
            class
            link
            stack
            disabled
          }
        }
      }
    }
  }
`
