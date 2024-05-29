import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "../index.css";

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        console.log(setMenuVisible)

    };

    return (
        <nav className='nav'>
            <div className="nav-icons" onClick={toggleMenu}>
                <div className="hamburger"></div>
                <div className="hamburger" style={{margin: '8px 0'}}></div>
                <div className="hamburger"></div>
            </div>
            <ul className={menuVisible ? 'visible' : ''}>
                <li>
                    <Link to="/">Player Stats</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
                <li>
                    <Link to="/playerstats">Compare</Link>
                </li>
            </ul>
            <div/>
        </nav>
    );
}
