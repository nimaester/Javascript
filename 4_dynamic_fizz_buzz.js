/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2) {
  // your code here...
  let result = [];
  let min = Math.min(num1, num2);
  let most = Math.max(num1, num2);

  for (let i = min; i < max; i++) {
    if (i % min === 0 && i % most === 0) {
      continue;
    } else if (i % min === 0 || i % most === 0) {
      result.push(i);
    }
  }
  return result;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
