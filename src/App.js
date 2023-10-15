import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


const emojiDictionary = {
  "🐒" : "Monkey",
  "🐘" : "Elephant",
  "🐸" : "Frog",
  "🕷️" : "Spider",
  "🦒" : "Giraffe",
  "🦁" : "Lion"
};

function App() {

  const [name, setName] = useState("");
  
  const emojis = Object.keys(emojiDictionary);
  
  function emojiHandler(e) {
    var userInput = e.target.value;
    if(emojiDictionary[userInput] === undefined)
      setName("Sorry ! We are seeing this emoji first time");
    else
      setName(emojiDictionary[userInput]);
  }

  function emojiClickHandler(emoji) {
    setName(emojiDictionary[emoji])
  }

  return (
    <div className="App">
      <h1 className='heading'>Animals Emoticons</h1>

      <input className='inputArea' onChange={emojiHandler} placeholder='Search your emoji here'></input>
      <h2 className='output'>{name}</h2>
      <h2>Animals we know</h2>
      <div className='emoji-div'>
      {
        emojis.map((emoji) => {
          return <span onClick={() => emojiClickHandler(emoji)} className='emoji' style={{fontSize: "2rem", 
          padding:"0.5rem", 
          cursor:"pointer"}}>
            {emoji}
          </span>
        })
      } 
      </div>
      
    </div>
  );
}

export default App;
