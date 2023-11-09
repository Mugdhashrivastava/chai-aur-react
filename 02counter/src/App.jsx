import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 5;

  const addValue = () => {
    counter = counter+1;
    console.log("clicked",counter);
    console.log("value added",Math.random());
    
  }

  return (
    <>
  
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>add value</button>
     <br/>
     <button>decrease value</button>
     
    </>
  )
}

export default App
