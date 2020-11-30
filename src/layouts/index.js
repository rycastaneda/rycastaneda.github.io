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
          content: 'This is a sample website for the Gatsby crash course',
        },
        { name: 'keywords', content: 'gatsby, react, tutorial' },
      ]}
    />
    <div>
      <Nav title={data.name} />
      {children}
    </div>
  </div>
)

export default Layout

