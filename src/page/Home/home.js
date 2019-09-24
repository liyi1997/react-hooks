import React, { useState } from 'react'
const One = () => {
  const [count, setCount] = useState(21)
  return (
    <div>
      <div>{count}</div>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  )
}
export default One
