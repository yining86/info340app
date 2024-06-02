import {players} from "./playerlist"

// grab 5 random players from playerlist
let randomPlayers = [];
for (let i = 0; i < 5; i++) {
    randomPlayers.push(players[Math.floor(Math.random() * players.length)]);
}

// make an array of unique teams
const uniqueTeams = new Set();
players.forEach(player => {
    const team = player['team'];
    uniqueTeams.add(team);
})
const uniqueTeamsArray = Array.from(uniqueTeams);

// create a random answer pool for each player
function createAnswerPool(playerObj, teamArray) {
    let answerPool = [];
    answerPool.push(playerObj.team);
    for (let i = 0; i < 3; i++) {
        answerPool.push(teamArray[Math.floor(Math.random() * teamArray.length)]);
    }

    let currIndex = answerPool.length;

    while (currIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        [answerPool[currIndex], answerPool[currIndex]] = [
            answerPool[randomIndex], answerPool[currIndex]];
    }

    return answerPool;
}

const p1AnswerPool = createAnswerPool(randomPlayers[0], uniqueTeamsArray);
const p2AnswerPool = createAnswerPool(randomPlayers[1], uniqueTeamsArray);
const p3AnswerPool = createAnswerPool(randomPlayers[2], uniqueTeamsArray);
const p4AnswerPool = createAnswerPool(randomPlayers[3], uniqueTeamsArray);
const p5AnswerPool = createAnswerPool(randomPlayers[4], uniqueTeamsArray);


Object.assign(randomPlayers[0], { answerPool: p1AnswerPool });
Object.assign(randomPlayers[1], { answerPool: p2AnswerPool });
Object.assign(randomPlayers[2], { answerPool: p3AnswerPool });
Object.assign(randomPlayers[3], { answerPool: p4AnswerPool });
Object.assign(randomPlayers[4], { answerPool: p5AnswerPool });


export const quizQuestions = [
    {
        imgSrc: randomPlayers[0].imgSrc,
        name: randomPlayers[0].name,
        question: "Which team does " + randomPlayers[0].name + " play for?",
        a1: randomPlayers[0].answerPool[0],
        a2: randomPlayers[0].answerPool[1],
        a3: randomPlayers[0].answerPool[2],
        a4: randomPlayers[0].answerPool[3],
        ans: randomPlayers[0].answerPool.indexOf(randomPlayers[0].team),
    },
    {
        imgSrc: randomPlayers[1].imgSrc,
        name: randomPlayers[1].name,
        question: "Which team does " + randomPlayers[1].name + " play for?",
        a1: randomPlayers[1].answerPool[0],
        a2: randomPlayers[1].answerPool[1],
        a3: randomPlayers[1].answerPool[2],
        a4: randomPlayers[1].answerPool[3],
        ans: randomPlayers[1].answerPool.indexOf(randomPlayers[1].team),
    },
    {
        imgSrc: randomPlayers[2].imgSrc,
        name: randomPlayers[2].name,
        question: "Which team does " + randomPlayers[2].name + " play for?",
        a1: randomPlayers[2].answerPool[0],
        a2: randomPlayers[2].answerPool[1],
        a3: randomPlayers[2].answerPool[2],
        a4: randomPlayers[2].answerPool[3],
        ans: randomPlayers[2].answerPool.indexOf(randomPlayers[2].team),
    },
    {
        imgSrc: randomPlayers[3].imgSrc,
        name: randomPlayers[3].name,
        question: "Which team does " + randomPlayers[3].name + " play for?",
        a1: randomPlayers[3].answerPool[0],
        a2: randomPlayers[3].answerPool[1],
        a3: randomPlayers[3].answerPool[2],
        a4: randomPlayers[3].answerPool[3],
        ans: randomPlayers[3].answerPool.indexOf(randomPlayers[3].team),
    },
    {
        imgSrc: randomPlayers[4].imgSrc,
        name: randomPlayers[4].name,
        question: "Which team does " + randomPlayers[4].name + " play for?",
        a1: randomPlayers[4].answerPool[0],
        a2: randomPlayers[4].answerPool[1],
        a3: randomPlayers[4].answerPool[2],
        a4: randomPlayers[4].answerPool[3],
        ans: randomPlayers[4].answerPool.indexOf(randomPlayers[4].team),
    },
]