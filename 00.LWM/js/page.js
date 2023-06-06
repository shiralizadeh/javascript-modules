const guessNumber = new GuessNumber();
const input = document.querySelector("[type='text']");
const button = document.querySelector("[type='button']");

button.addEventListener("click", (e) => {
  const number = parseInt(input.value);

  guessNumber.play(number);
});
