import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <div className="">
    <Helmet
      title={data.name}
      meta={[
        {
          name: 'description',
          content: data.summary,
        },
        { name: 'keywords', content: 'frontend dev, react, blog' },
      ]}
    />
    <div>
      {children}
    </div>
  </div>
)

export default Layout

