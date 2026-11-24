let total = 0, count = 0;
while (true) {
  let num = Number(prompt("Enter number (-1 to stop):"));
  if (num === -1) break;
  total += num; count++;
  console.log("Running Average: " + (total / count));
}