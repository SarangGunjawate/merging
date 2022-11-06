//import React from 'react'
import React, { useState, useEffect } from 'react';


export default function App() {
    const [number, setNumber] = useState(0);
    const [state, setState] = useEffect(10);
  
      useEffect(() => {
        document.title = `you clicked ${number} times`;
        console.log("title is changes");
      },[number])
    return (
      <div>
          <h1>Hello World its{number}</h1>
          <h2>Hello World its{state}</h2>
          <button onClick={() => setNumber(number + 1)}>click me</button>
          <button onClick={() => setState(state + 1)}>useEffect</button>
        
      </div>
    )
    
}