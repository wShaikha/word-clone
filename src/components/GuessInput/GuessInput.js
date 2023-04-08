import React from "react";
import GuessResults from "../GuessResults/GuessResults";

function GuessInput( { gameStatus ,handleSubmitGuess } ) {

  const [tentativeGuess, setGameInput] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    setGameInput('')
  }

  return (
    <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input"> Enter Guess</label>
      <input 
      required
      disabled={gameStatus !== 'running'}
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter word"
      id="guess-input" type="text" 
      value={tentativeGuess}
      onChange={event => setGameInput(event.target.value.toUpperCase())}
      />
    </form>
      </>
  );
}

export default GuessInput;
