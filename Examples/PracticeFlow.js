const _ = require('lodash');

function square(n){
  return n * n;
}

let addSquare = _.flow([_.add, square]);

console.log(addSquare(1, 2));