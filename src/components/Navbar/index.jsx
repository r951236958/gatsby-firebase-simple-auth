import { Menu } from "@headlessui/react"
import { Link } from 'gatsby'
import React from 'react'
import Status from '../Status'
import CloseIcon from '../SvgIcon/CloseIcon'
import GatsbyIcon from '../SvgIcon/GatsbyIcon'
import GatsbyLogoIcon from '../SvgIcon/GatsbyLogoIcon'
import MenuLeftIcon from '../SvgIcon/MenuLeftIcon'
import NotificationsIcon from '../SvgIcon/NotificationsIcon'

const navLinks = [
  {
    linkTitle: 'About',
    href: '/about',
  },
  {
    linkTitle: 'Cards',
    href: '/cards',
  },
  {
    linkTitle: 'Test',
    href: '/test',
  },
]

export default function Navbar({ siteTitle }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const handleNavbarClick = () => {
    setNavbarOpen(!navbarOpen)
  }

  const handleNavbarClose = () => {
    setNavbarOpen(null)
  }

  React.useEffect(() => {}, [navbarOpen])

  return (
    <>
      <nav className="bg-blueGray-700">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Menu>
            <Menu.Button>
              <MenuLeftIcon className="block h-6 w-6" />
            </Menu.Button>
            <Menu.Items>
              <div className="px-2 pt-2 pb-3 space-y-1 divide-y">
            
            {navLinks.map(({ href, linkTitle } ) => (
              <Menu.Item key={linkTitle}>
                <Link
                  
                      to={href}
                  className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-10 active:bg-gray-900 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  {linkTitle}
                </Link>
              </Menu.Item>
              ))}
          
            
            </div>
            
            </Menu.Items>
          </Menu>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:ring-opacity-50"
                aria-expanded="false"
                onClick={handleNavbarClick}
              >
                <span className="sr-only">Open main menu</span>

                <MenuLeftIcon
                  className={(!navbarOpen ? 'block ' : 'hidden ') + 'h-6 w-6'}
                />
                <CloseIcon
                  className={(!navbarOpen ? 'hidden ' : 'block ') + 'h-6 w-6'}
                />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <GatsbyIcon className="block lg:hidden h-8 w-auto" />
                  <GatsbyLogoIcon className="hidden lg:block h-8 w-auto" />
                  <span className="sr-only">{siteTitle}</span>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  {navLinks.map(({ href, linkTitle }) => (
                    <Link
                      key={linkTitle}
                      to={href}
                      className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-10 active:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {linkTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: bell */}
                <NotificationsIcon className="h-6 w-6" />
              </button>
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <Status />
              </div>
            </div>
          </div>
        </div>

        <div
          className={(navbarOpen ? 'lg:' : 'block ') + 'hidden'}
          onClose={handleNavbarClose}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 divide-y">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            {navLinks.map(({ href, linkTitle }) => (
              <Link
                key={linkTitle}
                to={href}
                className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-10 active:bg-gray-900 hover:text-white block px-3 py-2 text-base font-medium"
              >
                {linkTitle}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
