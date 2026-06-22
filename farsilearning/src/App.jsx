import './App.css';
import {useState} from 'react';
import backgroundImage from "./assets/farsi-background.png"
import Fruit from './components/Fruit';
import Animal from './components/Animal';
import Color from './components/Color';
const App =() =>{


  return(
    <div className="app" style={{backgroundImage:`url(${backgroundImage})`}}>
      <div className="header">
      <h1>Persian Sprouts</h1>
      <h2>Welcome to Persian Sprouts a place to learning Farsi</h2>
      <h2>Number Of cards: 10</h2>
      </div>
      <div className="flashcards">
        <Fruit /> 
      </div>
      <div className="flashcards">
        <Animal/>
      </div>
      <div className="flashcards">
      <Color/>
      </div>

    </div>
  )
}
export default App;