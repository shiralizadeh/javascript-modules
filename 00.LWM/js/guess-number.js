class GuessNumber {
  constructor() {
    this.reset();
  }

  play(guess) {
    this.attempts++;

    if (guess === this.secretNumber) {
      alert(
        `Congratulations! You guessed the correct number in ${this.attempts} attempts.`
      );
      this.reset();
    } else if (guess < this.secretNumber) {
      alert("Try a higher number.");
    } else {
      alert("Try a lower number.");
    }
  }

  reset() {
    this.secretNumber = _.random(1, 100);
    this.attempts = 0;
  }
}
