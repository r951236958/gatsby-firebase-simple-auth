import React from 'react'

const List = () => {
  return (
    <div className="flex justify-center items-center md:-mx-4">
      <div className="bg-white w-1/2 rounded px-6">
        <div className="border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between my-4">
          <div className="font-semibold text-gray-800">Company Highlights</div>
          <div className="text-red-400">See all</div>
        </div>
        <hr className="-mx-6" />
        <div className="flex items-center justify-between my-4">
          <div className="w-16">
            <img
              className="w-12 h-12 rounded-full"
              src="https://source.unsplash.com/50x50/?nature"
              alt="nature"
            />
          </div>
          <div className="flex-1 pl-2">
            <div className="text-gray-700 font-semibold">PHP Developers</div>
            <div className="text-gray-600 font-thin">Web House</div>
          </div>
          <div className="text-red-400">20 Posts</div>
        </div>
        <hr className="boder-b-0 my-4" />
        <div className="flex items-center my-4">
          <div className="w-16">
            <img
              className="w-12 h-12 rounded-full"
              src="https://source.unsplash.com/50x50/?water"
              alt="water"
            />
          </div>
          <div className="flex-1 pl-2">
            <div className="text-gray-700 font-semibold">Designer</div>
            <div className="text-gray-600 font-thin">Web House</div>
          </div>
          <div className="text-red-400">300 Posts</div>
        </div>
        <hr className="boder-b-0 my-4" />
        <div className="flex items-center my-4">
          <div className="w-16">
            <img
              className="w-12 h-12 rounded-full"
              src="https://source.unsplash.com/50x50/?logo"
              alt="logo"
            />
          </div>
          <div className="flex-1 pl-2">
            <div className="text-gray-700 font-semibold">Data Entry</div>
            <div className="text-gray-600 font-thin">Web House</div>
          </div>
          <div className="text-red-400">30 Posts</div>
        </div>
      </div>
    </div>
  )
}

export default List
