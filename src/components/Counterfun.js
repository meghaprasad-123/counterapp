// import React from 'react'
// import { useState } from 'react';


// function Counterfun() {

//   const [counter,setCounter]=useState(0)

//   function incrementcounter(){
//     setCounter(counter+1)
//   }

//   function decrementcounter(){
//     if(counter!=0)
//     setCounter(counter-1)
//   }

//   function reset(){
//     setCounter(0)
//   }
//   return (
//     <div
//     style={{
//         display:'flex',
//         flexDirection:'column',
//         alignItems:'center',
//         padding:'200px',
//         margin:'10px',
//         border:'2px solid grey',
//         backgroundColor:'lightcyan'
//       }}>
      
//       <h3 className='hi'>Your Turn...!</h3>
        
//           <h1 className="text-center">
//             {counter}</h1>
//           <button
//           style={{
//             backgroundColor:"green",
//             border:'2px solid green',
//             color:'white',
//             padding:'5px',
//             margin:'4px',
//           }}
          
//           onClick={incrementcounter}>Add</button>

//           <button
//           style={{
//             backgroundColor:"darkblue",
//             border:'2px solid darkblue',
//             color:'white',
//             padding:'5px',
//             margin:'4px'
//           }}
//           onClick={decrementcounter}>Sub</button>

//           <button
//           style={{
//             backgroundColor:"red",
//             border:'2px solid red',
//             color:'white',
//             padding:'5px',
//             margin:'4px'
//           }}
//           onClick={reset}>Reset</button>

      
//       </div>
//   )
// }

// export default Counterfun