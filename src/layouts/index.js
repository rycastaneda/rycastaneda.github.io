import React from 'react'
import Helmet from 'react-helmet'
import styles from '../css/custom.module.css'
import Nav from './nav'

const Layout = ({ children, data }) => (
  <div className={styles.container}>
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
      <Nav title={data.name} />
      {children}
    </div>
  </div>
)

export default Layout

