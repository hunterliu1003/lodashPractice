const { some, values, curry } = require('lodash');

let obj = {
  number: 5,
  bool: false,
  string: 'lodash'
};
let obj2 = {
  number: 5,
  bool: false,
  string: 'lodash'
};

let testObject = function(object, searchTerm) {
  return some(values(object), s => s === searchTerm);
};
console.log(
`testObject(5): ${ testObject(obj, 5) }
testObject('5'): ${ testObject(obj, '5') }
testObject(true): ${ testObject(obj, true) }
testObject(lodash): ${ testObject(obj, 'lodash') }
`);


let curriedTestObject = function(object) {
  return function(searchTerm) {
    return some(values(object), s => s === searchTerm);
  };
};

// let curriedTestObject = curry(function(object, searchTerm) {
//   return some(values(obj), s => s === searchTerm);
// });

// console.log(
// `curriedTestObject(obj)(5)): ${ curriedTestObject(obj)(5) }
// curriedTestObject(obj, 5): ${ curriedTestObject(obj, 5) }
// `);

let testObj = curriedTestObject(obj);
console.log(
`testObj(5): ${ testObj(5) }
testObj('5'): ${ testObj('5') }
testObj(true): ${ testObj(true) }
testObj(lodash): ${ testObj('lodash') }
`);
let testObj2 = curriedTestObject(obj2);
console.log(
`testObj2(5): ${ testObj2(5) }
testObj2('5'): ${ testObj2('5') }
testObj2(true): ${ testObj2(true) }
testObj2(lodash): ${ testObj2('lodash') }
`);