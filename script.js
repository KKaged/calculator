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
  operator = `+`;
}

function subtract() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
  operator = `-`;
}

function multiply() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
  operator = `*`;
}

function divide() {
  a = parseInt(displayValue);
  display.textContent = "";
  displayValue = "";
  inputValue = display.textContent;
  operator = `/`;
}

const addition = `+`;
const subtraction = `-`;
const multiplication = `*`;
const division = `/`;

function operate() {
  b = parseInt(displayValue);
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case `+`:
      result = a + b;
      display.textContent = result;
      break;
    case `-`:
      result = a - b;
      display.textContent = result;
      break;
    case `*`:
      result = a * b;
      display.textContent = result;
      break;
    case `/`:
      result = a / b;
      display.textContent = result;
      break;
  }
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
