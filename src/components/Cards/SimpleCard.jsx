import React from 'react'

export const SimpleCard = () => (
  <div className="shadow p-4 bg-white">
    <div className="text-left">
      <h3 className="mb-2 text-gray-700">Card Title</h3>
      <p className="text-grey-600 text-sm">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.{' '}
      </p>
    </div>
    ​
    <div className="mt-4">
      <a
        href="/"
        className="no-underline mr-4 text-blue-500 hover:text-blue-400"
      >
        Link 1
      </a>
      <a
        href="/"
        className="no-underline mr-4 text-blue-500 hover:text-blue-400"
      >
        Link 2
      </a>
    </div>
  </div>
)

export default SimpleCard
