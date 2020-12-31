import React from "react"

export const Modal02 = () => (
  <div className="relative max-w-xs bg-white rounded-lg py-8 shadow-lg flex flex-col items-center justify-center">
    <button className="w-8 ml-auto mt-2 absolute right-0 top-0">
      <i className="material-icons text-gray-500 hover:text-gray-700">
        highlight_off
      </i>
    </button>
    <div className="w-16 h-16 bg-blue-400 rounded-full flex justify-center items-center">
      <i className="material-icons text-white">done</i>
    </div>
    <p className="text-blue-400 font-bold mt-5">Thank you,</p>
    <p className="text-xs text-center text-gray-600 mt-1">
      Lorem ipsum dolor sit amet.
    </p>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      style={{
        backgroundImage: "linear-gradient(to right, #4facfe 0%,#4ad5ff 100%)",
      }}
    >
      continue
    </button>
  </div>
)

export default Modal02
