import React from 'react'
import View from './View'
import { getUser } from '../utils/auth'
import SEO from './SEO'
import List from './List'
import LockIcon from './SvgIcon/LockIcon'

const Profile = () => {
  const user = getUser()
  const { displayName, email, emailVerified } = user
  const accessToken = user.stsTokenManager.accessToken

  return (
    <>
      <SEO title="Profile" />
      <View headerTittle="Your Profile">
        <div className="p-8">
          <div className="shadow-xl rounded-lg">
            <div
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
              }}
              className="h-64 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center"
            >
              <p className="text-white font-bold text-4xl">
                <LockIcon className="w-8 float-left inline-block" />
                Members only
              </p>
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
                <h1 className="text-2xl font-bold text-gray-700">{`${displayName}`}</h1>
                <p className="text-sm text-gray-600">
                  {`${email}`}{' '}
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-teal-200 last:mr-0 mr-1">{`${emailVerified}`}</span>
                </p>
                <p className="mt-6 text-gray-700">{`${accessToken}`}</p>
                <div className="flex justify-around mt-8">
                  <i className="material-icons">chat</i>
                  <i className="material-icons">duo</i>
                  <i className="material-icons">location</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 flex items-center mb-4">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <p className="text-gray-700 text-base">
            <ul>
              <li>
                <div className="text-sm">
                  <b>Name</b>:
                </div>
                <div className="pl-2 ">{`${displayName}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>Email</b>:
                </div>
                <div className="pl-2 ">{`${email}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>Email Verified</b>:
                </div>
                <div className="pl-2 ">{`${emailVerified}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>Firebase Access Token</b>:
                </div>
                <div className="pl-2 truncate">{`${accessToken}`}</div>
              </li>
            </ul>
          </p>
        </div>
        <List />
      </View>
    </>
  )
}

export default Profile
