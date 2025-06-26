/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
var utils = require('../utils');

function isDateClass(node) {
  return node.object.name == "Date";
}

module.exports = {

  now: function(node) {
    if (isDateClass(node)) {
      var args = utils.clone(node.parent.arguments);
      node.parent.arguments = false;

      return {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'time',
        },
        arguments: []
      };
    } else {
      return node;
    }
  }

}
