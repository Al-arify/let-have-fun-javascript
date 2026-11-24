let isbn = prompt("Enter 13-digit ISBN: ");
let total = 0;
for (let digitIndex = 0; digitIndex < 12; digitIndex++) {
 let currentDigit = Number(isbn[digitIndex]);
   total += (digitIndex % 2 === 0) ? currentDigit : currentDigit * 3;
}
let check = (10 - (total % 10)) % 10;
console.log(check === Number(isbn[12]) ? "Valid" : "Invalid");
