import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [startWord, setStartWord] = useState();
  const [finishWord, setFinishWord] = useState();
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
    '1921-22 FA Cup',
    'Port of Bristol',
    'typeface',
    'coleus'
  ];

  useEffect(() => {
    let startWord = wordList[Math.floor(Math.random()*wordList.length)];
    setStartWord(startWord);
    let startWordIndex = wordList.findIndex(word => word === startWord);
    //delete the startword from our list so that the finishword can't be the same
    wordList.splice(startWordIndex, 1);
    let finishWord = wordList[Math.floor(Math.random()*wordList.length)];
    setFinishWord(finishWord);
  }, []);
  
  return (
    <div className="App">
      <header><h1>Wiki Game</h1></header>
      <main>
        <Link to="/game" state={{startWord, finishWord}}>START</Link>
      </main>
    </div>
  );
}

export default App;
