import React from 'react'

export const ProfileCard2 = () => (
  <div className="p-8">
    <div className="shadow-xl rounded-lg">
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
        }}
        className="h-64 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center"
      >
        <p className="text-white font-bold text-4xl">Profile</p>
      </div>
      <div className="bg-white rounded-b-lg px-8">
        <div className="relative">
          <img
            className="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8"
            src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg"
            alt="Avatar of Jonathan Reinink"
          />
        </div>
        <div className="pt-8 pb-8">
          <h1 className="text-2xl font-bold text-gray-700">Link</h1>
          <p className="text-sm text-gray-600">From hyrule</p>
          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            sem varius, fringilla sapien at, sollicitudin risus.
          </p>
          <div className="flex justify-around mt-8">
            <i className="material-icons">chat</i>
            <i className="material-icons">duo</i>
            <i className="material-icons">location</i>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProfileCard2
