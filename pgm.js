let cpu_score = 0;

let player_score = 0;

const Rock = document.getElementById("Rock");
const Paper=document.getElementById("Paper")
const Scissors=document.getElementById("Scissors")

let Cpu_choice = ["Rock", "Paper", "Scissors"];

const messageArea = document.querySelector(".message-area");

const CpuScore = document.querySelector("#Scorecpu");

const PlayerScore = document.querySelector("#Scoreplayer");



Rock.addEventListener("click", function () {
  let Cpu_move = Cpu_choice[Math.floor(Math.random() * Cpu_choice.length)];

  if (Cpu_move == "Rock") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }

    const paragraph = document.createElement("p");

    paragraph.textContent = "It's a tie, both chose rock";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  } else if (Cpu_move == "Paper") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
    cpu_score += 1;
    const paragraph = document.createElement("p");

    paragraph.textContent = "Paper beats Rock, Cpu won";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CpuScore.innerHTML = "Score: " + cpu_score;

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  } else if (Cpu_move == "Scissors") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
    player_score += 1;
    const paragraph = document.createElement("p");

    paragraph.textContent = "Rock beats scissors, you won!";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    PlayerScore.innerHTML = "Score: " + player_score;

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  }
});

Paper.addEventListener("click", function () {
  let Cpu_move = Cpu_choice[Math.floor(Math.random() * Cpu_choice.length)];

  if (Cpu_move == "Rock") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
     player_score += 1;
    const paragraph = document.createElement("p");

    paragraph.textContent ="Paper beats rock, you won!";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);
    PlayerScore.innerHTML = "Score: " + player_score;

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  } else if (Cpu_move == "Paper") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }

    const paragraph = document.createElement("p");

    paragraph.textContent = "it's a tie, both chose Paper";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  } else if (Cpu_move == "Scissors") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
    cpu_score += 1;
    const paragraph = document.createElement("p");

    paragraph.textContent = "Scissors beat paper, cpu won";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CpuScore.innerHTML = "Score: " + cpu_score;

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  }
});

  Scissors.addEventListener("click", function () {
  let Cpu_move = Cpu_choice[Math.floor(Math.random() * Cpu_choice.length)];

  if (Cpu_move == "Rock") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
     cpu_score += 1;
    const paragraph = document.createElement("p");

    paragraph.textContent ="Rock beats Scissors, cpu won";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);
    CpuScore.innerHTML = "Score: " + cpu_score;

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  } else if (Cpu_move == "Paper") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
    player_score+=1;
    const paragraph = document.createElement("p");

    paragraph.textContent = "Scissors beats paper, you won!";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);
    PlayerScore.innerHTML="Score: "+ player_score;

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  } else if (Cpu_move == "Scissors") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }
    const paragraph = document.createElement("p");

    paragraph.textContent = "it's a tie, both chose Scissors";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    setTimeout(() => {
      paragraph.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      paragraph.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
      paragraph.remove();
    }, 2500);
  }
});
