import Game from '../Game';
import Header from '../Header';
// import Form from '../GuessInput/GuessInput';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        {/* <Form /> */}
        <Game />
      </div>
    </div>
  );
}

export default App;
