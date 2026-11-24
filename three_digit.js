for (let n = 100; n <= 999; n++) {
  let a = Math.floor(n / 100);
  let b = Math.floor(n / 10) % 10;
  let c = n % 10;
  if (a*a + b*b + c*c == n) console.log(n);
}