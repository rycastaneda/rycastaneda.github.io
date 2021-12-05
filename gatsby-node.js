const fetch = require("isomorphic-fetch")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const data = await fetch("https://gitconnected.com/v1/portfolio/rycastaneda")

  const resume = await data.json()

  actions.createNode({
    name: "basics",
    id: createNodeId("basicinfo"),
    value: resume.basics,
    internal: {
      type: "basic",
      contentDigest: createContentDigest(resume.basics),
    },
  })

  resume.skills.forEach(skill => {
    const node = {
      ...skill,
      id: createNodeId(`${skill.name}`),
      internal: {
        type: "Skill",
        contentDigest: createContentDigest(skill),
      },
    }
    actions.createNode(node)
  })

  resume.education.forEach(skill => {
    const node = {
      ...skill,
      id: createNodeId(`${skill.name}`),
      internal: {
        type: "Education",
        contentDigest: createContentDigest(skill),
      },
    }
    actions.createNode(node)
  })

  resume.work.forEach(exp => {
    console.log("exp", exp)
    const node = {
      ...exp,
      name: exp.name,
      id: createNodeId(`${exp.name}`),
      internal: {
        type: "Work",
        contentDigest: createContentDigest(exp),
      },
    }
    actions.createNode(node)
  })
}
