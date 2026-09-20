import React, { useState } from 'react'

const App = () => {
  const [a, seta] = useState(0)

  function inr() {
    seta(a+1)
  }

  function dcr() {
    seta(a-1)
  }

  function reset() {
    seta(0)
  }
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={inr}>Increase</button>
      <button onClick={dcr}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
