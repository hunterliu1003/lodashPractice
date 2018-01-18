const _ = require('lodash');

let square = function(n){
  return n * n;
}

let addSquare = _.flow([_.add, square]);

console.log(addSquare(1, 2));