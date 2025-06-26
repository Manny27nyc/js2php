/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
//
// Generate PHP from JS fixture files
//
var js2php = require('../index.js'),
    fs = require('fs'),
    fixturePath = './test/fixtures/',
    fixtures = fs.readdirSync(fixturePath),
    target = process.argv[2];

if (!target) {
  console.log("Usage:");
  console.log("");
  console.log("Generate PHP for all fixtures files:");
  console.log("\tnode test/generate.js all");
  console.log("");
  console.log("Generate PHP for single fixture file:");
  console.log("\tnode test/generate.js js_feature.js");

} else if (target.toLowerCase().trim() == "all") {
  target = /\.js$/;
} else {
  target = new RegExp(target + "$");
}

for(var i=0;i<fixtures.length;i++) {
  var file = fixturePath + fixtures[i],
      output = file.replace(/\.js$/, ".php");
  if (file.match(target)) {
    try {
      fs.writeFileSync(output, js2php(fs.readFileSync(file).toString()));
      console.log("OK: " + output);
    } catch (e) {
      console.log("FAILED: " + file + " => '" + e.message + "'");
    }
  }
}

