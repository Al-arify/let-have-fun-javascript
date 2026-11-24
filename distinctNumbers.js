let targetSum = Number(prompt("Enter target:"));

for (let firstNum = 1; firstNum <= 9; firstNum++) {
  for (let secondNum = firstNum + 1; secondNum <= 9; secondNum++) {
    for (let thirdNum = secondNum + 1; thirdNum <= 9; thirdNum++) {
      if (firstNum + secondNum + thirdNum === targetSum) {
        console.log(firstNum, secondNum, thirdNum);
      }
    }
  }
}
