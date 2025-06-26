/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
var utils = require('../utils');

function isJSONClass(node) {
  return node.object.name == "JSON";
}

module.exports = {

  stringify: function(node) {
    if (isJSONClass(node)) {
      var args = utils.clone(node.parent.arguments);
      node.parent.arguments = false;

      return {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'json_encode',
        },
        arguments: args
      };
    } else {
      return node;
    }
  },

  parse: function(node) {
    if (isJSONClass(node)) {
      var args = utils.clone(node.parent.arguments);
      node.parent.arguments = false;

      return {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'json_decode',
        },
        arguments: args,
        forceSkip: true
      };
    } else {
      return node;
    }
  }

}
