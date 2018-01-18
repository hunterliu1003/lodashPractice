const _some = require('lodash/some');
const _values = require('lodash/values');

let obj = {
  number: 5,
  bool: false,
  string: 'lodash'
}
let obj2 = {
  number: 5,
  bool: false,
  string: 'lodash'
}

let testObject = function(object, searchTerm) {
  return _some(_values(obj), s => s === searchTerm);
}
console.log(
`testObject(5): ${ testObject(5) }
testObject('5'): ${ testObject('5') }
testObject(true): ${ testObject(true) }
testObject(lodash): ${ testObject('lodash') }
`);


let curryTestObject = function(object) {
  return function(searchTerm) {
    return _some(_values(obj), s => s === searchTerm);
  }
}
let testObj = curryTestObject(obj);
console.log(
`testObj(5): ${ testObj(5) }
testObj('5'): ${ testObj('5') }
testObj(true): ${ testObj(true) }
testObj(lodash): ${ testObj('lodash') }
`);
let testObj2 = curryTestObject(obj2);
console.log(
`testObj2(5): ${ testObj2(5) }
testObj2('5'): ${ testObj2('5') }
testObj2(true): ${ testObj2(true) }
testObj2(lodash): ${ testObj2('lodash') }
`);