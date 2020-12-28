import React from 'react'
import { createPopper } from '@popperjs/core'
import PropTypes from 'prop-types'

const Popover = ({ color, btnText, popTitle, popText, el }) => {
  const [popoverShow, setPopoverShow] = React.useState(false)
  const btnRef = React.createRef()
  const popoverRef = React.createRef()

  const openPopover = () => {
    new createPopper(btnRef.current, popoverRef.current, {
      placement: el === 'bottom' ? 'bottom' : el,
    })
    setPopoverShow(true)
  }
  const closePopover = () => {
    setPopoverShow(false)
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className={
              'bg-' +
              color +
              '-500 text-white active:bg-' +
              color +
              '-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
            }
            type="button"
            style={{ transition: 'all .15s ease' }}
            onClick={() => {
              popoverShow ? closePopover() : openPopover()
            }}
            ref={btnRef}
          >
            {btnText}
          </button>
          <div
            className={
              (popoverShow ? '' : 'hidden ') +
              'bg-' +
              color +
              '-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  'bg-' +
                  color +
                  '-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg'
                }
              >
                {popTitle}
              </div>
              <div className="text-white p-3">{popText}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Popover.propTypes = {
  color: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  popTitle: PropTypes.element,
  popText: PropTypes.element,
  el: PropTypes.string,
}

Popover.defaultProps = {
  color: 'blue',
  btnText: 'Button',
  popTitle: 'Popover Title',
  popText: 'Popover Text',
  el: 'bottom',
}

export default Popover
