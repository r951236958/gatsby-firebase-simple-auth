import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

const OutlineButton = ({ color, icon, children, ...props }) => {
  return (
    <>
      <button
        className={classnames(
          `${icon ? `flex items-center` : ``}`,
          "hidden sm:block bg-transparent hover:text-white py-2 sm:py-3 px-4 border hover:border-transparent rounded ml-2 sm:ml-4 focus:outline-none text-xs sm:text-sm",
          `${
            color
              ? ` hover:bg-${color}-800 text-${color}-600 border-${color}-400`
              : ``
          }`
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    </>
  )
}

OutlineButton.defaultProps = {
  color: "gray",
}

OutlineButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
}

export default OutlineButton
