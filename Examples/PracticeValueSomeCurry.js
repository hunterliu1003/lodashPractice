const _values = require('lodash/values');
const _some = require('lodash/some');
const _curry = require('lodash/curry');

let obj = {
  number: 5,
  bool: false,
  string: 'lodash'
}

let testObj = function(object, searchTerm) {
  return _some(_values(object), s => {
    return s === searchTerm;
  });
}

console.log('testObj(5): ' + testObj(obj, 5));
console.log('testObj(\'5\'): ' + testObj(obj, '5'));
console.log('testObj(true): ' + testObj(obj, true));
console.log('testObj(lodash): ' + testObj(obj, 'lodash'));

let curryTestObj = function(object) {
  return function(searchTerm) {
    return _some(_values(object), s => {
      return s === searchTerm;
    });
  }
}

let _curryTestObj = curryTestObj(obj);

// let _curryTestObj = _curry(testObj)(obj);

console.log('\ncurryTestObj(5): ' + _curryTestObj(5));
console.log('curryTestObj(\'5\'): ' + _curryTestObj('5'));
console.log('curryTestObj(true): ' + _curryTestObj(true));
console.log('curryTestObj(lodash): ' + _curryTestObj('lodash'));