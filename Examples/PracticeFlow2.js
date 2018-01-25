// const _flow = require('lodash/flow');
// const _add = require('lodash/add');
const { flow: _flow, add: _add } = require('lodash');

let square = function(n){
  return n * n;
}

let addSquare = _flow([_add, square]);

console.log(addSquare(3, 4));
