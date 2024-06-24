

import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] =useState(5);

  const add =()=>{
    // setcounter(counter+1);
    setcounter(prevcounter => prevcounter+1);
    setcounter(prevcounter => prevcounter+1);
    setcounter(prevcounter => prevcounter+1);
  }
  const remove = () =>{
    setcounter(counter-1);
  }
  return (
    <>
    <h1>Counter</h1>
    <h3>counter Value : {counter}</h3>
    <button onClick={add}>add {counter}</button>
    <br />
    <br />
    <button onClick={remove}>remove {counter}</button>
      
    </>
  )
}

export default App
