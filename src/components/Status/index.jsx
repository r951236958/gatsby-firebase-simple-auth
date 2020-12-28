import React from 'react'
import { navigate, Link } from '@reach/router'
import { getUser, isLoggedIn, logout } from '../../utils/auth'
import firebase from 'gatsby-plugin-firebase'
import LoginIcon from '../SvgIcon/LoginIcon'
import AccountIcon from '../SvgIcon/AccountIcon'

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <Link
        className="inline-flex items-center justify-center w-10 h-10 text-gray-100 transition-colors duration-150 rounded-lg bg-gray-400 bg-opacity-10 hover:bg-gray-100 hover:bg-opacity-10 focus:shadow-outline hover:text-gray-300"
        to="/app/login"
      >
        <span className="sr-only">Login</span>
        <LoginIcon className="w-6 h-6 " />
      </Link>
    )
  } else {
    const { displayName, email } = getUser()
    const [openMenu, setMenuOpen] = React.useState(false)

    const handleMenuClick = () => {
      setMenuOpen(!openMenu)
    }
    details = (
      <>
        <div>
          <button
            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <span className="sr-only">Open user menu</span>
            <AccountIcon className="h-8 w-8" />
          </button>
        </div>

        <div
          className={
            (openMenu ? '' : 'hidden ') +
            'origin-top-right absolute right-0 mt-2 lg:w-64 rounded-md shadow-lg p-4 bg-white ring-1 ring-black ring-opacity-5'
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <div className="flex justify-center my-2">
            <img
              className="shadow w-12 h-12 lg:w-14 lg:h-14 rounded-full"
              src="../images/dog-illustration.svg"
              alt="Avatar"
            />
          </div>
          <div className="text-center my-2">
            <p className="text-gray-600 font-bold">{displayName}</p>
            <p className="text-sm font-hairline text-gray-500 mt-1">{email}</p>
          </div>
          <div className="my-4 flex flex-col text-center border-t-1 divide-y">
            <Link
              to="/app/profile"
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:bg-opacity-10"
              role="menuitem"
            >
              Profile
            </Link>
          </div>
          <div className="my-4">
            <button
              type="button"
              href="/"
              className="w-full text-center px-4 py-2 text-sm rounded border-1 border-gray-700 hover:border-red-500 hover:bg-red-500 hover:bg-opacity-10 text-gray-700 hover:text-red-700 focus:outline-none"
              onClick={(event) => {
                event.preventDefault()
                logout(firebase).then(() => navigate(`/app/login`))
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </>
    )
  }

  return <div>{details}</div>
}
