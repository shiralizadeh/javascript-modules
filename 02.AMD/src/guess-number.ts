define(["lodash", "utilities"], (_: any, utilities: any) => {
  const { log } = utilities;

  console.log(utilities, `Imported utilities from utilities.js`);

  class GuessNumber {
    secretNumber: number = 0;
    attempts: number = 0;

    constructor() {
      this.reset();
    }

    play(guess: number) {
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

  return GuessNumber;
});
