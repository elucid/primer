function computeFactors() {
  const num = parseInt(document.getElementById("n").value, 10);
  const factors = primeFactors(num);
  document.getElementById("output").innerText = "Prime Factors: " + factors.join(", ");
}

function primeFactors(n) {
  const factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

