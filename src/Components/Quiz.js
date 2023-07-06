import React, { useState } from "react";
import { ReactQuestions } from "../Data/ReactQuestions";
import QuizResult from "./QuizResult";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < ReactQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === ReactQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <div>
      <p className="heading-txt">Quiz Application</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={ReactQuestions.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {ReactQuestions[currentQuestion].questions}
              </span>
            </div>
            <div className="option-container">
              {ReactQuestions[currentQuestion].options.map((options, i) => {
                return (
                  <button
                    //  className="option-btn"
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => {
                      setClickedOption(i + 1);
                    }}
                  >
                    {options}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
