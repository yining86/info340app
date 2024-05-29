import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../index.css';

import {Header} from './Header.js';
import PlayerList from './playerlist.js';
import {Footer} from './Footer.js';
import Navbar from './navbar.js';
import QuizPage from './QuizPage.js';
import PlayerStatsPage from './playerstatspage.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Header message="NBA Statistics"/>
                <Routes>
                    <Route path="/" element={<PlayerList/>}/>
                    <Route path="/quiz" element={<QuizPage/>}/>
                    <Route path="/playerstats" element={<PlayerStatsPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

