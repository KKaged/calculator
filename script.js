function add(a, b) {
  let result = a + b;
  return result;
}
console.log(add(1, 1));

function subtract(a, b) {
  let result = a - b;
  return result;
}
console.log(subtract(6, 2));

function multiply(a, b) {
  let result = a * b;
  return result;
}
console.log(multiply(2, 3));

function divide(a, b) {
  let result = a / b;
  return result;
}
console.log(divide(16, 2));

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

console.log(operate(`*`, 6, 6));
