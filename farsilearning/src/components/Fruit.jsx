import {useState, usestate} from 'react';

import './Fruit.css';

function Fruit() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
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

      const currentFruit = fruits[currentIndex];
      const goToNextFruit = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fruits.length);
      }
    return(
        <div>
        <div className ='fruit-container'>
            <div 
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={()=> setIsFlipped(!isFlipped)}
            >
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
        <button className="next-button" onClick={goToNextFruit}>
                NEXT FRUIT
            </button>
        </div>
    );
}
export default Fruit;