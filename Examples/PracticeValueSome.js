const _values = require('lodash/values');
const _some = require('lodash/some');

let obj = {
  number: 5,
  bool: false,
  string: 'lodash'
}

let testObj = function(searchTerm) {
  return _some(_values(obj), s => {
    return s === searchTerm;
  });
}

console.log('testObj(5): ' + testObj(5));
console.log('testObj(\'5\'): ' + testObj('5'));
console.log('testObj(true): ' + testObj(true));
console.log('testObj(lodash): ' + testObj('lodash'));