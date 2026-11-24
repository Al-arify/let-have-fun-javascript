let name = "Munir";
  const age = 20;

    if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }

//Exercise 2: FizzBuzz Print 1 to 100. For multiples of 3 print "Fizz", 5 print "Buzz", both print "FizzBuzz".
  for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
//Exercise 3: Chessboard Print 8x8 board:
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

//Deitel Chapter 2 is Introduction to Java Applications. Here are the main exercises translated to JavaScript:Deitel 2.14 - Displaying Numbers 1 2 3 4
console.log("1 2 3 4");

// Deitel 2.15 - Arithmetic (Sum, Product, Difference, Quotient)
let num1 = 10;
let num2 = 5;

console.log("Sum = " + (num1 + num2));
console.log("Product = " + (num1 * num2));
console.log("Difference = " + (num1 - num2));
console.log("Quotient = " + (num1 / num2));


//Deitel 2.16 - Comparing Integersjavascriptlet a = 10;
let b = 20;

if (a == b) console.log(a + " == " + b);
if (a != b) console.log(a + " != " + b);
if (a < b) console.log(a + " < " + b);
if (a > b) console.log(a + " > " + b);
if (a <= b) console.log(a + " <= " + b);
if (a >= b) console.log(a + " >= " + b);

//Deitel 2.17 - Largest and Smallest of 3 Numbersjavascriptlet n1 = 5, n2 = 12, n3 = 9;

let largest = n1;
if (n2 > largest) largest = n2;
if (n3 > largest) largest = n3;

let smallest = n1;
if (n2 < smallest) smallest = n2;
if (n3 < smallest) smallest = n3;

console.log("Largest = " + largest);
console.log("Smallest = " + smallest);


//Deitel 2.24 - Odd or Evenjavascriptlet num = 7;
if (num % 2 == 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}

//Deitel 2.25 - Multiple? (Is second a multiple of first?)javascriptlet first = 3;
let second = 15;

if (second % first == 0) {
  console.log(second + " is a multiple of " + first);
} else {
  console.log(second + " is NOT a multiple of " + first);
}

//Deitel 2.28 - Circle: Diameter, Circumference, Areajavascriptlet radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log("Diameter = " + diameter);
console.log("Circumference = " + circumference);
console.log("Area = " + area);

//Deitel 2.29 - Checkerboard Pattern with *javascriptfor (let i = 0; i < 8; i++) {
  if (i % 2 == 0) {
    console.log("* * * * * * * *");
  } else {
    console.log(" * * * * * * * *");
  }
