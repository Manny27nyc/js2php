/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
class Klass {
  without_params() {
    return "I'm a method without params."
  }

  with_default_params(param1="default") {
    return param1;
  }
}

function global_function() {
  return "I'm a global function";
}

function global_function_with_params() {
  return "I'm a global function with params";
}

klass = new Klass
var_dump(klass.without_params.apply())
var_dump(klass.with_default_params.apply(null))
var_dump(klass.with_default_params.apply(null, ["Hey!"]))
var_dump(klass.with_default_params.call(null, "Hey!"))
