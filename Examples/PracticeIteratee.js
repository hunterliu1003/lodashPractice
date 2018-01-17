const _iteratee = require('lodash/iteratee');

let john = { name: 'john', age: 54, gender: 'male' };
let jane = { name: 'jane', age: 36, gender: 'female' };
let mary = { name: 'mary', age: 18, gender: 'female' };
people = [john, jane, mary];

let getAge = _iteratee('age');

console.log('getAge:');
console.log('john Age: ' + getAge(john));
console.log('jane Age: ' + getAge(jane));
console.log('mary Age: ' + getAge(mary));

let is18 = _iteratee({age: 18});

console.log('\nis18:');
console.log('john: ' + is18(john));
console.log('jane: ' + is18(jane));
console.log('mary: ' + is18(mary));

let is18Female = _iteratee({gender: 'female', age: 18})

console.log('\nis18Female:');
console.log('john: ' + is18Female(john));
console.log('jane: ' + is18Female(jane));
console.log('mary: ' + is18Female(mary));