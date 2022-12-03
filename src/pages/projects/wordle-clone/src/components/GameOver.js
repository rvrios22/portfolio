import React, { useContext } from 'react'
import { AppContext } from '../Wordle'
import { boardDefault } from '../Words'

function GameOver() {
    const { gameOver, currAttempt, correctWord, setBoard, setCurrAttempt, setWordset } = useContext(AppContext)

    // const handleReset = () => {
    //   setBoard = (boardDefault)
    //   setCurrAttempt = ({attempt: 0, letterPos: 0})
    //   setWordset = (new Set())
    // }

  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? 'Congradulations, you guessed the word!' : 'Sorry, you did not guess the correct word.'} </h3>
        <h3>The Correct word was: {correctWord.toUpperCase()}.</h3>
        {!gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts. Your game will reload shortly</h3>)}
        {gameOver.guessedWord && (<h3>Your game will reload shortly</h3>)}
    </div>
  )
}

export default GameOver