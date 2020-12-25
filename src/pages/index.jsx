import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import View from '../components/View'
import Status from '../components/Status'
import SEO from '../components/SEO'
import Alert from '../components/Alert'
import Button from '../components/Button'
import SvgComponent from '../components/SvgComponent'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const Index = ({ image }) => (
  <Layout>
    <SEO title="Home" />
    <Status />
    <View headerTittle="Firebase Authentication Starter">
      <SvgComponent />
      <div className="grid grid-cols-1 gap-4 my-4">
        <p>
          👋 This is a simple demo of creating dynamic pages with Gatsby that
          require <b>user authentication</b> and using <b>Firebase</b> as
          authentication provider.
        </p>

        <p>
          📚 It uses concepts from the
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
      <div className="w-full my-4">
        <Alert color="steelBlue" />
        <Alert color="brown" />
        <Alert color="darkGreen" />
        <Alert color="blue" />
        <Alert color="navyBlue" />
        <Alert color="red" />
        <Alert color="lightYellow" />
        <Alert color="pink" />
        <Alert color="teal" />
        <Alert color="cyan" />
        <Alert color="lightBlue" />
      </div>
      <div className="text-center items-center w-full my-4 space-x-3">
        <button class="inline-flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-400 shadow rounded-full">
          Default
        </button>
        <button class="inline-flex items-center px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 shadow rounded-full ">
          Default
        </button>
      </div>
      <div className="flex flex-row text-center items-center w-full my-4 space-x-4 space-y-4">
        <Button variant="outline" color="blue">
          Button
        </Button>
        <Button variant="outline" color="red">
          Button
        </Button>
        <Button variant="outline" color="teal">
          Button
        </Button>
        <Button variant="outline" color="cyan">
          Button
        </Button>
        <Button variant="outline" color="green">
          Button
        </Button>
        <Button variant="outline" color="error">
          Button
        </Button>
        <Button variant="outline" color="info">
          Button
        </Button>
      </div>
      <div className="text-center items-center w-full my-4 space-x-4 space-y-4">
        <Button
          variant="outline"
          color="blue"
          icon={<i className="material-icons mr-2">menu</i>}
        >
          Button
        </Button>
      </div>
    </View>
  </Layout>
)

export default Index
