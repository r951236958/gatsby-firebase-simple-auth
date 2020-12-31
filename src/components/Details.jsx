import React from "react"
import View from "./View"
import { getUser } from "../utils/auth"

const Details = () => {
  const user = getUser()
  const { displayName, photoURL, email } = user

  return (
    <View title="Your Details">
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Display name: {displayName}</li>
        <li>Photo URL: {photoURL}</li>
        <li>Email address: {email}</li>
      </ul>
    </View>
  )
}

export default Details
