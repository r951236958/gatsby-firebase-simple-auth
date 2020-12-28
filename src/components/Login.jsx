import React from 'react'
import { navigate } from 'gatsby'
import View from './View'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { setUser, isLoggedIn } from '../utils/auth'
import firebase from 'gatsby-plugin-firebase'
import SEO from './SEO'

const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user)
          navigate('/app/profile')
        },
      },
    }
  }

  return (
    <>
      <SEO title="Login" />
      <View headerTittle="Log In">
        <div className="shadow-lg flex flex-col sm:flex-row">
          <div className="w-full bg-blue-500 p-4 text-white text-center flex flex-col justify-center ">
            <h4>Log in</h4>
            <p className="text-sm mt-2">
              Please sign-in to access to the private route:{' '}
            </p>
            {firebase && (
              <StyledFirebaseAuth
                uiConfig={getUiConfig(firebase.auth)}
                firebaseAuth={firebase.auth()}
              />
            )}
            {/*<button className="bg-blue-700 mx-auto hover:bg-blue-600 mt-4 text-white text-sm px-4 py-2 w-3/5">
              Register
            </button>*/}
          </div>
          <div className="w-full bg-white p-4">
            <div className="text-gray-700">
              <h2>Sign Up</h2>
              <p className="mt-2 text-xs text-gray-base">
                Create an account to join our awesome community
              </p>
            </div>
            <form>
              <div className="mt-3">
                <span className="flex bg-gray-300 items-center px-3">
                  <i className="material-icons text-gray-400">person</i>
                  <input
                    className="bg-gray-300 p-2 w-full"
                    type="text"
                    placeholder="username"
                  />
                </span>
                <span className="flex bg-gray-300 items-center mt-2 px-3">
                  <i className="material-icons text-gray-400">lock</i>
                  <input
                    className="bg-gray-300 p-2 w-full"
                    type="text"
                    placeholder="Password"
                  />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center mt-4 space-y-4">
                <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 text-white">
                  Create Account
                </button>
                <p className="text-sm text-gray-600 space-x-2">
                  Already have an account?
                  <a
                    href="/"
                    className="text-xs underline-none text-blue-400 hover:text-blue-600"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </View>
    </>
  )
}

export default Login
