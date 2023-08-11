function computeFactors() {
  const num = BigInt(document.getElementById("n").value);

  const pfactors = primeFactors(num);
  document.getElementById("output").innerHTML = "<b>Prime Factors:</b> " + pfactors.join(", ");

  const afactors = allFactors(num);
  document.getElementById("output-all").innerHTML = "<b>All Factors:</b> " + afactors.join(", ");

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

function allFactors(n) {
  if (n == 1n) return [];

  const factors = [];
  const limit = (n % 2n === 0n) ? n/2n : (n-1n)/2n;

  for (let i = 2n; i <= limit; i += 1n) {
    if (n % i === 0n) {
      factors.push(i);
    }
  }

  return factors;
}
