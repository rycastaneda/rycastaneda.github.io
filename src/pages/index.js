import React from "react"
import { graphql } from 'gatsby'
import Layout from '../layouts'
import IntroImage from '../components/intro-image'
import Blogs from '../components/Blogs'
import Projects from '../components/Projects'
import custom from '../css/custom.module.css'

export default function Home({ data }) {
  console.log('data', data);
  const {
    picture,
    name,
    email,
    label,
  } = data.basic.value

  const blogs = data.allBlogPost.edges
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout data={data.basic.value}>
      <IntroImage image={data.site.siteMetadata.intro_image} />
      <div className={`container ${custom.introwrapper}`}>
        <h1 className={custom.depth}>
          Welcome to my portfolio
        </h1>

        <div className={custom.introinfo}>
          <img className={custom.avatar} src={picture} alt=""></img>
          <div className={custom.info}>
            <h2 className={custom.depth}>
              {name}
            </h2>
            <p>
              {label}
            </p>
            <p>
              {email}
            </p>
          </div>
        </div>
      </div>
      <Blogs blogs={blogs} />
      <Projects projects={projects} />
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
  allBlogPost (sort: {fields: date, order: DESC}) {
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
  allMarkdownRemark (sort: {fields: frontmatter___class}, filter: {fileAbsolutePath: {regex: "/(clients)/"  }}) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "YYYY")
          slug
          excerpt
          image_url
          class
          link
        }
      }
    }
  }
}

`