import React from 'react'
import styles from '../css/project.module.css'

const Project = ({ title, link, date, image_url, description }) => (
    <article className={styles.project}>
        <header>
            <h2 class="font-bold py-2">
                <a href={link}>
                    <img src={image_url} alt=""></img>
                    {title || link}
                </a>
            </h2>
        </header>
        <section>
            <p>{description}</p>
        </section>
        <small>{date}</small>

    </article>
)

export default Project
