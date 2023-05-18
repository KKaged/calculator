const numberButtons = document.querySelectorAll(`[data-number]`);
const display = document.querySelector(`.display`);
const operatorButtons = document.querySelectorAll(`[data-operator]`);
let displayValue = "";
let inputValue;
let a;
let b;
let operator;
let result;
function add() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
}

function subtract() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
}

function multiply() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
}

function divide() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
}

const addition = `+`;
const subtraction = `-`;
const multiplication = `*`;
const division = `/`;

function operate(operator) {
  b = parseInt(displayValue);
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

function deleteNum() {
  displayValue = displayValue.slice(0, -1);
  display.textContent = displayValue;
}

function number() {
  let num = this.value;
  displayValue += num;
  display.textContent = displayValue;
}
function clearDisplay() {
  display.textContent = "";
  displayValue = "";
}
numberButtons.forEach((button) => button.addEventListener(`click`, number));
