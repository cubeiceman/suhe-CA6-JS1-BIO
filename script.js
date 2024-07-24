// gets player name and their choice
const name = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");
alert(`Hi ${name} Let's play!!`);
const character = prompt("Who are you: Bear, Hunter, or Ninja?");

//logs the results to the console
console.log(`${name}, You picked ${character}!`);
console.log(`The computer picked Bear!`);

//changes text of the browser to the results
document.getElementById("player").innerHTML = `${name}, You picked ${character}!`;
document.getElementById("computer").innerHTML = `The computer picked Bear!`;