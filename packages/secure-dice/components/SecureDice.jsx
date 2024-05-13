import React from 'react';
import {secureRandom} from '@bokdol-soohyeon/secure-random'

const SecureDice = () => {
  const rollDice = () => {
    console.log(secureRandom({min: 1, max: 6}))
  }

  return (
    <div>
      slfjsak
      <button onClick={rollDice}>ROLL DICE</button>
    </div>
  )
}

export default SecureDice