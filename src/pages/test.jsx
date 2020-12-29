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
          <div>
            {current.matches("welcome") ? (
              <>
                <h2>Welcome!</h2>
                {current.nextEvents.map(event => {
                  return (
                    <Button
                      type="outline"
                      color="amber"
                      onClick={_ => send(event)}
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
                      onClick={_ =>
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
                  onClick={_ => send("BACK")}
                  icon={<i className="material-icons fill-current">undo</i>}
                >
                  Go Back
                </Button>
              </>
            ) : null}
          </div>
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
          <button
            type="button"
            className="hidden sm:block bg-transparent hover:bg-darkGray-400 text-gray-600 hover:text-white py-2 sm:py-3 px-4 border border-gray-400 hover:border-transparent rounded ml-2 sm:ml-4 focus:outline-none text-xs sm:text-sm"
          >
            Hidden Code
          </button>
          <button
            type="submit"
            className="bg-teal-400 text-white text-sm py-3 px-4 border border-teal-400 rounded font-bold flex items-center"
          >
            <svg
              viewBox="-49 141 512 512"
              xmlSpace="preserve"
              className="w-5 h-5 fill-current mr-3"
            >
              <g>
                <path d="M438,403c-13.808,0-25,11.193-25,25v134c0,19.299-15.701,35-35,35H36c-19.299,0-35-15.701-35-35V428 c0-13.807-11.193-25-25-25s-25,11.193-25,25v134c0,46.869,38.131,85,85,85h342c46.869,0,85-38.131,85-85V428 C463,414.193,451.808,403,438,403z" />
                <path d="M189.322,530.678C194.011,535.366,200.37,538,207,538c6.631,0,12.989-2.634,17.678-7.322l84.853-84.853 c9.763-9.763,9.763-25.592,0-35.355c-9.764-9.763-25.592-9.763-35.355,0L232,452.645V172c0-13.807-11.193-25-25-25 s-25,11.193-25,25v280.645l-42.175-42.175c-9.764-9.763-25.592-9.763-35.355,0s-9.763,25.592,0,35.355L189.322,530.678z" />
              </g>
            </svg>
            Download
          </button>
          <div className="space-y-2">
          <button type="button" className="hidden sm:block bg-transparent hover:bg-gray-800 text-gray-600 hover:text-white py-2 sm:py-3 px-4 border border-gray-400 hover:border-transparent rounded ml-2 sm:ml-4 focus:outline-none text-xs sm:text-sm">
    Hidden Code</button>
  <button type="submit" className="bg-teal-400 text-white text-sm py-3 px-4 border border-teal-400 rounded font-bold flex items-center"><i className="material-icons w-5 h-5 fill-current mr-3">forward</i>
    Download
  </button>
          <OutlineButton color="teel">Button</OutlineButton>
          <OutlineButton color="red">Button</OutlineButton>
          <OutlineButton color="amber">Button</OutlineButton>
          <OutlineButton color="cyan">Button</OutlineButton>
          <OutlineButton color="rose">Button</OutlineButton>
          <OutlineButton color="teel" icon={<i className="material-icons w-5 h-5 fill-current mr-3">forward</i>}>Button</OutlineButton>
          <OutlineButton color="red" icon={<i className="material-icons w-5 h-5 fill-current mr-3">forward</i>}>Button</OutlineButton>
          <OutlineButton color="amber" icon={<i className="material-icons w-5 h-5 fill-current mr-3">forward</i>}>Button</OutlineButton>
          <OutlineButton color="cyan" icon={<i className="material-icons w-5 h-5 fill-current mr-3">forward</i>}>Button</OutlineButton>
          <OutlineButton color="rose" icon={<i className="material-icons w-5 h-5 fill-current mr-3">forward</i>}>Button</OutlineButton>
            <Button type="outline" color="blue" icon={<i className="material-icons">forward</i>}>
              Button
            </Button>
            <Button type="outline" color="red" icon={<i className="material-icons">forward</i>}>
              Button
            </Button>
            <Button type="outline" color="teal" icon={<i className="material-icons">forward</i>}>
              Button
            </Button>
            <Button type="outline" color="cyan" icon={<i className="material-icons">forward</i>}>
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
