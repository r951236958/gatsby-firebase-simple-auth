import React from 'react'

export const InfoCard2 = () => (
  <div className="bg-white text-gray-700 rounded text-center">
    <div className="flex justify-center">
      <div className="bg-white rounded-full h-16 w-16 -mt-8 flex items-center justify-center">
        <i className="material-icons text-blue-500 text-4xl">contact_support</i>
      </div>
    </div>
    <div className="mt-6">
      <h1 className="text-xl text-blue-500 font-bold">Support</h1>
      <p className="mt-1 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <a href="#" className="no-underline">
      <div className="mt-8 p-2 bg-gray-200 text-gray-600 font-bold hover:bg-gray-300 hover:text-gray-700">
        Contact Support
      </div>
    </a>
  </div>
)

export default InfoCard2
