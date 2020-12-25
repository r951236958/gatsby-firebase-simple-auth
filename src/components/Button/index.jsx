//import Link from 'next/link'
import PropTypes from 'prop-types'
import { ButtonSize, ButtonColor } from '../../utils/theme'
import React from 'react'
import classnames from 'classnames'

const Button = ({ size, variant, type, color, icon, children, ...props }) => {
  return (
    <>
      <button
        className={classnames(
          `${icon ? `inline-flex` : `flex`}`,
          ButtonSize[size],
          'items-center px-3 py-2 shadow rounded-xl',
          `${
            variant === `outline`
              ? `text-${color}-500 hover:text-${color}-400 hover:bg-${color}-100 hover:bg-opacity-10 border-2 border-${color}-500 hover:border-${color}-400`
              : `${ButtonColor[color]}  items-center px-3 py-2 shadow rounded-xl`
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
  size: 'lg',
  type: 'default',
}

Button.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.oneOf(['outline', 'default']),
  color: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
}

export default Button
