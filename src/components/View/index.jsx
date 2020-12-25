import React from 'react'
import PropTypes from 'prop-types'
import styles from './view.module.css'

const View = ({ headerTittle, children }) => (
  <div className="w-full h-full lg:h-screen rounded px-8 pt-6 pb-8 mb-4">
    <div className="w-1/3"></div>
    <div className="bg-white dark:bg-gray-200 dark:bg-opacity-10 dark:text-gray-800 shadow-md rounded px-4 pt-6 pb-8 mb-4 md:mx-24 lg:mx-64">
      <h1 className="text-lg font-bold">{headerTittle}</h1>

      <div className="my-8">{children}</div>
    </div>
    <div className="w-1/3"></div>
  </div>
)

View.propTypes = {
  headerTittle: PropTypes.string.isRequired,
}

export default View
