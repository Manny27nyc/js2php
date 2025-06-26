/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
function something($x, $y = "something", $z = 5) {
var_dump($x, $y, $z);
}
function sum($a, $b) {
return $a + $b;
}
function hello($a, $b) {
return "hello!";
}
var_dump(call_user_func_array('hello', array(5, 6)));
var_dump(hello(5, 6));
