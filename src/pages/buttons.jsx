import { Menu, Transition } from "@headlessui/react"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import MenuLeftIcon from "../components/SvgIcon/MenuLeftIcon"
import View from "../components/View"

const navLinks = [
  {
    linkTitle: "About",
    href: "/about",
  },
  {
    linkTitle: "Cards",
    href: "/cards",
  },
  {
    linkTitle: "Test",
    href: "/test",
  },
]

const Buttons = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Layout>
      <SEO title="Buttons" />
      <View headerTittle="Button Example">
        <div className="grid lg:grid-cols-1 gap-6">
          <div className="flex flex-col lg:flex-rowitems-center justify-center">
            <div className="m-3">
              <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  />
                </svg>
              </button>
            </div>
            <div className="m-3">
              <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  />
                </svg>
              </button>
            </div>
            <div className="m-3">
              <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">Wait</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-600 my-4">
          <Menu>
            <Menu.Button>
              <MenuLeftIcon className="block h-6 w-6" />
            </Menu.Button>
            <Menu.Items>
              <Menu.Item>
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-10 active:bg-gray-900 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-10 active:bg-gray-900 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  About
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/buttons"
                  className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-10 active:bg-gray-900 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Buttons
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <>
          {/* This example requires Tailwind CSS v2.0+ */}
          <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed. */}
                    {/*
      Heroicon name: menu

      Menu open: "hidden", Menu closed: "block"
    */}
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    {/* Icon when menu is open. */}
                    {/*
      Heroicon name: x

      Menu open: "block", Menu closed: "hidden"
    */}
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href="#"
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Dashboard
                      </a>
                      <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Team
                      </a>
                      <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Projects
                      </a>
                      <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Calendar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    {/* Heroicon name: bell */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </button>
                    </div>
                    {/*
      Profile dropdown panel, show/hide based on dropdown state.

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
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
            {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
            <div className="hidden sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>
              </div>
            </div>
          </nav>
        </>
        <div className="block">
          <div className="flex flex-wrap flex-col">
            <div className="flex flex-wrap">
              <button className="bg-transparent hover:bg-gray-400 text-gray-dark font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-blue-400 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-teal-400 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-green-400 text-green-dark font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-yellow-400 text-yellow-dark font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-orange-400 text-orange-dark font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-red-400 text-red-dark font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-pink-400 text-pink-dark font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded mr-2">
                Button
              </button>
            </div>
            <div className="flex flex-wrap mt-2">
              <button className="bg-transparent hover:bg-grey-400 text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-blue-400 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-teal-400 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-green-400 text-green-dark font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-yellow-400 text-yellow-dark font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-orange-400 text-orange-dark font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-red-400 text-red-dark font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="bg-transparent hover:bg-pink-400 text-pink-dark font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded-full mr-2">
                Button
              </button>
              <button className="btn">Button</button>
            </div>
          </div>
        </div>
      </View>
    </Layout>
  )
}

export default Buttons
