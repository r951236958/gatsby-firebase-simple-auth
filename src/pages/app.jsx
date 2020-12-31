import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Details from "../components/Details"

import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
//import Status from "../components/Status"

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/details" component={Details} />
      <Login path="/login" />
    </Router>
  </Layout>
)

export default App
