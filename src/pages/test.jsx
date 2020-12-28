import React from 'react'
import Button from '../components/Button'

const Test = () => {
  return (
    <>
      <div className="text-center items-center w-full my-4 space-x-3">
        <button class="inline-flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-400 shadow rounded-full">
          Default
        </button>
        <button class="inline-flex items-center px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 shadow rounded-full ">
          Default
        </button>
      </div>
      <div className="flex flex-row text-center items-center w-full my-4 space-x-4 space-y-4">
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
      </div>
      <div className="text-center items-center w-full my-4 space-x-4 space-y-4">
        <Button
          variant="outline"
          color="blue"
          icon={<i className="material-icons mr-2">menu</i>}
        >
          Button
        </Button>
      </div>
    </>
  )
}
