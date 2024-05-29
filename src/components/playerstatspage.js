import React from 'react';
import '../index.css'
import Comparison from './Comparison'; // Import the Comparison component

const PlayerStats = () => {
    return (
        <header>
            <h1>Compare Players</h1>
            <p>Compare the stats of two NBA players side by side.</p>
            <main>
                <div className="flex-container">
                    <section>
                        <div className="card-container">
                            <div className="section">
                                <form>
                                    <div className="search">
                                        <input className="search-input" type="text"
                                               placeholder="Search for a player..."/>
                                    </div>
                                </form>
                                <img src="img/lebronsunshinecover.jpg" alt="Lebron James You Are My Sunshine Meme"/>
                                <p>Lebron James - Los Angeles Lakers </p>
                            </div>
                            <div className="section comparison-section">
                                <h3 style={{textAlign: "center"}}>Player Stats Compared (2024)</h3>
                                <Comparison/>
                            </div>
                            <div className="section">
                                <form>
                                    <div className="search">
                                        <input className="search-input" type="text"
                                               placeholder="Search for a player..."/>
                                    </div>
                                </form>
                                <img src="img/oklahomacitythunder/chetholmgren.png"
                                     alt="Oklahoma City Thunder player Chet Holmgren"/>
                                <p>Chet Holmgren - Oklahoma City Thunder</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </header>
    );
};

export default PlayerStats;