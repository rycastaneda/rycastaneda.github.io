import React from 'react'
import Blog from './Blog'

const Blogs = ({ blogs }) => (
    <div >
        <div >
            <h1>
                Blogs
            </h1>
            {blogs.map(blog =>
                <Blog key={blog.node.id}  {...blog.node} />
            )}
        </div>
    </div>
)

export default Blogs