/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
var utils = require('../utils');

function isNumberClass(node) {
  return node.object.name == "Number";
}

function constant(node, name) {
  if (isNumberClass(node)) {
    return { type: 'Identifier', name: name, static: true };
  } else {
    return node;
  }
}

function method(node, name) {
  if (isNumberClass(node)) {
    var args = utils.clone(node.parent.arguments);
    node.parent.arguments = false;
    return { type: 'CallExpression', callee: { type: 'Identifier', name: name, }, arguments: args };
  } else {
    return node;
  }
}

module.exports = {

  isInteger: function(node) { return method(node, 'is_int'); },
  isFinite: function(node) { return method(node, 'is_finite'); },

}