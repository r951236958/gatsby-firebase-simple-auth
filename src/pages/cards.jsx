import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/Layout'
import View from '../components/View'
import SEO from '../components/SEO'
import ProfileCard1 from '../components/Cards/ProfileCard1'
import ProfileCard2 from '../components/Cards/ProfileCard2'
import ProfileCard3 from '../components/Cards/ProfileCard3'
import InfoCard1 from '../components/Cards/InfoCard1'
import InfoCard2 from '../components/Cards/InfoCard2'
import InfoCard3 from '../components/Cards/InfoCard3'
import ImageCard1 from '../components/Cards/ImageCard1'
import ImageCard2 from '../components/Cards/ImageCard2'
import ImageCard3 from '../components/Cards/ImageCard3'
import SimpleCard from '../components/Cards/SimpleCard'
import DashboardCard from '../components/Cards/DashboardCard'
import PostCard from '../components/Cards/PostCard'

const Cards = () => {
  return (
    <Layout>
      <SEO title="Card Example" />
      <View headerTittle="Card Example">
        <div className="flex flex-col space-y-4">
          <ProfileCard1 />
          <ProfileCard2 />
          <ProfileCard3 />
          <InfoCard1 />
          <InfoCard2 />
          <InfoCard3 />
          <ImageCard1 />
          <ImageCard2 />
          <ImageCard3 />
          <SimpleCard />
          <DashboardCard />
          <PostCard />
        </div>
      </View>
    </Layout>
  )
}

export default Cards
