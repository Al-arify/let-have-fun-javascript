let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
while (true) {
  let guess = Number(prompt("Guess 1-100:"));
  attempts++;
  if (guess === secret) { console.log(`Correct! Attempts: ${attempts}`); break; }
  else if (guess < secret) console.log("Too low!");
  else console.log("Too high!");
}