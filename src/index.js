function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  let tokens;
  let operators = "+-*/)(";
  if(expr.length===3 && typeof expr === 'string'){
    tokens = expr.trim().split('').reverse();
  }else if (typeof expr === 'string') {
   
    tokens = expr.trim().split(' ').reverse();
  } else {
     tokens = expr;
  }
  if (tokens.length === 3 ) {
    return calc(tokens[1], Number.parseInt(tokens[2]), Number.parseInt(tokens[0]));
      }
  if (tokens.length > 3) {
   let operator,
      i=0;
         do {
      operator = tokens.findIndex(x => x === operators[i]);
      i++;
    } while (operator === -1 && i < operators.length);
    let right = tokens.slice(0, operator);
    let b = expressionCalculator(right);
    let left = tokens.slice(operator + 1);
    let a = expressionCalculator(left);
    return calc(tokens[operator], a, b);
  }
  if (tokens.length === 1) {
    return Number.parseInt(expr);
  }
}

function calc(operator, a, b) {
switch (operator) {
      case '+':
        return a + b;
      case '*':
        return (a * b);
      case '-':
        return a - b;
      case '/':
        if(!b){
          throw "TypeError: Division by zero.";
        }
        return (a / b);
    }
}

module.exports = {
  expressionCalculator
}
