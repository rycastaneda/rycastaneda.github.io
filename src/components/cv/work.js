import React from "react"
const Work = ({ work }) => {
  const workEl = work.map((work, i) => {
    let url = work.node.website ? (
      <a href={work.node.website}>{work.node.company}</a>
    ) : null

    let highlights = work.node.highlights.map((highlight, i) => (
      <li key={i} className="list-disc">
        {highlight}
      </li>
    ))

    return (
      <div key={i}>
        <h1 className="font-bold text-2xl">{url}</h1>
        <h4 className="mt-4 text-gray-700">{work.node.position}</h4>
        <p className="italic mb-2 text-gray-700">
          {work.node.startDate} — {work.node.endDate || "present"}
        </p>
        <p>{work.node.summary}</p>
        <ul class="text-md font-mono pl-8 py-4">{highlights}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1 className="font-bold font-mono my-4 text-2xl">Work Experience</h1>
      {workEl}
    </div>
  )
}

export default Work
