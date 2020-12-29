import React from 'react'
import AlertPage from '../components/AlertPage'
import ProfileCard1 from '../components/Cards/ProfileCard1'
//import { Link } from 'gatsby'
import Layout from '../components/Layout'
import List from '../components/List'
import SEO from '../components/SEO'
import View from '../components/View'

const About = ({ a, b }) => {
  return (
    <Layout>
      <SEO title="About" />
      <View headerTittle="About Page">
        <div className="grid grid-cols-1 gap-6">
          <AlertPage />
          <List />
          <ProfileCard1 />
          <div className="flex flex-wrap flex-col">
  <div className="flex flex-wrap">
    <button className="bg-transparent hover:bg-gray-400 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-blue-400 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-teal-400 text-teal-800 font-semibold hover:text-white py-2 px-4 border border-teal-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-green-400 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-yellow-400 text-yellow-800 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-orange-400 text-orange-800 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-red-400 text-red-800 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-pink-400 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded mr-2">
      Button
    </button>
  </div>
  <div className="flex flex-wrap mt-2">
    <button className="bg-transparent hover:bg-gray-400 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-blue-400 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-teal-400 text-teal-800 font-semibold hover:text-white py-2 px-4 border border-teal-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-green-400 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-yellow-400 text-yellow-800 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-orange-400 text-orange-800 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-red-400 text-red-800 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
    <button className="bg-transparent hover:bg-pink-400 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded-lg mr-2">
      Button
    </button>
  </div>
</div>
        </div>
      </View>
    </Layout>
  )
}

export default About
