import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Header'

// Global styles and component-specific styles.
import './global.css'
import styles from './main.module.css'

const Layout = ({ children }) => (
  <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
    <Helmet title="Gatsby Simple Firebase Authentication" />
    <Header />

    <main className={styles.main}>
      <div
        className="bg-contain bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://github.com/r951236958/nextjs-tailwindcss/blob/main/public/assets/img/register_bg_2.png?raw=true')",
        }}
      >
        {children}
      </div>
    </main>
  </div>
)

export default Layout
