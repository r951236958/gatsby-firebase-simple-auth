import React from 'react'

export const ProfileCard3 = () => (
  <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center">
    <div className="flex">
      <div className="mr-4">
        <img
          className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full"
          src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg"
          alt="Avatar"
        />
      </div>
      <div>
        <h1 className="text-xl font-medium text-gray-700">Link</h1>
        <p className="text-gray-600">UX Designer at Hyrule</p>
      </div>
    </div>
    <button className="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2">
      Follow
    </button>
  </div>
)

export default ProfileCard3
