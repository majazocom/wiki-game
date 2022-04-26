import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const wordList = [
    'Tree',
    'Rain',
    'Sunglasses',
    'Harry Potter',
    'Abraham Lincoln',
    'Programming',
    'Freedom',
    'Algebra',
    'Rat',
    'Squirrel',
    '1921–22_FA_Cup',
    'Port of Bristol',
    'typeface'
  ]
  return (
    <div className="App">
      <header><h1>Wiki Game</h1></header>
      <main>
        <Link to="/game">START</Link>
      </main>
    </div>
  );
}

export default App;
