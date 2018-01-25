const { some, values } = require('lodash');

let obj = {
  number: 5,
  bool: false,
  string: 'lodash'
}
let testObj = function(searchTerm) {
  return some(values(obj), s => s === searchTerm);
}
// values(obj) = [5, false, 'lodash']
console.log(
`testObj(5): ${ testObj(5) }
testObj('5'): ${ testObj('5') }
testObj(true): ${ testObj(true) }
testObj(lodash): ${ testObj('lodash') }
`);


let obj2 = {
  number: 5,
  bool: false,
  string: 'lodash'
}
let testObj2 = function(searchTerm) {
  return some(values(obj2), s => s === searchTerm);
}
console.log(
`testObj2(5): ${ testObj2(5) }
testObj2('5'): ${ testObj2('5') }
testObj2(true): ${ testObj2(true) }
testObj2(lodash): ${ testObj2('lodash') }
`);