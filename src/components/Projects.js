import React from "react"
import Project from "./Project"

const projects = ({ projects }) => (
  <div className="">
    <div className="">
      <h1>Projects</h1>
      <div className="">
        {projects.map(project => (
          <Project
            key={project.node.id}
            className=""
            {...project.node.frontmatter}
            description={project.node.excerpt}
          />
        ))}
      </div>
    </div>
  </div>
)

export default projects
