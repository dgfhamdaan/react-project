import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let obj = {
    name: "hamdaan",
    age: 19
  }

  let newArry = [1,2,3]

  return (
    <>
    <h1 className="bg-green-200 text-black p-4 rounded-xl mb-4">tailwind css</h1>
    <Card username= "dgf" btntext = "click me"/>
    <Card username= "dino"/>
    </>
  )
}

export default App
