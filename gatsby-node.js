const fetch = require('isomorphic-fetch')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const data = await fetch('https://gitconnected.com/v1/portfolio/rycastaneda')

    const resume = await data.json()

    actions.createNode({
        name: 'basics',
        id: createNodeId('basicinfo'),
        value: resume.basics,
        internal: {
            type: 'basic',
            contentDigest: createContentDigest(resume.basics),
        }
    })

    resume.skills.forEach(skill => {
        const node = {
            name: skill.name,
            id: createNodeId(`skill-${skill.name}`),
            internal: {
                type: "skill",
                contentDigest: createContentDigest(skill),
            },
        }
        actions.createNode(node)
    })

    resume.work.forEach(exp => {
        const node = {
            name: exp.name,
            id: createNodeId(`work-${exp.name}`),
            internal: {
                type: "work",
                contentDigest: createContentDigest(exp),
            },
        }
        actions.createNode(node)
    })

    resume.projects.forEach(project => {
        const node = {
            name: project.name,
            id: createNodeId(`project-${project.name}`),
            internal: {
                type: "project",
                contentDigest: createContentDigest(project),
            },
        }
        actions.createNode(node)
    })
}