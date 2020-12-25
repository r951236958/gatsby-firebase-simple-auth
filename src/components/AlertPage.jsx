import React from 'react'

const AlertPage = () => {
  return (
    <>
      <div className="flex bg-green-200 p-4">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-green-600 rounded-full flex justify-center items-center">
            <i className="material-icons">done</i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-green-600">
            <p className="mb-2 font-bold">Succes alert</p>
            <p className="text-xs">description text</p>
          </div>
          <div className="text-sm text-gray-500">
            <span>x</span>
          </div>
        </div>
      </div>
      {/* Info alert */}
      <div className="flex bg-blue-200 p-4">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-blue-600 rounded-full flex justify-center items-center">
            <i className="material-icons">info</i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-blue-600">
            <p className="mb-2 font-bold">Info alert</p>
            <p className="text-xs">description text</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>x</p>
          </div>
        </div>
      </div>
      {/* Warning alert */}
      <div className="flex bg-orange-200 p-4">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-orange-600 rounded-full flex justify-center items-center">
            <i className="material-icons">warning</i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-orange-600">
            <p className="mb-2 font-bold">Warning alert</p>
            <p className="text-xs">description text</p>
          </div>
          <div className="text-sm text-gray-500">
            <span>x</span>
          </div>
        </div>
      </div>
      {/* Danger alert */}
      <div className="flex bg-red-200 p-4">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-red-600 rounded-full flex justify-center items-center">
            <i className="material-icons">report</i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-red-600">
            <p className="mb-2 font-bold">Danger alert</p>
            <p className="text-xs">description text</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>x</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertPage
