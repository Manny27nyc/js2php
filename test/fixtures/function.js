/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */

function something(x, y = "something", z = 5) {
  var_dump(x, y, z);
}

function sum(a, b) {
  return a + b;
}

function hello(a, b) {
  return "hello!";
}

var_dump(hello.apply(hello, [5,6]))
var_dump(hello(5, 6))

// var_dump(something(5), sum(1,2))
