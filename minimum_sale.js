let target = 30000, sales = 0, comm = 0;
while (comm < target) {
  sales++;
  if (sales <= 5000) comm = sales * 0.06;
  else if (sales <= 10000) comm = 300 + (sales - 5000) * 0.08;
  else comm = 700 + (sales - 10000) * 0.10;
}
console.log("Minimum sales: " + sales);