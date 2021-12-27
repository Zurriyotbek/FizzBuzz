let elInput = document.querySelector(".number__input");
let elButton = document.querySelector(".button");
let elResult = document.querySelector(".result");

elButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    let inputNumber = elInput.value;
    let fizz = 3;
    let buzz = 5;

    if (inputNumber == 0 || inputNumber == -0) {
        elResult.textContent = "0";
    } else if (inputNumber % fizz === 0 && inputNumber % buzz === 0) {
        elResult.textContent = "FizzBuzz";
    } else if (inputNumber % fizz === 0) {
        elResult.textContent = "Fizz";
    } else if (inputNumber % buzz === 0) {
        elResult.textContent = "Buzz";
    } else {
        elResult.textContent = inputNumber;
    }
});