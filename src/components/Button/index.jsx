//import Link from 'next/link'
import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { ButtonSize } from "../../utils/theme"

const Button = ({ size, type, color, icon, children, ...props }) => {
  return (
    <>
      <button
        className={classnames(
          `${icon ? `inline-flex items-center` : ``}`,
          ButtonSize[size],
          "bg-transparent font-bold border-2 border-solid uppercase px-3 py-2 rounded-lg outline-none focus:outline-none mr-1 duration-500 ease-in-out hover:scale-110",
          `${
            type === `outline`
              ? `text-${color}-500 hover:text-${color}-600 border-${color}-500 hover:border-${color}-600  hover:bg-${color}-500 hover:bg-opacity-20 active:bg-${color}-400`
              : `bg-${color}-600 hover:bg-${color}-50 hover:bg-opacity-90 border-${color}-500 hover:border-${color}-600 active:bg-${color}-600 active:border-${color}-600 text-white hover:text-${color}-600 `
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

Button.defaultProps = {
  size: "sm",
  type: "outline",
}

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
}

export default Button
