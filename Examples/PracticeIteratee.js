const _iteratee = require('lodash/iteratee');

let john = { name: 'john', age: 54, gender: 'male' };
let jane = { name: 'jane', age: 36, gender: 'female' };
let mary = { name: 'mary', age: 18, gender: 'female' };

let getAge = _iteratee('age');
let is18 = _iteratee({age: 18});
let is18Female = _iteratee({gender: 'female', age: 18})

console.log(
`getAge:
  john Age: ${ getAge(john) }
  jane Age: ${ getAge(jane) }
  mary Age: ${ getAge(mary) }
is18:
  john: ${ is18(john) }
  jane: ${ is18(jane) }
  mary: ${ is18(mary) }
is18Female:
  john: ${ is18Female(john) }
  jane: ${ is18Female(jane) }
  mary: ${ is18Female(mary) }
`);