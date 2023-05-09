const buttons = document.querySelectorAll(`button`);
const display = document.querySelector(`.display`);
let previousValue = ``;

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
  previousValue = a;
  console.log(`I am dividing ${previousValue}`);
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

buttons.forEach((button) => button.addEventListener(`click`, number));
function number() {
  const num = this.value;
  const newValue = previousValue + num;

  display.textContent = newValue;
  previousValue = newValue;
}
function clearDisplay() {
  display.textContent = "";
  previousValue = "";
}
