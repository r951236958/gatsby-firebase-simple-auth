import React from 'react'
import PropTypes from 'prop-types'

const View = ({ headerTittle, children }) => (
  <div
    className="bg-contain bg-center bg-scroll bg-repeat-y"
    style={{
      backgroundImage:
        "url('https://github.com/r951236958/nextjs-tailwindcss/blob/main/public/assets/img/register_bg_2.png?raw=true')",
    }}
  >
    <div className="w-full h-full bg-gray-200 bg-opacity-10 lg:h-screen rounded px-8 pt-6 pb-8 mb-4">
      <div className="w-1/3"></div>
      <div className="view bg-gray-100 text-gray-800 shadow-md rounded px-4 pt-6 pb-8 mb-4 md:mx-24 lg:mx-64">
        <h1 className="text-lg font-bold">{headerTittle}</h1>

        <div className="my-8">{children}</div>
      </div>
      <div className="w-1/3"></div>
    </div>
  </div>
)

View.propTypes = {
  headerTittle: PropTypes.string.isRequired,
}

export default View
