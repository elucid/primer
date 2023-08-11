function computeFactors() {
  const num = BigInt(document.getElementById("n").value);

  const factors = primeFactors(num);
  document.getElementById("output").innerText = "Prime Factors: " + factors.join(", ");
}

function primeFactors(n) {
  const factors = [];

  while (n % 2n === 0n) {
    factors.push(2n);
    n /= 2n;
  }

  let i = 3n;

  while (i * i <= n) {
    while (n % i === 0n) {
      factors.push(i);
      n /= i;
    }
    i += 2n;
  }

  if (n > 1n) {
    factors.push(n);
  }

  return factors;
}

