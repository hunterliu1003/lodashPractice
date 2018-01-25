const $deepClone = require('jquery-extend');
const testTimeCosts = function(functionName) {
  return function(parametersInArray) {
    let start = Date.now();
    let result = functionName(...parametersInArray);
    let timeCosts = Date.now() - start;
    return {
      result,
      timeCosts
    };
  }
}

let obj = function() {
  let obj = {};
  for (let i = 0; i < 2000; i++) {
    obj[i] = {};
    for (let j = 0; j < 2000; j++) {
      obj[i][j] = Math.random();
    }
  }
  return obj;
}();

let resultJquery = testTimeCosts($deepClone)([true, {}, obj]);

console.log(
`timeCosts:
  $deepClone: ${ resultJquery.timeCosts }
`);
