// import React from 'react';
// import "../index.css";

// const Comparison = ({ player1, player2 }) => {
//     return (
//         <div className="comparison">
//             <h2>Comparison</h2>
//             <table className="comparison-table">
//                 <thead>
//                     <tr>
//                         <th>Stat</th>
//                         <th>{player1.name}</th>
//                         <th>{player2.name}</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Points</td>
//                         <td className={player1.points > player2.points ? 'bg-green' : 'bg-red'}>{player1.points}</td>
//                         <td className={player2.points > player1.points ? 'bg-green' : 'bg-red'}>{player2.points}</td>
//                     </tr>
//                     <tr>
//                         <td>Assists</td>
//                         <td className={player1.assists > player2.assists ? 'bg-green' : 'bg-red'}>{player1.assists}</td>
//                         <td className={player2.assists > player1.assists ? 'bg-green' : 'bg-red'}>{player2.assists}</td>
//                     </tr>
//                     <tr>
//                         <td>Rebounds</td>
//                         <td className={player1.rebounds > player2.rebounds ? 'bg-green' : 'bg-red'}>{player1.rebounds}</td>
//                         <td className={player2.rebounds > player1.rebounds ? 'bg-green' : 'bg-red'}>{player2.rebounds}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Comparison;

import React from 'react';
import "../index.css";

const Comparison = ({ player1, player2 }) => {
    const compareStat = (stat1, stat2) => {
        if (stat1 > stat2) return 'bg-green';
        if (stat1 < stat2) return 'bg-red';
        return '';
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
                        <td className={compareStat(player1.PTS, player2.PTS)}>{player1.PTS}</td>
                        <td className={compareStat(player2.PTS, player1.PTS)}>{player2.PTS}</td>
                    </tr>
                    <tr>
                        <td>Assists</td>
                        <td className={compareStat(player1.AST, player2.AST)}>{player1.AST}</td>
                        <td className={compareStat(player2.AST, player1.AST)}>{player2.AST}</td>
                    </tr>
                    <tr>
                        <td>Rebounds</td>
                        <td className={compareStat(player1.TRB, player2.TRB)}>{player1.TRB}</td>
                        <td className={compareStat(player2.TRB, player1.TRB)}>{player2.TRB}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;
