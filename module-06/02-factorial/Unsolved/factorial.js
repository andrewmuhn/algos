// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  let factorialVar = 1;
  if (num === 0 || num == 1) {
    return factorialVar = 1;
  } else {
    for (let i = num; i >= 1; i--) {
      factorialVar = i * factorialVar;
    }
  }
  console.log(factorialVar);
  return factorialVar;
};

factorial(5);

const factorial2 = (num) => {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {

  }
}
factorial2(5)