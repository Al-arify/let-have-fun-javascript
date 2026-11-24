let spell = prompt("Enter string:").toLowerCase();
let vowelCount = 0, consonantCount = 0;
for (let ch of spell) {
  if (/[a-z]/.test(ch)) {
    if ("aeiou".includes(ch)) vowelCount++; else consonantCount++;
  }
}
console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);