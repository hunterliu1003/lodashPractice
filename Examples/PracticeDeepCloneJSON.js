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

let resultJson = testTimeCosts(jsonClone)([obj]);

console.log(
`timeCosts:
  jsonClone: ${ resultJson.timeCosts }
`);
