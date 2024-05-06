import React from 'react'
import { useState } from 'react'
import "./Counter.css"

function Counter() {

    const [count,setcount]=useState(0)

    function Inc(){
        setcount((count)=>count+1)
    }

   
    return (
        <div className='counter'>
            <h2 style={{color:'purple'}}>Counter</h2>
            <h3>Count:{count}</h3>
            <button className='inc' onClick={Inc}>Increase</button>
            <button className='dec' onClick={()=>count>0 ? setcount((count)=>count-1 ):setcount(0)}>Decrease</button>
            <button className='reset' onClick={()=>setcount(0)} disabled={count===0}>Reset</button>
            
        </div>
    )
}

export default Counter
///cfc

//notes
//- In this line, you're invoking setcount directly inside the onClick handler, which causes setcount to be called every time the component renders.
// This creates an infinite loop of re-renders, triggering the error.

//To fix this issue, you need to pass a function to onClick that will be called when the button is clicked, rather than directly calling setcount.
// You can achieve this by using an arrow function: