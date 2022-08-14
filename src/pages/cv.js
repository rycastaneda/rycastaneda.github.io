import React from "react"
import Education from "../components/cv/education"
import Intro from "../components/cv/intro"
import Skills from "../components/cv/skills"
import Work from "../components/cv/work"
import Layout from "../layouts"
const CV = ({ data }) => {
  return (
    <Layout data={data.basic.value}>
      <div className="container mx-auto min-h-screen pt-8 pb-20">
        <div className="grid grid-cols-side gap-2 pl-4">
          <div>
            <Intro basics={data.basic.value}></Intro>
            <hr className="border-t-2 h-px mt-4" />
            <Skills skills={data.allSkill.edges}></Skills>
            <hr className="border-t-2 h-px mt-4" />
            <Education education={data.allEducation.edges}></Education>
            <hr className="border-t-2 h-px my-4" />
            <div className="my-4">
              <a
                href={"https://gitconnected.com/rycastaneda/resume"}
                rel="noreferrer"
                target="_blank"
                className="bg-gray-800 text-white py-2 px-4 mb-12"
              >
                <i className="bi bi-download"></i> Download as PDF
              </a>
            </div>
          </div>
          <div className="ml-8">
            <Work work={data.allWork.edges}></Work>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CV

export const query = graphql`
  query CvData {
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
    allSkill {
      edges {
        node {
          name
          level
          rating
          yearsOfExperience
        }
      }
    }
    allEducation {
      edges {
        node {
          institution
          startDate
          endDate
          studyType
          area
        }
      }
    }
    allWork {
      edges {
        node {
          name
          company
          website
          highlights
          position
          summary
          startDate
          endDate
        }
      }
    }
  }
`
