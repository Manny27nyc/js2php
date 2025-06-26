/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
d = 10;
var closure = function(a) {
  var c = 1;
  return function(b) {
    return a + b + c + d;
  }
}

calling = closure(5);
var_dump(calling(4) == 20);
