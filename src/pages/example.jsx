import React from "react"
import Layout from "../components/Layout"
import View from "../components/View"
import SEO from "../components/SEO"
import LoginForm01 from "../components/LoginForm/LoginForm01"
import LoginForm02 from "../components/LoginForm/LoginForm02"
import LoginForm03 from "../components/LoginForm/LoginForm03"

const Example = () => {
  return (
    <Layout>
      <SEO title="tailwindcss Components" />
      <View headerTittle="Example">
        <div className="flex flex-col">
          <LoginForm01 />
          <LoginForm02 />
          <LoginForm03 />
        </div>
      </View>
    </Layout>
  )
}

export default Example
