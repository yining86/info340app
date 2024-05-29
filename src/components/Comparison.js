import React from 'react';
import "../index.css"

const Comparison = () => {
    const player1 = {
        name: 'Player 1',
        points: 20,
        assists: 10,
        rebounds: 5,
    };

    const player2 = {
        name: 'Player 2',
        points: 15,
        assists: 12,
        rebounds: 8,
    };

    return (
        <div>
            <h2>Comparison</h2>
            <table>
                <thead>
                <tr>
                    <th>Stat</th>
                    <th>{player1.name}</th>
                    <th>{player2.name}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Points</td>
                    <td style={{backgroundColor: player1.points > player2.points ? 'green' : 'red'}}>{player1.points}</td>
                    <td style={{backgroundColor: player2.points > player1.points ? 'green' : 'red'}}>{player2.points}</td>
                </tr>
                <tr>
                    <td>Assists</td>
                    <td style={{backgroundColor: player1.assists > player2.assists ? 'green' : 'red'}}>{player1.assists}</td>
                    <td style={{backgroundColor: player2.assists > player1.assists ? 'green' : 'red'}}>{player2.assists}</td>
                </tr>
                <tr>
                    <td>Rebounds</td>
                    <td style={{backgroundColor: player1.rebounds > player2.rebounds ? 'green' : 'red'}}>{player1.rebounds}</td>
                    <td style={{backgroundColor: player2.rebounds > player1.rebounds ? 'green' : 'red'}}>{player2.rebounds}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;