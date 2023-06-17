let imgItems = document.getElementsByClassName("img");
let btnItems = document.getElementsByClassName("item");
let userChoice = document.getElementById("user-choice");
let computerChoice = document.getElementById("computer-choice");
let userItem = document.getElementById("user-item");
let computerItem = document.getElementById("computer-item");
let scoreTable = document.getElementById("score");
let result = document.getElementById("result");
let container = document.getElementById("container");
let battle = document.getElementById("battle");
let btnRules = document.getElementById("btn-rules");
let btnClose = document.getElementById("btn-close");
let btnRestart = document.getElementById("restart");
let modal = document.getElementById("modal");

btnRules.addEventListener("click", function () {
    modal.style.display = "block";
});

btnClose.addEventListener("click", function (e) {
    modal.style.display = "none";
});

btnRestart.addEventListener("click", function () {
    battle.style.display = "none";
    container.style.display = "block";
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let score = 0;

for (let i = 0; i < btnItems.length; i++) {
    let btnItem = btnItems[i];

    btnItem.addEventListener("click", function () {
        let itemId = btnItem.getAttribute('id');
        let srcAttr = btnItem.getElementsByTagName("img")[0].getAttribute("src");
        let choiceNum = getComputerChoice();

        userChoice.setAttribute("src", srcAttr);
        computerChoice.setAttribute("src", imgItems[choiceNum].getAttribute("src"));

        if (itemId === "paper") {
            userItem.className = "paper";
        } else if (itemId === "scissors") {
            userItem.className = "scissors";
        } else {
            userItem.className = "rock";
        }

        if (choiceNum === 0) {
            computerItem.className = "paper";
        } else if (choiceNum === 1) {
            computerItem.className = "scissors";
        } else {
            computerItem.className = "rock";
        }

        let computerBet = computerItem.getAttribute("class");
        let winner = 0;

        if (itemId === computerBet) {
            winner = 2;
        } else if (itemId === "paper" && computerBet === "scissors") {
            winner = 1;
        } else if (itemId === "paper" && computerBet === "rock") {
            winner = 0;
        } else if (itemId === "scissors" && computerBet === "paper") {
            winner = 0;
        } else if (itemId === "scissors" && computerBet === "rock") {
            winner = 1;
        } else if (itemId === "rock" && computerBet === "paper") {
            winner = 1;
        } else if (itemId === "rock" && computerBet === "scissors") {
            winner = 0;
        }
        
        if (winner === 0) {
            score++;
            result.textContent = "YOU WIN!"
        } else if (winner === 1) {
            score--;
            result.textContent = "YOU LOSE!"
        } else {
            result.textContent = "TIE!"
        }

        scoreTable.textContent = score;
        container.style.display = "none";
        battle.style.display = "block";
    });
}

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    return choice;
}