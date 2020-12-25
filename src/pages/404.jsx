import React from 'react'
import Layout from '../components/Layout'
import View from '../components/View'
import SEO from '../components/SEO'

const NotFound = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <View headerTittle="Not Found">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </View>
  </Layout>
)

export default NotFound
