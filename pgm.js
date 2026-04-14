// rock, paper and scissors
const prompt = require("prompt-sync")();

let scoreofp1 = 0;

let scoreofcpu = 0;

let botoptions = ["Rock", "Paper", "Scissors"];

let moves = "";

let botmove = 0;

function play() {
  let Move;
  do {
    console.log("1.Press R to choose Rock\n");
    console.log("2.Press P to choose Paper\n");
    console.log("3.Press S to choose Scissors\n");
    console.log("4.Press X to exit\n");

     Move = prompt("Please choose your move:");
     console.log("\n");
     

    botmove = botoptions[Math.floor(Math.random() * botoptions.length)];

    switch (Move) {
      case "R":
        moves = botoptions[0];
        if (moves == botmove) {
          console.log("both chose Rock, that's a tie! \n");
          scoreofp1 += 0;
          scoreofcpu += 0;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else if (botmove == botoptions[1]) {
          console.log("cpu chose paper");
          console.log("cpu won!");
          scoreofcpu += 1;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else if (botmove == botoptions[2]) {
          console.log("cpu chose scissors");
          console.log("Player won!");
          scoreofp1 += 1;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else {
          //do nothing
        }
        break;

      case "P":
        moves = botoptions[1];
        if (moves == botmove) {
          console.log("both chose Paper, that's a tie!");
          scoreofp1 += 0;
          scoreofcpu += 0;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else if (botmove == botoptions[0]) {
          console.log("cpu chose Rock");
          console.log("Player won!");
          scoreofp1 += 1;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else if (botmove == botoptions[2]) {
          console.log("cpu chose scissors");
          console.log("cpu won!");
          scoreofcpu += 1;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else {
          //do nothing
        }
        break;

      case "S":
        moves = botoptions[2];
        if (moves == botmove) {
          console.log("both chose Scissors, that's a tie!");
          scoreofp1 += 0;
          scoreofcpu += 0;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else if (botmove == botoptions[0]) {
          console.log("cpu chose Rock");
          console.log("cpu won!");
          scoreofcpu += 1;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else if (botmove == botoptions[1]) {
          console.log("cpu chose paper");
          console.log("Player won!");
          scoreofp1 += 1;
          console.log(
            "Your Score: " + scoreofp1 + "\nCpu Score: " + scoreofcpu + "\n",
          );
        } else {
          //do nothing
        }
        break;

      case "X":
        console.log("exiting the game...");
        break;
    }
  } while (Move != "X");
}
play();
