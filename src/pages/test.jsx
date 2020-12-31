import { useMachine } from "@xstate/react"
import { Link } from "gatsby"
import React from "react"
import { assign, Machine } from "xstate"
import Button from "../components/Button"
import Layout from "../components/Layout"
import OutlineButton from "../components/OutlineButton"
//import Status from '../components/Status'
import SEO from "../components/SEO"
import View from "../components/View"

const questions = {
  one: {
    message: "First question?",
    next: ["two", "three"],
  },
  two: {
    message: "Second question?",
    next: ["three"],
  },
  three: {
    message: "Third question?",
    next: ["one", "four"],
  },
  four: {
    message: "Fourth question?",
    next: [],
  },
}

const questionsMachine = Machine({
  id: "questions",
  initial: "welcome",
  context: {
    questions,
    question: "one",

    // history stack
    stack: [],
  },
  states: {
    welcome: {
      on: {
        NEXT: "question",
      },
    },
    question: {
      on: {
        NEXT: {
          actions: assign({
            question: (_, e) => e.question,
            stack: ctx => ctx.stack.concat(ctx.question),
          }),
        },
        BACK: {
          // internal transition
          actions: assign(ctx => {
            const { stack } = ctx
            const newStack = stack.slice(0, stack.length - 1)
            const prev = stack[stack.length - 1]

            return {
              question: prev,
              stack: newStack,
            }
          }),
          cond: ctx => ctx.stack.length > 0,
        },
        SUBMIT: {
          target: "review",
          cond: ctx => !ctx.questions[ctx.question].next.length,
        },
      },
    },
    review: {},
  },
})

const Test = () => {
  const [current, send] = useMachine(questionsMachine)
  const { question } = current.context

  const questionData = question
    ? current.context.questions[question]
    : undefined

  return (
    <Layout>
      <SEO title="Test Page" />
      <View headerTittle="test">
        <div className="w-full p-2">
          <div className="space-x-2">
            <button
              className="text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold uppercase text-sm px-3 py-2  rounded-lg outline-none focus:outline-none"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <i className="material-icons flex items-center">get_app</i>{" "}
              <sapn>Regular</sapn>
            </button>
            <button className="text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold uppercase text-sm px-3 py-2  rounded-lg outline-none focus:outline-none transition duration-150 ease-in-out">
              <i className="material-icons flex items-center">menu_open</i>{" "}
              <sapn>Regular</sapn>
            </button>
            <button className="inline-flex items-center text-blueGry-500 bg-transparent border-2 border-solid border-blueGry-500 hover:border-blueGray-600 hover:bg-blueGray-500 hover:text-gray-100 active:bg-blueGray-600 font-bold text-sm leading-none px-3 py-2 rounded-lg outline-none focus:outline-none transition duration-150 ease-in-out">
              <i className="material-icons">person</i> <span>Regular</span>
            </button>
            <button className="inline-flex items-center text-ocean-500 bg-transparent border-2 border-solid border-ocean-500 hover:border-ocean-600 hover:bg-blueGray-500 hover:text-gray-100 active:bg-ocean-600 font-bold text-sm leading-none px-3 py-2 rounded-lg outline-none focus:outline-none transition duration-150 ease-in-out">
              <i className="material-icons">person</i> <span>Regular</span>
            </button>
            <button className="inline-flex items-center text-lightBlue-600 bg-transparent border-2 border-solid border-lightBlue-600 hover:border-lightBlue-700 hover:bg-lightBlue-700 hover:text-gray-100 active:bg-lightBlue-700 font-bold text-sm leading-none px-3 py-2 rounded-lg outline-none focus:outline-none transition duration-150 ease-in-out">
              <i className="material-icons">person</i> <span>Regular</span>
            </button>
            <button className="btn-outline">Button</button>
            <button className="inline-flex items-center text-gray-100 bg-transparent border-2 border-solid border-teal-400 hover:border-teal-500 bg-teal-600 hover:bg-teal-700 hover:bg-opacity-10 hover:text-gray-300 active:bg-teal-700 font-bold text-sm leading-none px-3 py-2 rounded-lg outline-none focus:outline-none transition duration-150 ease-in-out">
              <i className="material-icons">person</i>Button
            </button>
            <button className=" text-gray-100 bg-transparent border-2 border-solid border-teal-400 hover:border-teal-500 bg-teal-600 hover:bg-teal-700 hover:bg-opacity-10 hover:text-gray-300 active:bg-teal-700 font-bold text-sm leading-none px-3 py-2 rounded-lg outline-none focus:outline-none transition duration-150 ease-in-out">
              <i className="material-icons">person</i>Button
            </button>
            <button className="btn">
              <i className="material-icons">person</i>Button
            </button>
            <button className="bg-transparent font-bold border-2 border-solid uppercase px-3 py-2 rounded-lg outline-none focus:outline-none mr-1 duration-500 ease-in-out hover:scale-110 bg-ocean-600 hover:bg-gray-100 border-ocean-500 hover:border-ocean-600 active:bg-ocean-600 active:border-ocean-600 text-white hover:text-ocean-600">
              <i className="material-icons">person</i>Button
            </button>
          </div>
          <div>
            {current.matches("welcome") ? (
              <>
                <h2>Welcome!</h2>
                {current.nextEvents.map(event => {
                  return (
                    <Button
                      type="outline"
                      color="amber"
                      onClick={() => send(event)}
                      key={event}
                    >
                      {event}
                    </Button>
                  )
                })}
              </>
            ) : current.matches("question") ? (
              <>
                <h2>{questionData.message}</h2>
                {questionData.next.map(nextQuestion => {
                  return (
                    <Button
                      type="fill"
                      color="blue"
                      onClick={() =>
                        send({ type: "NEXT", question: nextQuestion })
                      }
                      key={nextQuestion}
                      icon={
                        <i className="material-icons fill-current">forward</i>
                      }
                    >
                      Next ({nextQuestion})
                    </Button>
                  )
                })}
                <Button
                  type="outline"
                  color="red"
                  onClick={() => send("BACK")}
                  icon={<i className="material-icons fill-current">undo</i>}
                >
                  Go Back
                </Button>
              </>
            ) : null}
          </div>
          <div className="grid grid-flow-row auto-rows-auto lg:grid-cols-6 gap-6 lg:gap-6 space-y-2 mx-auto">
            <Link
              className="text-center text-pink-500 background-transparent p-3 bg-pink-200 outline-none hover:border rounded-full hover:border-pink-400 focus:outline-none "
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <i className="material-icons w-4 h-4">favorite</i>
            </Link>
            <Link
              className="text-center text-teal-500 background-transparent p-3 bg-teal-200 outline-none hover:border rounded-full hover:teal-pink-400 focus:outline-none "
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <i className="material-icons w-4 h-4">menu_open</i>
            </Link>
            <button className="hidden sm:block bg-transparent hover:bg-darkGray-400 text-gray-600 hover:text-white py-2 sm:py-3 px-4 border border-gray-400 hover:border-transparent rounded ml-2 sm:ml-4 focus:outline-none text-xs sm:text-sm">
              Hidden Code
            </button>
            <button className="hidden sm:block bg-transparent hover:text-white py-2 sm:py-3 px-4 border hover:border-transparent rounded-lg ml-2 sm:ml-4 focus:outline-none text-xs sm:text-sm hover:bg-darkGray-800 text-darkGray-600 border-darkGray-400">
              Hidden Code
            </button>
            <button className="bg-blueGray-400 text-white text-sm py-3 px-4 border border-blueGray-400 rounded-lg font-bold flex items-center">
              <svg
                viewBox="-49 141 512 512"
                xmlSpace="preserve"
                className="w-4 h-4 fill-current mr-3"
              >
                <g>
                  <path d="M438,403c-13.808,0-25,11.193-25,25v134c0,19.299-15.701,35-35,35H36c-19.299,0-35-15.701-35-35V428 c0-13.807-11.193-25-25-25s-25,11.193-25,25v134c0,46.869,38.131,85,85,85h342c46.869,0,85-38.131,85-85V428 C463,414.193,451.808,403,438,403z" />
                  <path d="M189.322,530.678C194.011,535.366,200.37,538,207,538c6.631,0,12.989-2.634,17.678-7.322l84.853-84.853 c9.763-9.763,9.763-25.592,0-35.355c-9.764-9.763-25.592-9.763-35.355,0L232,452.645V172c0-13.807-11.193-25-25-25 s-25,11.193-25,25v280.645l-42.175-42.175c-9.764-9.763-25.592-9.763-35.355,0s-9.763,25.592,0,35.355L189.322,530.678z" />
                </g>
              </svg>
              Download
            </button>

            <button
              type="button"
              className="hidden sm:block bg-transparent hover:bg-gray-800 text-gray-600 hover:text-white py-2 sm:py-3 px-4 border border-gray-400 hover:border-transparent rounded ml-2 sm:ml-4 focus:outline-none text-xs sm:text-sm"
            >
              Hidden Code
            </button>
            <button
              type="submit"
              className="bg-teal-400 text-white text-sm py-3 px-4 border border-teal-400 rounded font-bold flex items-center"
            >
              <i className="material-icons w-4 h-4 fill-current mr-3">
                forward
              </i>
              Download
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons w-4 h-4 mr-2">get_app</i>
              <span>Download</span>
            </button>
            <OutlineButton color="teel">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="gold">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="ocean">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="lightBlue">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="blueGray">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="amber">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="cyan">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton color="rose">
              <span>Button</span>
            </OutlineButton>
            <OutlineButton
              color="teel"
              icon={
                <i className="material-icons w-4 h-4 fill-current mr-3">
                  forward
                </i>
              }
            >
              Button
            </OutlineButton>
            <OutlineButton
              color="red"
              icon={
                <i className="material-icons w-4 h-4 fill-current mr-3">
                  forward
                </i>
              }
            >
              Button
            </OutlineButton>
            <OutlineButton
              color="amber"
              icon={
                <i className="material-icons w-4 h-4 fill-current mr-3">
                  forward
                </i>
              }
            >
              Button
            </OutlineButton>
            <OutlineButton
              color="cyan"
              icon={
                <i className="material-icons w-4 h-4 fill-current mr-3">
                  forward
                </i>
              }
            >
              Button
            </OutlineButton>
            <OutlineButton
              color="rose"
              icon={
                <i className="material-icons w-4 h-4 fill-current mr-3">
                  forward
                </i>
              }
            >
              Button
            </OutlineButton>
            <Button
              type="outline"
              color="blue"
              icon={<i className="material-icons">forward</i>}
            >
              Button
            </Button>
            <Button
              type="outline"
              color="red"
              icon={<i className="material-icons">forward</i>}
            >
              Button
            </Button>
            <Button
              type="outline"
              color="teal"
              icon={<i className="material-icons">forward</i>}
            >
              Button
            </Button>
            <Button
              type="outline"
              color="cyan"
              icon={<i className="material-icons">forward</i>}
            >
              Button
            </Button>
            <Button
              type="outline"
              color="green"
              icon={<i className="material-icons">undo</i>}
            >
              Button
            </Button>
            <Button type="outline" color="error">
              Button
            </Button>
            <Button
              type="outline"
              color="info"
              icon={<i className="material-icons">forward</i>}
            >
              Button
            </Button>
            <Button type="outline" color="yellow">
              Button
            </Button>
            <Button type="fill" color="yellow">
              Button
            </Button>
            <Button
              type="fill"
              color="pink"
              icon={<i className="material-icons">undo</i>}
            >
              Button
            </Button>
            <Button type="fill" color="teal">
              Button
            </Button>
            <Button type="fill" color="blueGray">
              Button
            </Button>
            <Button
              type="fill"
              color="amber"
              icon={<i className="material-icons">forward</i>}
            >
              Button
            </Button>
            <Button type="fill" color="info">
              Button
            </Button>
            <Button type="fill" color="rose">
              Button
            </Button>
            <Button
              type="fill"
              color="gold"
              icon={<i className="material-icons mr-1">notifications_none</i>}
            >
              Button
            </Button>
            <Button
              type="fill"
              color="secondary"
              icon={<i className="material-icons mr-1">menu</i>}
            >
              Button
            </Button>
            <Button
              type="fill"
              color="cyan"
              icon={<i className="material-icons mr-1">close</i>}
            >
              Button
            </Button>
            <Button
              type="fill"
              color="sky"
              icon={<i className="material-icons mr-1">login</i>}
            >
              Button
            </Button>
            <Button
              type="fill"
              color="ocean"
              icon={<i className="material-icons mr-1">person</i>}
            >
              Button
            </Button>
            <OutlineButton
              color="ocean"
              icon={<i className="material-icons mr-1">person</i>}
            >
              Button
            </OutlineButton>
            <Button
              type="fill"
              color="brown"
              icon={<i className="material-icons mr-1">lock</i>}
            >
              Button
            </Button>
          </div>

          <div className="text-center items-center w-full my-4 space-x-4 space-y-4">
            <Button
              type="outline"
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
