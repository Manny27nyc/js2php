/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
var one = "Hello".match(/llo/);
var_dump(one);

var two = "Hello".match(/llo/g);
var_dump(two);

var splitted = "one, two, three".split(",");
var_dump(splitted);

var splitted = "one, two, three".split(/,/);
var_dump(splitted);

var g_splitted = "one, two, three".split(/,/g);
var_dump(g_splitted);

var_dump("hey".replace("y", "llo"));
var_dump("hey".replace(/y/, "llo"));
var_dump("hey hey hey".replace(/y/, "llo"));
var_dump("hey hey hey".replace(/y/g, "llo"));
