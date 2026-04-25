let cpu_score = 0;

let player_score = 0;

const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");

let Cpu_choice = ["Rock", "Paper", "Scissors"];

const messageArea = document.querySelector(".message-area");

const CpuScore = document.querySelector("#Scorecpu");

const PlayerScore = document.querySelector("#Scoreplayer");

let emoji = document.getElementById("Image");

let CryingAudio = document.getElementById("why-cry");

let LaughingAudio = document.getElementById("cat-laugh");

let TieSound = document.getElementById("tie");

let Restart = document.getElementById("Res");

Restart.addEventListener("click", function () {
  cpu_score = 0;

  player_score = 0;

  CpuScore.innerHTML = "Score: 0";
  PlayerScore.innerHTML = "Score: 0";

  emoji.src = "/assets/nerd.png";

  CryingAudio.pause();
  LaughingAudio.pause();
  TieSound.pause();

  CryingAudio.currentTime = 0;
  LaughingAudio.currentTime = 0;
  TieSound.currentTime = 0;
});

Rock.addEventListener("click", function () {
  let Cpu_move = Cpu_choice[Math.floor(Math.random() * Cpu_choice.length)];

  if (Cpu_move == "Rock") {
    const existingMessage = messageArea.querySelector("p");
    if (existingMessage) {
      existingMessage.remove();
    }

    const paragraph = document.createElement("p");

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "It's a tie, both chose rock";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CryingAudio.pause();
    LaughingAudio.pause();
    TieSound.currentTime = 0;
    TieSound.play();

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "Paper beats Rock, Cpu won";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CpuScore.innerHTML = "Score: " + cpu_score;

    emoji.src = "/assets/laugh.png";

    LaughingAudio.pause();
    CryingAudio.pause();
    LaughingAudio.currentTime = 0;
    LaughingAudio.play();

    setTimeout(() => {
      emoji.src = "/assets/nerd.png";
    }, 700);

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "Rock beats scissors, you won!";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    PlayerScore.innerHTML = "Score: " + player_score;

    emoji.src = "/assets/crying.png";

    LaughingAudio.pause();
    CryingAudio.pause();
    CryingAudio.currentTime = 0;
    CryingAudio.play();

    setTimeout(() => {
      emoji.src = "/assets/nerd.png";
    }, 800);

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "Paper beats rock, you won!";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    PlayerScore.innerHTML = "Score: " + player_score;

    LaughingAudio.pause();
    CryingAudio.pause();
    CryingAudio.currentTime = 0;
    CryingAudio.play();

    emoji.src = "/assets/crying.png";
    setTimeout(() => {
      emoji.src = "/assets/nerd.png";
    }, 800);

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "it's a tie, both chose Paper";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CryingAudio.pause();
    LaughingAudio.pause();
    TieSound.currentTime = 0;
    TieSound.play();

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "Scissors beat paper, cpu won";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CpuScore.innerHTML = "Score: " + cpu_score;

    LaughingAudio.pause();
    CryingAudio.pause();
    LaughingAudio.currentTime = 0;
    LaughingAudio.play();

    emoji.src = "/assets/laugh.png";
    setTimeout(() => {
      emoji.src = "/assets/nerd.png";
    }, 700);

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "Rock beats Scissors, cpu won";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);
    CpuScore.innerHTML = "Score: " + cpu_score;

    LaughingAudio.pause();
    CryingAudio.pause();
    LaughingAudio.currentTime = 0;
    LaughingAudio.play();

    emoji.src = "/assets/laugh.png";
    setTimeout(() => {
      emoji.src = "/assets/nerd.png";
    }, 700);

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
    player_score += 1;
    const paragraph = document.createElement("p");

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "Scissors beats paper, you won!";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);
    PlayerScore.innerHTML = "Score: " + player_score;

    LaughingAudio.pause();
    CryingAudio.pause();
    CryingAudio.currentTime = 0;
    CryingAudio.play();

    emoji.src = "/assets/crying.png";
    setTimeout(() => {
      emoji.src = "/assets/nerd.png";
    }, 700);

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

    paragraph.style.backgroundColor = "#caccfd";
    paragraph.style.borderRadius = "8px";
    paragraph.style.padding = "10px";

    paragraph.textContent = "it's a tie, both chose Scissors";

    paragraph.style.opacity = "0";

    paragraph.style.transition = "opacity 0.5s ease-in-out";

    messageArea.appendChild(paragraph);

    CryingAudio.pause();
    LaughingAudio.pause();
    TieSound.currentTime = 0;
    TieSound.play();

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
