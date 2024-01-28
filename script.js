let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorepoint = document.querySelector("#user-score");
const compScorepoint = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  msg.innerText = "Draw. Play again!";
  msg.style.backgroundColor = "#283747";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepoint.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepoint.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp Choice = ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //paper,rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
