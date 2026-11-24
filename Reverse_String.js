let UserInput = prompt("Enter string:");
let reversedString = "";
for (let charIndex = 0; charIndex < UserInput.length; charIndex++) {
    reversedString = UserInput[charIndex] + reversedString;
}
console.log(reversedString);

