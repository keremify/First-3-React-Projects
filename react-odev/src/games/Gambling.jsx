import React, { useState } from 'react'

const Gambling = () => {
    const [Number1, setNumber1] = useState(1)
    const [Number2, setNumber2] = useState(1)
    const [Number3, setNumber3] = useState(1)
    const [Number4, setNumber4] = useState(1)
    const [Number5, setNumber5] = useState(1)
    const [Number6, setNumber6] = useState(1)

    const NumberPicker = () => {
        setNumber1(Math.floor(Math.random() * 45)+1)
        setNumber2(Math.floor(Math.random() * 45)+1)
        setNumber3(Math.floor(Math.random() * 45)+1)
        setNumber4(Math.floor(Math.random() * 45)+1)
        setNumber5(Math.floor(Math.random() * 45)+1)
        setNumber6(Math.floor(Math.random() * 45)+1)
    }

    return (
        <div>
            <h3>🎰 Lottery Number Picker 🎰</h3>
            <p>{Number1} - {Number2} - {Number3} - {Number4} - {Number5} - {Number6}</p>
            <p></p>
            <button onClick={NumberPicker}>Pick Numbers</button>
        </div>
    )
}
export default Gambling