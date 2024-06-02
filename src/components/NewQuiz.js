import React from 'react';
import { useState, useRef } from 'react';
import { quizQuestions } from './QuizQuestions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

export function NewQuiz(props) {

    // set up states
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(quizQuestions[index]);
    // stole this state function from YouTube
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [final, setFinal] = useState(false);

    // Took the references to change classList of li tag from Youtube
    let ans1 = useRef(null);
    let ans2 = useRef(null);
    let ans3 = useRef(null);
    let ans4 = useRef(null);

    let aArray = [ans1, ans2, ans3, ans4];

    // check answer function
    const checkAnswer = (chosen, answer) => {
        if (lock === false) {
            if (question.ans === answer) {
                chosen.target.classList.add("correct-answer");
                setLock(true);
                setScore(score => score + 1)
            }
            else {
                chosen.target.classList.add("incorrect-answer");
                setLock(true);
                aArray[question.ans].current.classList.add("correct-answer");
            }
        }
    }

    // next question function
    const nextQuestion = () => {
        if (lock === true) {
            if (index === quizQuestions.length - 1) {
                setFinal(true);
            }
            else {
                setIndex(++index);
                setQuestion(quizQuestions[index]);
                setLock(false);
                aArray.map((ans) => {
                    ans.current.classList.remove("incorrect-answer");
                    ans.current.classList.remove("correct-answer");
                    return null;
                })
            }
        }

    }

    // I don't know how to connect this to the quizQuestions to roll a new set of players upon reset
    const resetGame = () => {
        setIndex(0);
        setQuestion(quizQuestions[0]);
        setScore(0);
        setLock(false);
        setFinal(false);
    }

    return (
        <body className='quizpage-body'>
            <div className="quiz-container">
                <h1>NBA Player Quiz</h1>
                <hr />
                {final ? <></> : <>
                    <h2>{index + 1}. {question.question}</h2>
                    <div className="img-container">
                        <img src={question.imgSrc} className="d-block h-100" alt={question.name} />
                    </div>
                    <ul>
                        <li ref={ans1} onClick={(chosen) => { checkAnswer(chosen, 0) }}>{question.a1}</li>
                        <li ref={ans2} onClick={(chosen) => { checkAnswer(chosen, 1) }}>{question.a2}</li>
                        <li ref={ans3} onClick={(chosen) => { checkAnswer(chosen, 2) }}>{question.a3}</li>
                        <li ref={ans4} onClick={(chosen) => { checkAnswer(chosen, 3) }}>{question.a4}</li>
                    </ul>
                    <button onClick={nextQuestion}>Next</button>
                    <div className='question-tracker'>
                        {index + 1} of {quizQuestions.length} Questions
                    </div>
                </>}
                {final ? <>
                    <h2>You got {score} out of {quizQuestions.length} correct!</h2>
                    <button onClick={resetGame}>Try Again?</button>
                </> : <></>}

            </div>
        </body>
    )
}