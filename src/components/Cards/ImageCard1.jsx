import React from 'react'

export const ImageCard1 = () => (
  <div className="shadow bg-white">
    <div
      className=" bg-size bg-cover bg-center"
      style={{ backgroundImage: 'url("")' }}
    >
      <div className="p-4 h-32 flex items-end text-white">
        <h3 className="mb-2">Card Title</h3>
      </div>
    </div>
    <div className="p-4">
      <p className="text-grey-600 text-sm">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.{' '}
      </p>
      <div className="mt-4">
        <a
          href="/"
          className="no-underline mr-4 text-blue-500 hover:text-blue-400"
        >
          Link 1
        </a>
      </div>
    </div>
  </div>
)

export default ImageCard1
