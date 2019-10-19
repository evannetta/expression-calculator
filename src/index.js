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
    if(!checkBrackets(expr)){
      throw "ExpressionError: Brackets must be paired";
    }
    tokens = expr.trim().split(' ').reverse();
    } else {
     tokens = expr;
  }
  if (tokens.length === 1) {
    return Number.parseInt(expr);
  }
  if (tokens.length <= 3 ) {
    return calc(1, Number.parseInt(tokens[2]), Number.parseInt(tokens[0]), tokens);
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
    return calc(operator, a, b,tokens);
  }
}

function calc(operator, a, b,expr) {
  if(isNaN(b)){
   return a;
  }
  if(isNaN(a)){
    return b;
  }
  switch (expr[operator]) {
    case '+':
      return a + b;
    case '*':
      return (a * b);
    case '-':
      return a - b;
    case '(':
      return calc(operator+1, a, b,expr);
    case '/':
      if(!b){
        throw "TypeError: Division by zero.";
      }
      return (a / b);
    }
}

function checkBrackets(expr){
  let sum1=0,
  sum2=0;
  for(let symb of expr){
   if(symb==="("){
     sum1++;
     continue;
   }
   if(symb===")"){
    sum2++;
    }
  }
  return sum1===sum2;
}

module.exports = {
  expressionCalculator
}
