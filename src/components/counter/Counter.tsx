import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

const Counter = () => {
    // const [count, setCount] = useState(0)
    const {count, increment, decrement} = useCounter()
    const [amount, setAmount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => increment()}>Increment</button>
        <input type="number" name="amount" value={amount} id="" onChange={(e) => setAmount(parseInt(e.target.value))}/>
        <button onClick={() => decrement()}>Set</button>
    </div>
  )
}

export default Counter