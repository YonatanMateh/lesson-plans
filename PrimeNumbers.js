class PrimeNumbers {
  constructor() {
    this.primes = []
  }

  addPrime(n) {
    if (this.isPrime(n)) {
      this.primes.push(n)
    }
  }

  isPrime(n) {
    if (n <= 1 || n % 2 === 0) { return false }

    for (let i = 2; i < n; i += 2) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
}

module.exports = PrimeNumbers