import Paper from './assets/Paper.png';
import Scissors from './assets/Scissors.png';
import Rock from './assets/Rock.png';
const handOptions = {
    "rock": Rock ,
    "paper": Paper,
    "scissors": Scissors
}
let SCORE = 0;

const pickUserHand = (hand) =>{
    console.log(hand);
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show the next page with the hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //set the user hand pick
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

const pickComputerHand = (hand) =>{
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random()*3)]

    //set the computer hand pick
    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {
    if (userHand === "paper" && cpHand === "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand === "paper" && cpHand === "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
    if (userHand ==="paper" && cpHand === "paper") {
    setDecision("It's a tie!");
    }
    if (userHand === "rock" && cpHand === "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
    if (userHand === "rock" && cpHand === "paper") {
    setDecision("YOU LOSE!");
    }
    if (userHand === "rock" && cpHand === "rock") {
    setDecision("It's a tie!");
    }
    if (userHand === "scissors" && cpHand === "scissors") {
    setDecision("It's a tie!");
    }
    if (userHand === "scissors" && cpHand === "rock") {
    setDecision("YOU LOSE!");
    }
    if (userHand === "scissors" && cpHand === "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }

};


const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".descission h1").innerText = decision;
}

const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}
export default pickUserHand;
export {restartGame} ;