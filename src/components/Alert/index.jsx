import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import outlineInfo from '@iconify-icons/ic/outline-info'

const Alert = ({ color }) => {
  return (
    <div className="block my-6">
      <div className="shadow" role="alert">
        <div className="flex">
          <div className={`bg-${color}-500 w-16 text-center p-2`}>
            <div className="flex justify-center h-full items-center">
              <Icon icon={outlineInfo} />
            </div>
          </div>
          <div className={`border-${color}-400 bg-white border-r-4 w-full p-4`}>
            <div>
              <p className="text-gray-600 font-bold">Information box</p>
              <p className="text-gray-600 text-sm">
                Your message has been send to Jack
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
