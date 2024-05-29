import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer.js';
import Navbar from './navbar.js';
import { players } from './playerlist.js';
import { QuizCard } from './QuizCard.js';

export function QuizPage(props) {
    let randomPlayers = [];
    for (let i = 0; i < 3; i++) {
        randomPlayers.push(players[Math.floor(Math.random() * players.length)]);
    }

    return (
        <div>
       
            <QuizCard players={randomPlayers} />
        </div>
    );
}

export default QuizPage;