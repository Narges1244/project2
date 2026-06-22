import {useEffect, useState} from 'react';

import './Fruit.css';

function Fruit() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [guess, setGuess] =useState('');
    const [feedback, setFeedback] = useState(null);
    
    const fruits = [
        {
          english: "Apple",
          farsi: "سیب",
          pronunciation: "Seeb",
          emoji: "🍎",
        },
        {
          english: "peach",
          farsi: "هلو",
          pronunciation: "Holu",
          emoji: "🍑",
        },
        {
          english: "Strawberry",
          farsi: "توت فرنگی",
          pronunciation: "Toot Farangi",
          emoji: "🍓",
        },
        {
          english: "Banana",
          farsi: "موز",
          pronunciation: "Mooz",
          emoji: "🍌",
        },
        {
          english: "Mango",
          farsi: "انبه",
          pronunciation: "Anbeh",
          emoji: "🥭",
        },
        {
          english: "Mandarin",
          farsi: "نارنگی",
          pronunciation: "Narengi",
          emoji: "🍊",
        },
        {
          english: "Cherry",
          farsi: "گیلاس",
          pronunciation: "gilass",
          emoji: "🍒",
        },
        {
          english: "Grapes",
          farsi: "انگور",
          pronunciation: "Angoor",
          emoji: "🍇",
        },
        {
          english: "Lemon",
          farsi: "لیمو",
          pronunciation: "Limoo",
          emoji: "🍋",
        },
        {
          english: "Kiwi",
          farsi: "کیوی",
          pronunciation: "Kiwi",
          emoji: "🥝",
        },
      ];
    const isFirstCard = currentIndex === 0;
    const isLastCard = currentIndex === fruits.length -1;

      const currentFruit = fruits[currentIndex];
      //reset Geuss /feedback/flip whenever we move to a new card
      useEffect(()=>{
        setGuess('');
        setFeedback(null);
        setIsFlipped(false);
      }, [currentIndex]);

      const handleSubmit = ()=>{
        if (!guess.trim()) return;
        const isCorrect = guess.trim()=== currentFruit.farsi;
        setFeedback(isCorrect ? 'correct' : 'wrong');
        setIsFlipped(true);
      };

      const handleKeyDown =(e) => {
        if(e.key == 'Enter'){
          handleSubmit();
        }
      };

      const goToNextFruit = () => {
        setIsFlipped(false);
        if (currentIndex < fruits.length -1 ){
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      };
      const goToPreviousFruit = () => {
        setIsFlipped(false);
        if (currentIndex > 0 ){
         setCurrentIndex((prevIndex) => prevIndex - 1);
        }
        
      }

    return(
        <div>
          <div className="fruit-container">
            <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <div className="fruit-emoji">{currentFruit.emoji}</div>
                  <h2>{currentFruit.english}</h2>
                </div>
                <div className="flashcard-back">
                  <h2>{currentFruit.farsi}</h2>
                  <p>Pronunciation: {currentFruit.pronunciation}</p>
                </div>
              </div>
            </div>
          </div>
      
          <div className="controls-row">
            <button className="prev-button" onClick={goToPreviousFruit} disabled={isFirstCard}>
              BACK
            </button>
      
            <div className="guess-box">
              <label htmlFor="fruit-guess">Type the Farsi word</label>
              <div className="guess-input-row">
                <input
                  id="fruit-guess"
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isFlipped}
                />
                <button onClick={handleSubmit} disabled={isFlipped}>
                  Submit
                </button>
              </div>
              {feedback === 'correct' && <p className="feedback feedback-correct">Correct!</p>}
              {feedback === 'wrong' && <p className="feedback feedback-wrong">Not quite — the answer is shown above</p>}
            </div>
      
            <button className="next-button" onClick={goToNextFruit} disabled={isLastCard}>
              NEXT FRUIT
            </button>
          </div>
        </div>
      );
    }
export default Fruit;