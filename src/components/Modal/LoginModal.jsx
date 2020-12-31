import React from "react"
import { isLoggedIn } from "../../utils/auth"
import ProfileDropdown from "../ProfileDropdown"
import UserLogin from "../UserLogin"

export default function LoginModal() {
  return <>{isLoggedIn() ? <ProfileDropdown /> : <UserLogin />}</>
}
