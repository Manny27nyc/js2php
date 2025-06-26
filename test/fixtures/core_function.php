/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
class Klass
{
public function without_params() {
return "I'm a method without params.";
}
public function with_default_params($param1 = "default") {
return $param1;
}

}
function global_function() {
return "I'm a global function";
}
function global_function_with_params() {
return "I'm a global function with params";
}
$klass = new Klass();
var_dump(call_user_func_array(array($klass, 'without_params'), array()));
var_dump(call_user_func_array(array($klass, 'with_default_params'), array()));
var_dump(call_user_func_array(array($klass, 'with_default_params'), array("Hey!")));
var_dump(call_user_func(array($klass, 'with_default_params'), "Hey!"));
