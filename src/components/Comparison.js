import React from 'react';
import "../index.css";

const Comparison = ({ player1, player2 }) => {
    return (
        <div className="comparison">
            <h2>Comparison</h2>
            <table className="comparison-table">
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
                        <td className={player1.points > player2.points ? 'bg-green' : 'bg-red'}>{player1.points}</td>
                        <td className={player2.points > player1.points ? 'bg-green' : 'bg-red'}>{player2.points}</td>
                    </tr>
                    <tr>
                        <td>Assists</td>
                        <td className={player1.assists > player2.assists ? 'bg-green' : 'bg-red'}>{player1.assists}</td>
                        <td className={player2.assists > player1.assists ? 'bg-green' : 'bg-red'}>{player2.assists}</td>
                    </tr>
                    <tr>
                        <td>Rebounds</td>
                        <td className={player1.rebounds > player2.rebounds ? 'bg-green' : 'bg-red'}>{player1.rebounds}</td>
                        <td className={player2.rebounds > player1.rebounds ? 'bg-green' : 'bg-red'}>{player2.rebounds}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;
