var fs = require('fs');
var s = fs.readFileSync('/Users/rule146/Desktop/food.json');
var j = JSON.parse(s);
var cat = j.response.venues[1].categories;
console.log(cat);
