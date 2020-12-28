import React from 'react'

export const ImageCard3 = () => (
  <div className="p-8">
    <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
      <div
        className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
        style={{ backgroundImage: 'url("")' }}
      ></div>
      <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
        Video Graphics
      </p>
    </div>
  </div>
)

export default ImageCard3
