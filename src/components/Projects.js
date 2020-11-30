import React from 'react'
import styles from '../css/project.module.css'
import Project from './Project'

const projects = ({ projects }) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>
                Projects
            </h1>
            <div className={styles.projectGrid}>
                {projects.map(project =>
                    <Project key={project.node.id}
                        className={styles.project}
                        {...project.node.frontmatter}
                        description={project.node.excerpt} />
                )}
            </div>
        </div>
    </div>
)

export default projects