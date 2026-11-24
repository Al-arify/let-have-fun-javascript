let s = prompt("Enter string:").toLowerCase().replaceAll(" ", "");
let rev = "";
for (let ch of s) rev = ch + rev;
console.log(s === rev ? "Palindrome" : "Not Palindrome");