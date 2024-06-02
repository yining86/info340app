import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { players } from './playerlist.js';
import { QuizCard } from './QuizCard.js';
import { NewQuiz } from './NewQuiz.js';

export function QuizPage(props) {
    return (
        <div>
            <NewQuiz />
        </div>
    );
}

export default QuizPage;