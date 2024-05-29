import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

export function QuizCard(props) {
    const playerArray = props.players;
    const p1 = playerArray[0];
    const p2 = playerArray[1];
    const p3 = playerArray[2];

    return (
        <div className="container">
            <div className="card bg-gray mt-3" id='quiz-card'>
                <div className="carousel slide mt-1">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h2 className="player-name">{p1.name}</h2>
                            <p className="quiz-question">What team does he play for?</p>
                            <img src={p1.imgSrc} className="d-block h-100" alt="Bogdan Bogdanovic" />
                            <div className="carousel-caption d-none d-lg-block">
                                <h2 className="quiz-text">{p1.name}</h2>
                                <p className="quiz-text">What team does he play for?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h2 className="player-name">{p2.name}</h2>
                            <p className="quiz-question">What team does he play for?</p>
                            <img src={p2.imgSrc} className="d-block h-100" alt="Lebron James" />
                            <div className="carousel-caption d-none d-lg-block">
                                <h2>{p2.imgSrc}</h2>
                                <p>What team does he play for?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h2 className="player-name">{p3.name}</h2>
                            <p className="quiz-question">What team does he play for?</p>
                            <img src={p3.imgSrc} className="d-block h-100" alt="Kevin Durant" />
                            <div className="carousel-caption d-none d-lg-block">
                                <h2>{p3.name}</h2>
                                <p>What team does he play for?</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="false"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}