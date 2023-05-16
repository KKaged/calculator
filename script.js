const numberButtons = document.querySelectorAll(`[data-number]`);
const display = document.querySelector(`.display`);
const operatorButtons = document.querySelectorAll(`[data-operator]`);
let displayValue = "";
let inputValue = "";
let a;
let b;
let operator;
let result;
function add(a, b) {
  let result = a + b;
  return result;
}

function subtract(a, b) {
  let result = a - b;
  return result;
}

function multiply(a, b) {
  let result = a * b;
  return result;
}

function divide(a, b) {
  let result = a / b;
  display.textContent = "";
  displayValue = "";
}

const addition = `+`;
const subtraction = `-`;
const multiplication = `*`;
const division = `/`;

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case `+`:
      return add(a, b);
    case `-`:
      return subtract(a, b);
    case `*`:
      return multiply(a, b);
    case `/`:
      return divide(a, b);
  }
  return result;
}

function number() {
  let num = this.value;
  displayValue += num;
  inputValue = displayValue;
  display.textContent = inputValue;
  a = parseInt(inputValue);
  b = parseInt(displayValue);
}
function clearDisplay() {
  display.textContent = "";
  displayValue = "";
}
numberButtons.forEach((button) => button.addEventListener(`click`, number));
