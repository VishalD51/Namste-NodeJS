console.log("sum executed");

var x = "Hello world";

function calculateSum(a, b) {
  const sum = a + b;
  console.log("sum", sum);
}

module.exports = { x, calculateSum };

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
