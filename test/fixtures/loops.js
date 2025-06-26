/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
items = [1,2,3,4,5];

for (var i=0; i < items.length; i++) {
  var_dump(items[i]);
}

for (i=0, j=10; i < j; i++) {
  var_dump(i);
}

obj = {
  one: 'one',
  two: 'two',
  three: 'three'
}

for (var i in obj) {
  var_dump(i, obj[i]);
}

var j = 10
while (j > 0) {
  j--
  var_dump(j)
}

var xxx = 10;

do {
  --xxx;
} while (xxx > 0);
