// 1
const Gio = (a, b) => a + b;
console.log(Gio(5, 6));

// // 2
(function (a, b) {
  console.log(a - b);
})(8, 3);
// 3
const Even = (numb) => numb % 2 === 0;
console.log(Even(20, 7));

// 4
function Numbers(n1, n2, callback) {
  return callback(n1, n2);
}
function plus(n1, n2) {
  return n1 * n2;
}
console.log(Numbers(6, 7, plus));

// 5
const positive = (num) => num > 0;
console.log(positive(235));

// 6
(function (n) {
  console.log(n * n);
})(5);

// 7
function Numb2(n1, callback) {
  return callback(n1);
}
function square(n1) {
  return n1 * n1;
}

console.log(Numb2(6, square));

// 8
const isDivisibleByThree = (num) => num % 3 === 0;
console.log(isDivisibleByThree(65));

// 9
function Numb3(n1, callback) {
  return callback(n1);
}
function Numb4(n1) {
  return n1 % 2 === 0;
}
console.log(Numb3(5, Numb4));

// 10
const NumberCube = (n1) => n1 * n1 * n1;
console.log(NumberCube(11));

// 11
function Numbers(n1, n2, callback) {
  return callback(n1, n2);
}
function plus(n1, n2) {
  return n1 * n2;
}
console.log(Numbers(14, 3, plus));

// 12
const MoreZero = (num) => num > 0;
console.log(MoreZero(-5));

// 13
(function (m) {
  console.log(m / 2);
})(16);

// 14
function giorgi(n1, n2, callback) {
  return callback(n1, n2);
}
function Plus(n1, n2) {
  return n1 + n2;
}
console.log(giorgi(45, 31, Plus));

// 15

const square1 = (num) => num * num;
console.log(square1(15));
