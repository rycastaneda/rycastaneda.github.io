import React, { useEffect, useState } from "react"
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Hero from '../components/Hero'
// import ContactCard from '../components/ContactCard'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Nbl from '../components/Nbl'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import '../styles/styles.css'


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

export default function Home({ data }) {
  const {
    picture,
    name,
    email,
    label,
  } = data.basic.value
  const [theme, setTheme] = useState('day')
  useEffect(() => {
    console.log('theme', theme);
    document.documentElement.style.setProperty('--background-color', `var(--${theme}-background-color)`);
    document.documentElement.style.setProperty('--theme-accent-color', `(--${theme}-accent-color)`);
    document.documentElement.style.setProperty('--gradient', `var(--${theme}-gradient)`);
    document.documentElement.style.setProperty('--text-color', `(--${theme}-text-color)`);
    
  }, [theme])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause"
    });


    gsap.to(".nbl-description p", {
      scrollTrigger: ".nbl-container", 
      duration: 0.5,
      opacity: 1, 
      y: '0%',
    });
  }, [])

  
  const blogs = data.allBlogPost.edges
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout data={data.basic.value}>
      <Hero {...data.basic.value}/>
      <Nbl/>
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