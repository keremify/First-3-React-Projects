import React from 'react'

const Donut = () => {
    const [Counter, setCounter] = React.useState(0)
  return (
    <div>
    <h3>🍩 Donut Counter 🍩</h3>
    <p>{Counter}</p>
    <button onClick={() => setCounter(Counter + 1)}>Add Donut</button>
    <button onClick={() => setCounter(Counter - 1)}>Remove Donut</button>
    </div>
  )
}

export default Donut