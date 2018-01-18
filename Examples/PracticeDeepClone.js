const _deepClone = require('lodash/cloneDeep');
const $deepClone = require('jquery-extend');
const jsonClone = function(obj) {
  return JSON.parse(JSON.stringify(obj));
}
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

const obj = function() {
  let obj = {};
  for (let i = 0; i < 1500; i++) {
    obj[i] = {};
    for (let j = 0; j < 1500; j++) {
      obj[i][j] = Math.random();
    }
  }
  return obj;
}();

let resultJquery = testTimeCosts($deepClone)([true, {}, obj]);
let resultLodash = testTimeCosts(_deepClone)([obj]);
let resultJson = testTimeCosts(jsonClone)([obj]);

console.log(
`timeCosts:
  _deepClone: ${ resultJquery.timeCosts }
  $deepClone: ${ resultLodash.timeCosts }
  jsonClone: ${ resultJson.timeCosts }
`);

// console.log(resultJquery.result);
// console.log(resultLodash.result);
// console.log(resultJson.result);