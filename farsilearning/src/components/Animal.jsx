import { useState,useEffect } from "react";
import "./Animal.css";

const animals = [
  { english: "Lion", farsi: "شیر", pronunciation: "Shir", emoji: "🦁" },
  { english: "Elephant", farsi: "فیل", pronunciation: "feel", emoji: "🐘" },
  { english: "Giraffe", farsi: "زرافه", pronunciation: "zarafeh", emoji: "🦒" },
  { english: "Penguin", farsi: "پنگوئن", pronunciation: "penguin", emoji: "🐧" },
  { english: "Kangaroo", farsi: "کانگورو", pronunciation: "kangaroo", emoji: "🦘" },
  { english: "Owl", farsi: "جغد", pronunciation: "joghd", emoji: "🦉" },
  { english: "Octopus", farsi: "هشت پا", pronunciation: "hasht pa", emoji: "🐙" },
  { english: "Cheetah", farsi: "چیتا", pronunciation: "cheetah", emoji: "🐆" },
  { english: "Koala", farsi: "کوالا", pronunciation: "koala", emoji: "🐨" },
  { english: "Dolphin", farsi: "دلفین", pronunciation: "dolphin", emoji: "🐬" },
];

function Animal() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess,setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);
  
  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === animals.length -1;
  const currentAnimal = animals[currentIndex];

  useEffect(()=>{
    setGuess('');
    setFeedback(null);
    setIsFlipped(false);
  }, [currentIndex]);

  const handleSubmit = ()=>{
    if (!guess.trim()) return;
    const isCorrect = guess.trim()=== currentAnimal.farsi;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    setIsFlipped(true);
  };

  const handleKeyDown =(e) => {
    if(e.key == 'Enter'){
      handleSubmit();
    }
  };

  const goToNextAnimal = () => {
    setIsFlipped(false);
    if (currentIndex < animals.length -1){
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPreviousAnimal = () =>{
    setIsFlipped(false);
    if (currentIndex > 0){
     setCurrentIndex((prevIndex)=> prevIndex -1);
  }
}

  return (
    <div>
      <div className="animal-container">
        <div className={`flashcard ${isFlipped ? "flipped" : ""}`}  >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="animal-emoji">{currentAnimal.emoji}</div>
              <h2>{currentAnimal.english}</h2>
            </div>
            <div className="flashcard-back">
              <h2>{currentAnimal.farsi}</h2>
              <p>Pronunciation: {currentAnimal.pronunciation}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="controls-row">
        <button className="prev-button" onClick={goToPreviousAnimal} disabled={isFirstCard}>
        BACK
        </button>
        <div className="guess-box">
          <label htmFor="animal-geuss">Type the Farsi word</label>
          <div className="guess-input-row">
            <input
            id="animal-guess"
            type="text"
            value={guess}
            onChange={(e)=> setGuess(e.target.value)}
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
            <button className="next-button" onClick={goToNextAnimal} disabled={isLastCard}>
              NEXT Animal
            </button>
        </div>
      </div>  
  );
}

export default Animal;