require("./xyz.js");
// import { calculateSum, x } from "./sum.js";
// const { x, calculateSum } = require("./calculate/sum.js");
// const { multiply } = require("./calculate/multiply.js");/

const { x, calculateSum, multiply } = require("./calculate");
var myName = "Curio$Tech";
a = 10;
var b = 20;
// var x = 50;

calculateSum(10, 20);
multiply(10, 20);
console.log(x);

console.log(globalThis === global); //true
