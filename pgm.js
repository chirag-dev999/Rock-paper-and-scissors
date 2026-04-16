const Rock = document.getElementById("Rock");

let Cpu_choice = ["Rock", "paper", "Scissors"];

let Cpu_move = Cpu_choice[Math.floor(Math.random() * Cpu_choice.length)];

const card = document.querySelector(".playercard");

Rock.addEventListener("click", function () {
  if (Cpu_move == "Rock") {
    const paragraph = document.createElement("p");
    paragraph.textContent = "It's a tie, both chose rock";
    card.appendChild(paragraph);

    setTimeout(() => {
      paragraph.style.position = "relative";
      paragraph.style.bottom = "100px";
      paragraph.style.transition = "all 0.5s";

      setTimeout(() => {
        paragraph.remove();
      }, 500);
    }, 2000);
  }
});
