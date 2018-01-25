const $deepClone = require('jquery-extend');
const _deepClone = require('lodash/cloneDeep');
const jsonClone = function(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const objAssign = function (obj) {
  Object.assign({}, obj)
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

console.log('Start testing...')

let obj = (function() {
  let obj = {};
  for (let i = 0; i < 2000; i++) {
    obj[i] = {};
    for (let j = 0; j < 2000; j++) {
      obj[i][j] = Math.random();
    }
  }
  return obj;
})();

let resultJquery = testTimeCosts($deepClone)([true, {}, obj]);
let resultLodash = testTimeCosts(_deepClone)([obj]);
let resultJson = testTimeCosts(jsonClone)([obj]);
let resultObjAssign = testTimeCosts(objAssign)([obj]);

console.log(
`timeCosts:
  $deepClone: ${ resultJquery.timeCosts }
  _deepClone: ${ resultLodash.timeCosts }
  jsonClone: ${ resultJson.timeCosts }
  resultObjAssign: ${ resultObjAssign.timeCosts }
`);

// console.log(resultJquery.result);
// console.log(resultLodash.result);
// console.log(resultJson.result);