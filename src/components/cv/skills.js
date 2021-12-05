import React from "react"
const Skills = ({ skills }) => {
  const skillsEl = skills.map((skill, i) => {
    return (
      <div
        key={i}
        className="rounded-full inline-block h-10 text-white px-3 pt-2 mb-1 mr-1 font-bold bg-gray-800"
      >
        {skill.node.name}
      </div>
    )
  })

  return (
    <div>
      <h1 className="font-bold font-mono my-4 text-2xl">Skills</h1>
      {skillsEl}
    </div>
  )
}

export default Skills
