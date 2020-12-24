import { navigate, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { getUser, isLoggedIn, logout } from '../../utils/auth'
import firebase from 'gatsby-plugin-firebase'

const Navbar = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = React.useState(false)

  let details
  if (!isLoggedIn()) {
    details = (
      <button className="inline-flex items-center px-3 py-2 border rounded text-gray-200 border-darkcyan-400 hover:text-white hover:border-white">
        <Link to="/app/login">
          <u>Log in</u>
        </Link>
      </button>
    )
  } else {
    const { displayName, email } = getUser()
    details = (
      <div className="inline-block text-right px-5">
        Logged in as {displayName} ({email}
        )!
        {` `}
        <button
          className="inline-flex items-center px-3 py-2 border rounded text-gray-200 border-darkcyan-400 hover:text-white hover:border-white"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            logout(firebase).then(() => navigate(`/app/login`))
          }}
        >
          <u>log out</u>
        </button>
      </div>
    )
  }

  return (
    <nav className="top-0 fixed z-50 w-full flex items-center justify-between flex-wrap bg-blueGray-600 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link className="font-semibold text-sm tracking-tight" to="/">
          Gatsby Firebase Auth
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-darkcyan-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">{details}</li>
          <li className="nav-item">
            <Link to="/app/profile">
              <a class="px-3 py-2 inline-flex items-center text-xs uppercase font-bold text-white hover:text-darkcyan-200 hover:opacity-75">
                Profile
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <a class="px-3 py-2 inline-flex items-center text-xs uppercase font-bold text-white hover:opacity-75">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="#download"
              className="px-3 py-2 inline-flex items-center text-xs border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white"
            >
              Download
            </a>
          </li>

          <li className="nav-item mr-2">
            <button
              className="inline-flex items-center text-xs text-gray-100 hover:text-gray-200 bg-gray-700 hover:bg-gray-400 rounded-full focus:outline-none p-2"
              id="user-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 448 512">
                <path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
