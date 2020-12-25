import React from 'react'

export const ProfileCard = () => (
  <div className="bg-white shadow p-4 rounded lg:w-64">
    <div className="text-center mt-4">
      <p className="text-gray-600 font-bold">Name</p>
      <p className="text-sm font-hairline text-gray-600 mt-1">Subtitle</p>
    </div>
    <div className="flex justify-center mt-4">
      <img
        className="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full"
        src
        alt="Avatar"
      />
    </div>
    <div className="mt-6 flex justify-between text-center">
      <div>
        <p className="text-gray-700 font-bold">20</p>
        <p className="text-xs mt-2 text-gray-600 font-hairline">Posts</p>
      </div>
      <div>
        <p className="text-gray-700 font-bold">99k</p>
        <p className="text-xs mt-2 text-gray-600 font-hairline">Likes</p>
      </div>
      <div>
        <p className="text-gray-700 font-bold">530</p>
        <p className="text-xs mt-2 text-gray-700 font-hairline">Shares</p>
      </div>
    </div>
    <div className="mt-6">
      <button className="rounded w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
        Follow
      </button>
    </div>
  </div>
)

export default ProfileCard
