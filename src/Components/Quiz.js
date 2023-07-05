import React, { useState } from 'react';
import { ReactQuestions } from '../Data/ReactQuestions';
function Quiz() {
       const [currentQuestion, setCurrentQuestion] = useState(0);

       const changeQuestion =()=>{
              if(currentQuestion < ReactQuestions.length-1)
              setCurrentQuestion(currentQuestion + 1)
       }
  return (
    <div>
       <p className='heading-txt'>Quiz App</p>
       <div className="container">
              <div className="question">
                     <span id='question-number'>{currentQuestion +1}.</span>
                     <span id='question-txt'>{ReactQuestions[currentQuestion].questions}</span>
              </div>
              <div className='option-container'>
                     {ReactQuestions[currentQuestion].options.map((options, i)=>{
                            return (
                                   <button className="option-btn">
                                          {options}
                                   </button>      
                            )
                     })}
              </div>
              <input type="button" value="Next" id='next-button' onClick={changeQuestion} />
       </div>
    </div>
  )
}

export default Quiz