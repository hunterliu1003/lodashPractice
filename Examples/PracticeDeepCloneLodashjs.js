const _deepClone = require('lodash/cloneDeep');
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

let resultLodash = testTimeCosts(_deepClone)([obj]);

console.log(
`timeCosts:
  _deepClone: ${ resultLodash.timeCosts }
`);
