import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import View from '../components/View'
//import Status from '../components/Status'
import SEO from '../components/SEO'
//import Button from '../components/Button'
import Popover from '../components/Popover'

import GatsbyFirebaseIcon from '../components/SvgIcon/GatsbyFirebaseIcon'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const Index = ({ image }) => (
  <Layout>
    <SEO title="Home" />

    <View headerTittle="Firebase Authentication Starter">
      <GatsbyFirebaseIcon />
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 my-4">
          <p>
            <span role="img" aria-label="Hi">
              👋{' '}
            </span>
            This is a simple demo of creating dynamic pages with Gatsby that
            require <b>user authentication</b> and using <b>Firebase</b> as
            authentication provider.
          </p>

          <p>
            <span role="img" aria-label="Books">
              📚{' '}
            </span>
            It uses concepts from the
            {` `}
            <a
              className="underline text-blue-500"
              href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"
            >
              client-only routes section
            </a>
            {` `} and {` `}
            <a
              className="underline text-blue-500"
              href="https://www.gatsbyjs.org/tutorial/authentication-tutorial"
            >
              making a site with user authentication
            </a>
            {` `}
            tutorial in the official gatsby doc.
          </p>
          <p>
            This is the public home, and here it is a private route to start:
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
              type="button"
            >
              <Link to="/app/profile">Go to your profile</Link>
            </button>
          </p>
        </div>

        <div className="w-full my-6">
          <div className="max-w-xs overflow-hidden bg-gray-300 border-1 border-lightGray-300 border-opacity-40 rounded-xl shadow-2xl">
            <LazyLoadImage
              className="object-cover w-full h-52"
              alt="Card Image"
              height="300"
              src="https://github.com/r951236958/gatsby-starter-default/blob/main/src/images/gatsby-astronaut.png?raw=true" // use normal <img> attributes as props
              width="300"
            />

            <div className="px-6 py-4 ">
              <h4 className="mb-3 text-xl font-semibold tracking-tight">
                Hello Lazy Image
              </h4>
              <p className="leading-normal">
                Welcome to your new Gatsby site. Now go build something great.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Popover
            color="gray"
            btnText="Hey"
            el="bottom"
            popTitle="Popover Title"
            popText={<p>popover test</p>}
          />
          <Popover color="red" btnText="RedButton" el="top" />
        </div>
      </div>
    </View>
  </Layout>
)

export default Index
