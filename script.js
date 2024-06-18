let uScore = 0;
let cScore = 0;
let uScoreT = document.querySelector("#yscore");
let cScoreT = document.querySelector("#cscore");
const choices = document.querySelectorAll(".img");
const msg = document.querySelector("#msg");

const genCC = () => {
    const options = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return (options[i]);
}

const drawGame = () => {
    msg.style.backgroundColor="#081b31";
    msg.innerText = "Game Draw";
}

const showWinner = (userWin , uc , cc) => {
    if (userWin) {
        uScore++;
        uScoreT.innerText = uScore;
        msg.style.backgroundColor="Green";
        msg.innerText = `Game Won , Your ${uc} beats ${cc}`;
    }
    else {
        cScore++;
        cScoreT.innerText = cScore;
        msg.style.backgroundColor="Red";
        msg.innerText = `Game Lost , ${cc} beats Your ${uc}`;
    }
}

const playGame = (uc) => {
    const cc = genCC();
    if (uc == cc) {
        drawGame();
    }
    else {
        let userWin = true;
        if (uc === "rock") {
            if (cc === "paper") {
                userWin = false;
            }
        }
        else if (uc === "paper") {
            if (cc === "scissors") {
                userWin = false;
            }
        }
        else if (cc === "rock") {
            userWin = false;
        }
        showWinner(userWin , uc , cc);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const uc = choice.getAttribute("id");
        playGame(uc);
    })
})