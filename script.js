const numberButtons = document.querySelectorAll(`[data-number]`);
const display = document.querySelector(`.display`);
const operatorButtons = document.querySelectorAll(`[data-operator]`);
let displayValue = "";
let inputValue;

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
}

let a = null;
let b = null;

const addition = `+`;
const subtraction = `-`;
const multiplication = `*`;
const division = `/`;

function operate(operator, a, b) {
  let results = null;
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
  return results;
}

function number(a, b) {
  let num = this.value;
  displayValue += num;
  display.textContent = `${displayValue}`;
  console.log(typeof displayValue);
}
function clearDisplay() {
  display.textContent = "";
  displayValue = "";
}
numberButtons.forEach((button) => button.addEventListener(`click`, number));
