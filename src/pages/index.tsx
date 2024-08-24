import { graphql, PageProps } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Layout from "../layouts";
import "../styles/styles.css";
import Challenge from "../components/Challenge";

// Register GSAP plugin only in the browser
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

// Define the types for the GraphQL query results
interface MarkdownRemarkNode {
  id: string;
  html: string;
  fileAbsolutePath: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    image_url?: string;
    background?: string;
    background_color?: string;
    class?: string;
    link?: string;
    stack?: string;
    disabled?: boolean;
  };
}

interface DataProps {
  allMarkdownRemark: {
    edges: {
      node: MarkdownRemarkNode;
    }[];
  };
  basic: {
    value: {
      profiles: {
        network: string;
        username: string;
        url: string;
      }[];
      email: string;
      headline: string;
      label: string;
      name: string;
      phone: string;
      picture: string;
      region: string;
      summary: string;
      username: string;
      website: string;
      yearsOfExperience: number;
    };
  };
}

// Define the component props
type HomeProps = PageProps<{
  site: {
    siteMetadata: {
      intro_image: string;
    };
  };
  basic: {
    value: {
      profiles: {
        network: string;
        username: string;
        url: string;
      }[];
      email: string;
      headline: string;
      label: string;
      name: string;
      phone: string;
      picture: string;
      region: string;
      summary: string;
      username: string;
      website: string;
      yearsOfExperience: number;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: MarkdownRemarkNode;
    }[];
  };
}>;

const Home: React.FC<HomeProps> = ({ data }) => {
  const [theme] = useState<string>("day");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      `var(--${theme}-background-color)`
    );
    document.documentElement.style.setProperty(
      "--theme-accent-color",
      `var(--${theme}-accent-color)`
    );
    document.documentElement.style.setProperty(
      "--gradient",
      `var(--${theme}-gradient)`
    );
    document.documentElement.style.setProperty(
      "--text-color",
      `var(--${theme}-text-color)`
    );
  }, [theme]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
    });

    gsap.to(".challenges h1", {
      scrollTrigger: ".challenges",
      duration: 0.5,
      opacity: 1,
      y: "0%",
    });

    gsap.to(".projects h1", {
      scrollTrigger: ".projects",
      duration: 0.5,
      opacity: 1,
      y: "0%",
    });
  }, []);

  const projects = data.allMarkdownRemark.edges;

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
  );
};

export default Home;

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
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC }}]
    ) {
      edges {
        node {
          id
          html
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "YYYY")
            image_url
            background
            background_color
            class
            link
            stack
            disabled
          }
          excerpt
        }
      }
    }
  }
`;
