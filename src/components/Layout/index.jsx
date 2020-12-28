import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

//import Header from '../Header'
import Navbar from '../Navbar'

import styles from './main.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Helmet title="Gatsby Simple Firebase Authentication" />
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main className={styles.main}>
        <div>{children}</div>
      </main>
    </div>
  )
}
export default Layout
