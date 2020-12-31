import { Link, navigate } from "gatsby"
import { Transition } from "@headlessui/react"
import firebase from "gatsby-plugin-firebase"
import React from "react"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import AccountIcon from "../SvgIcon/AccountIcon"
import LoginIcon from "../SvgIcon/LoginIcon"
import ProfileDropdown from "../ProfileDropdown"

const Status = () => {
  const [openMenu, setMenuOpen] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const { displayName, email } = getUser()

  const handleMenuClick = () => {
    setMenuOpen(!openMenu)
  }

  const handleModalClick = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {}, [openMenu])

  return (
    <>
      {!isLoggedIn() ? (
        <>
          <Link
            to="/app/login"
            className="inline-flex items-center justify-center w-10 h-10 text-gray-100 transition-colors duration-150 rounded-lg bg-gray-400 bg-opacity-10 hover:bg-gray-100 hover:bg-opacity-10 focus:shadow-outline hover:text-gray-300"
          >
            <span className="sr-only">Login</span>
            <LoginIcon className="w-6 h-6 " />
          </Link>
        </>
      ) : (
        <ProfileDropdown />
      )}
    </>
  )
}

export default Status
