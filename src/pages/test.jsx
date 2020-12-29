import React from "react"
import Button from "../components/Button"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
//import Status from '../components/Status'
import SEO from "../components/SEO"

const Test = () => {
  return (
    <Layout>
      <SEO title="Test Page" />
      <View headerTittle="test">
        <div className="w-full p-2">
          <Link
            className="text-center text-pink-500 background-transparent p-3 bg-pink-200 outline-none hover:border rounded-full hover:border-pink-400 focus:outline-none "
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            <i className="material-icons w-6 h-6">favorite</i>
          </Link>
          <Link
            className="text-center text-teal-500 background-transparent p-3 bg-teal-200 outline-none hover:border rounded-full hover:teal-pink-400 focus:outline-none "
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            <i className="material-icons w-6 h-6">menu_open</i>
          </Link>
          <div className="space-y-2">
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
            <Button variant="outline" color="yellow">
              Button
            </Button>
            <Button variant="fill" color="yellow">
              Button
            </Button>
            <Button variant="fill" color="pink">
              Button
            </Button>
            <Button variant="fill" color="teal">
              Button
            </Button>
            <Button variant="fill" color="blueGray">
              Button
            </Button>
            <Button variant="fill" color="amber">
              Button
            </Button>
            <Button variant="fill" color="info">
              Button
            </Button>
            <Button variant="fill" color="rose">
              Button
            </Button>
            <Button
              variant="fill"
              color="gold"
              icon={<i className="material-icons mr-1">notifications_none</i>}
            >
              Button
            </Button>
            <Button
              variant="fill"
              color="secondary"
              icon={<i className="material-icons mr-1">menu</i>}
            >
              Button
            </Button>
            <Button
              variant="fill"
              color="cyan"
              icon={<i className="material-icons mr-1">close</i>}
            >
              Button
            </Button>
            <Button
              variant="fill"
              color="sky"
              icon={<i className="material-icons mr-1">login</i>}
            >
              Button
            </Button>
            <Button
              variant="fill"
              color="ocean"
              icon={<i className="material-icons mr-1">person</i>}
            >
              Button
            </Button>
            <Button
              variant="fill"
              color="brown"
              icon={<i className="material-icons mr-1">lock</i>}
            >
              Button
            </Button>
          </div>

          <div className="text-center items-center w-full my-4 space-x-4 space-y-4">
            <Button
              variant="outline"
              color="blue"
              icon={<i className="material-icons mr-1">menu</i>}
            >
              Button
            </Button>
          </div>
        </div>
      </View>
    </Layout>
  )
}

export default Test
