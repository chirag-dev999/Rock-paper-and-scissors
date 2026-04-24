const Rock = document.getElementById("Rock");

let Cpu_choice = ["Rock", "paper", "Scissors"];

const messageArea = document.querySelector(".message-area");

Rock.addEventListener("click", function () {
  let Cpu_move =
    Cpu_choice[Math.floor(Math.random() * Cpu_choice.length)];

  if (Cpu_move == "Rock") {
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
  }
});