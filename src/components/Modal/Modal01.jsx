import React from "react"

export const Modal01 = () => (
  <div className="p-8">
    <div className="bg-white rounded-lg shadow-xl max-w-sm">
      <div className="h-64 bg-blue-500 flex justify-center items-center rounded-t-lg">
        <div className="h-24 w-24 bg-white rounded-full flex justify-center items-center">
          <i className="material-icons text-blue-500">done</i>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="fill-current"
      >
        <path
          fill="#4299E1"
          fillOpacity={1}
          d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,112C1120,96,1280,
96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,
640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
      <div className="p-8 -mt-12">
        <p className="font-bold text-center text-4xl text-gray-700">
          Thank you
        </p>
        <p className="text-gray-600 text-center mt-5">
          Your order has been placed. We'll send you an email.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Modal01
