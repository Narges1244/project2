import { useState , useEffect} from "react";
import "./Color.css";



const Color =() =>{
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [guess, setGuess] =useState('');
    const [feedback, setFeedback] = useState(null);

    const colors = [
        { english: "Green", farsi:"سبز", pronunciation: "Sabz", emoji: "🟢" },
        { english: "Red", farsi: "قرمز", pronunciation: "Ghermez", emoji: "🔴" },
        { english: "Brown", farsi: "قهوه ای",  pronunciation: "ghahveie", emoji: "🟤" },
        { english: "purple", farsi: "بنفش", pronunciation: "banafsh", emoji: "🟣" },
        { english: "white", farsi: "سفید", pronunciation: "ksefid", emoji: "⚪" },
        { english: "Black", farsi: "سیاه", pronunciation: "seiah", emoji: "⚫" },
        { english: "Blue", farsi: "آبی", pronunciation: "Obi", emoji: "🔵" },
        { english: "Yellow", farsi:" زرد", pronunciation: "zard", emoji: "🟡" },
        { english: "Orange", farsi: "نارنحی", pronunciation: "naranji", emoji: "🟠" },
        { english: "Gray", farsi: "خاکستری", pronunciation: "khakestari", emoji: "🩶" },
      
      ];
      const isFirstCard = currentIndex ===0;
      const isLastCard = currentIndex === colors.length -1;
      const currentColor = colors[currentIndex];

      useEffect(() => {
        setIsFlipped(false);
        setGuess('');
        setFeedback(null);
      }, [currentIndex]);   

      const handleSubmit = ()=>{
        if (!guess.trim()) return;
        const isCorrect = guess.trim()=== currentColor.farsi;
        setFeedback(isCorrect ? 'correct' : 'wrong');
        setIsFlipped(true);
      };
      const handleKeyDown =(e) => {
        if(e.key == 'Enter'){
          handleSubmit();
        }
      };
      const goToNextColor = () => {
        setIsFlipped(false);
        if (currentIndex < colors.length -1 ){
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      };

      const goToPreviousColor = () => {
        setIsFlipped(false);
        if (currentIndex > 0 ){
        setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }

      return(
            <div>
              <div className="color-container">
                <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
                  <div className="flashcard-inner">
                    <div className="flashcard-front">
                      <div className="color-emoji">{currentColor.emoji}</div>
                      <h2>{currentColor.english}</h2>
                    </div>
                    <div className="flashcard-back">
                      <h2>{currentColor.farsi}</h2>
                      <p>Pronunciation: {currentColor.pronunciation}</p>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="controls-row">
                <button className="prev-button" onClick={goToPreviousColor} disabled={isFirstCard}>
                  BACK
                </button>
          
                <div className="guess-box">
                  <label htmlFor="color-guess">Type the Farsi word</label>
                  <div className="guess-input-row">
                    <input
                      id="color-guess"
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
          
                <button className="next-button" onClick={goToNextColor} disabled={isLastCard}>
                  NEXT Color
                </button>
              </div>
            </div>
          );
        }
    export default Color;

      


