import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15);  //we can give any thing function, objecand etc
  // let counter = 15;
  
  const addVAlue = () => {
    // counter = counter + 1;
    setcounter(prevCounter => prevCounter + 1); // it use to prev state in setcounter update
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
    if (counter >= 30) {
      console.log(setcounter(30));
    }
  }
  
  const removeValue = () => {
    setcounter(counter - 1);
    if(counter == 0){
      console.log(setcounter(0));
    }
  }

  return (
    <>
      <h1>dgf project</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addVAlue}
      >ADD VALUE {counter}</button>
      
      <button 
      onClick={removeValue}
      >REMOVE VALUE {counter}</button>

      <p>footer: {counter}</p>

    </>
  )
}

export default App
