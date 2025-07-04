import React, { useState } from 'react'

function Counter() {
    const[count,setcount]=useState(0);
    return (
        <>
        <h2>Counter:{count}</h2>
        <button classNmae="btn" onClick={() => setcount(count + 1)}>Increment</button>
        <button classNmae="btn" onClick={() => setcount(count - 1)}>Decrement</button>
        <button classNmae="reset btn" onClick={() => setcount(0)}>Reset</button>
        </>
        
    )
}

export default Counter
