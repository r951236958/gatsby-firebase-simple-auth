import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/Layout'
import View from '../components/View'
import List from '../components/List'
import AlertPage from '../components/AlertPage'
import ProfileCard from '../components/ProfileCard'
import SEO from '../components/SEO'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <View headerTittle="About Page">
        <div className="grid grid-cols-1 gap-6">
          <AlertPage />
          <List />
          <ProfileCard />
        </div>
      </View>
    </Layout>
  )
}

export default About
