import React from 'react';
import "../index.css";

const Comparison = ({ player1, player2 }) => {

    console.log(player1);
    console.log(player2);

    const compareStat = (stat1, stat2) => {
        const numStat1 = Number(stat1);
        const numStat2 = Number(stat2);
        if (numStat1 > numStat2) return ['bg-green', 'bg-red'];
        if (numStat1 === numStat2) return ['bg-yellow', 'bg-yellow'];
        return ['bg-red', 'bg-green'];
    };

    return (
        <div className="comparison">
            <h2>Comparison</h2>
            <div className="comparison-content">
                <div className="player-card">
                    <img src={player1.imgSrc} alt={player1.Player} className="player-image" />
                    <h3>{player1.Player}</h3>
                </div>
                <div className="player-card">
                    <img src={player2.imgSrc} alt={player2.Player} className="player-image" />
                    <h3>{player2.Player}</h3>
                </div>
            </div>
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>{player1.Player}</th>
                        <th>{player2.Player}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Points</td>
                        <td className={compareStat(player1.PTS, player2.PTS)[0]}>{player1.PTS}</td>
                        <td className={compareStat(player1.PTS, player2.PTS)[1]}>{player2.PTS}</td>
                    </tr>
                    <tr>
                        <td>Assists</td>
                        <td className={compareStat(player1.AST, player2.AST)[0]}>{player1.AST}</td>
                        <td className={compareStat(player1.AST, player2.AST)[1]}>{player2.AST}</td>
                    </tr>
                    <tr>
                        <td>Rebounds</td>
                        <td className={compareStat(player1.TRB, player2.TRB)[0]}>{player1.TRB}</td>
                        <td className={compareStat(player1.TRB, player2.TRB)[1]}>{player2.TRB}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;