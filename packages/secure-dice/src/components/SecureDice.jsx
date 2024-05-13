import React, { useState } from 'react';
import {secureRandom} from '@bokdol-soohyeon/secure-random'

const SecureDice = () => {
  const [diceNumber, setDiceNumber] = useState(null)
  const rollDice = () => {
    setDiceNumber(secureRandom({min: 1, max: 6}))
  }

  return (
    <div>
      {diceNumber}
      <button onClick={rollDice}>ROLL DICE</button>
    </div>
  )
}

export default SecureDice