import React from "react"
import firebase from "gatsby-plugin-firebase"
import { Link, navigate } from "gatsby"
import { Transition } from "@headlessui/react"
import { getUser, logout } from "../../utils/auth"

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { displayName, email, photoURL } = getUser()

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="ring-2 ring-gray-400 hover:ring-gray-100 shadow rounded-full focus:ring-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="inline-block h-8 w-8 rounded-full "
            src={photoURL}
            alt="Avatar"
          />
        </button>
      </div>
      {/*
              Dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
            */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-64 lg:max-w-xs rounded-md shadow-lg bg-white dark:bg-trueGray-700 dark:text-gray-100 ring-1 ring-gray-200 ring-opacity-5">
          <div className="p-4 border-b-1 border-gray-300">
            <div className="flex justify-center my-2">
              <img
                className="shadow w-12 h-12 lg:w-14 lg:h-14 rounded-full"
                src={photoURL}
                alt="Avatar"
              />
            </div>
            <div className="text-center my-2">
              <p className="text-gray-600 dark:text-gray-100 font-bold">
                {displayName}
              </p>
              <p className="text-sm font-hairline text-gray-500 dark:text-gray-100 mt-1">
                {email}
              </p>
            </div>
          </div>
          <div
            className="text-center pb-8"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/app/profile"
              className="block px-4 py-2 text-sm text-trueGray-700 dark:text-gray-100 hover:bg-trueGray-700 dark:hover:bg-gray-300 dark:hover:bg-opacity-300 hover:bg-opacity-10"
              role="menuitem"
            >
              Profile
            </Link>

            <Link
              to="/app/details"
              className="block px-4 py-2 text-sm text-trueGray-700 dark:text-gray-100 hover:bg-trueGray-700 dark:hover:bg-gray-300 dark:hover:bg-opacity-300 hover:bg-opacity-10"
              role="menuitem"
            >
              Details
            </Link>
            <div className="py-3 border-t-1 border-b-1 border-gray-300">
              <button
                type="button"
                href="/"
                className="block mx-auto text-center px-6 py-2 text-sm rounded text-trueGray-700 hover:text-red-700 dark:text-gray-100 dark:hover:text-gray-100 border-1 border-trueGray-700 dark:border-gray-300 hover:border-red-500 hover:bg-red-500 dark:hover:border-gray-100 dark:hover:bg-current hover:bg-opacity-10 dark:hover:bg-gray-300 dark:hover:bg-opacity-30 focus:outline-none"
                onClick={event => {
                  event.preventDefault()
                  logout(firebase).then(() => navigate(`/app/login`))
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default ProfileDropdown
