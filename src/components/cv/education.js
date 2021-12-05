import React from "react"
const Education = ({ education }) => {
  const EducationEl = education.map((school, i) => {
    return (
      <div key={i}>
        <h2 className="font-bold">{school.node.institution}</h2>
        <p className="italics mb-2">
          {school.node.startDate} — {school.node.endDate}
        </p>
        <p>
          {school.node.studyType} in {school.node.area}
        </p>
      </div>
    )
  })

  return (
    <div>
      <h1 className="font-bold font-mono my-4 text-2xl">Education</h1>
      {EducationEl}
    </div>
  )
}

export default Education
