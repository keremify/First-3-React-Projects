import React, { useState } from 'react'
import dice1 from "./photos/dice1.png"
import dice2 from "./photos/dice2.png"
import dice3 from "./photos/dice3.png"
import dice4 from "./photos/dice4.png"
import dice5 from "./photos/dice5.png"
import dice6 from "./photos/dice6.png"


const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]


const DiceApp = () => {
    const [dice1, setDice1] = useState(1)
    const [dice2, setDice2] = useState(1)

    const rollDice = () => {
        setDice1(Math.floor(Math.random() * 6))
        setDice2(Math.floor(Math.random() * 6))
    }

  return (
    <div>
        <h3>🎲 Dice Counter 🎲</h3>
        <img style={{height:"200px"}} src={diceImages[dice1]} alt="dice1" />
        <img style={{height:"200px"}} src={diceImages[dice2]} alt="dice2" />
        <p></p>
        <button className="DiceButton" onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default DiceApp