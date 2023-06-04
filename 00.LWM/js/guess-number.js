class GuessNumber {
  constructor() {
    this.reset();
  }

  play(guess) {
    this.attempts++;

    if (guess === this.secretNumber) {
      log(
        `Congratulations! You guessed the correct number in ${this.attempts} attempts.`
      );
      this.reset();
    } else if (guess < this.secretNumber) {
      log("Try a higher number.");
    } else {
      log("Try a lower number.");
    }
  }

  reset() {
    this.secretNumber = _.random(1, 100);
    this.attempts = 0;
  }
}
