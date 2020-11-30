import { Link } from "gatsby"
import React from 'react'
const Blog = ({ title, slug, date, excerpt }) => (
    <article>
        <header>
            <h2>
                <Link to={slug}>
                    {title || slug}
                </Link>
            </h2>
            <small>{date}</small>
        </header>
        <section>
            <p>{excerpt}</p>
        </section>
    </article>
)

export default Blog
