import React from 'react'
import styles from '../css/blogs.module.css'
import Blog from './Blog'

const Blogs = ({ blogs }) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>
                Blogs
            </h1>
            {blogs.map(blog =>
                <Blog key={blog.node.id} className={styles.blog} {...blog.node} />
            )}
        </div>
    </div>
)

export default Blogs