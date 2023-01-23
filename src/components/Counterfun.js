import React from 'react'
import { useState } from 'react';


function Counterfun() {

  const [counter,setCounter]=useState(0)

  function incrementcounter(){
    setCounter(counter+1)
  }

  function decrementcounter(){
    if(counter!=0)
    setCounter(counter-1)
  }

  function reset(){
    setCounter(0)
  }
  return (
    <div
    style={{
      // display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:'180px',
      margin:'5px',
      border:'2px solid grey',
      backgroundColor:'lightcyan'
    }}>
      
       <h3 className='hi'>Your Turn...!</h3>
        
<h1 className="text-center">{counter}</h1>
          <button className='add'
          style={{
            border:'2px solid green',
            padding:'5px',
            margin:'4px',
            width:'78px',
            borderRadius:'6px',
            marginLeft:'450px'
          }}
          
          onClick={incrementcounter}>Add</button>

          <button className='sub'
          style={{
            border:'2px solid darkblue',
            padding:'5px',
            margin:'4px',
            width:'78px',
            borderRadius:'6px'
          }}
          onClick={decrementcounter}>Sub</button>

          <button className='reset'
          style={{
            border:'2px solid red',
            padding:'5px',
            margin:'4px',
            width:'78px',
            borderRadius:'6px'
          }}
          onClick={reset}>Reset</button>
      
      </div>
  )
}

export default Counterfun