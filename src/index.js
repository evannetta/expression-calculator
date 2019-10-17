function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  let tokens;
  if (typeof expr === 'string') {
    tokens = expr.trim().split(' ').reverse();
  } else {
    tokens = expr;
  }
  if (tokens.length === 3) {
    switch (tokens[1]) {
      case '+':
        return Number.parseInt(tokens[2]) + Number.parseInt(tokens[0]);
      case '*':
        return Number.parseInt(tokens[2]) * Number.parseInt(tokens[0]);
      case '-':
        return Number.parseInt(tokens[2]) - Number.parseInt(tokens[0]);
      case '/':
        return Number.parseInt(tokens[2]) / Number.parseInt(tokens[0]);
    }
  }
  if (tokens.length > 3) {
    let operator = tokens.findIndex(x => x === '+');
    if (operator === -1) {
      operator = tokens.findIndex(x => x === '-');
      if (operator === -1) {
        operator = tokens.findIndex(x => x === '*');
        if (operator === -1) {
          operator = tokens.findIndex(x => x === '/');
        }
      }
    }
    let right = tokens.slice(0, operator);
    let b = expressionCalculator(right);
    let left = tokens.slice(operator + 1);
    let a = expressionCalculator(left);
    switch (tokens[operator]) {
      case '+':
        return a + b;
      case '*':
        return (a * b);
      case '-':
        return a - b;
      case '/':
        return (a / b);
    }
  }
  if (tokens.length === 1) {
    return Number.parseInt(expr);
  }
}
/*
const expr = "1 / 0";
let r = expressionCalculator(expr);

*/
module.exports = {
  expressionCalculator
}
