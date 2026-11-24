let isbn = prompt("Enter 13-digit ISBN:");
let total = 0;
for (let i = 0; i < 12; i++) {
  let d = Number(isbn[i]);
  total += (i % 2 === 0) ? d : d * 3;
}
let check = (10 - (total % 10)) % 10;
console.log(check === Number(isbn[12]) ? "Valid" : "Invalid");