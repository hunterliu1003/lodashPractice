const { iteratee, filter } = require('lodash');
const fpFilter = require('lodash/fp/filter');

let john = { name: 'john', age: 54, gender: 'male' };
let jane = { name: 'jane', age: 36, gender: 'female' };
let mary = { name: 'mary', age: 18, gender: 'female' };
let people = [john, jane, mary];

let filter18female = people.filter(person => {
  return person.gender == 'female' && person.age == 18;
});

let is18Female = {
  age: 18,
  gender: 'female'
}

let filter18femaleIteratee = people.filter(iteratee(is18Female));
let _filter18female = filter(people, iteratee(is18Female));
// let _filter18female = filter(people, is18Female);
let fpFilter18female = fpFilter(is18Female);

console.log(
`filter18female:
${ JSON.stringify(filter18female) }
filter18femaleIteratee:
${ JSON.stringify(filter18femaleIteratee) }

_filter18female:
${ JSON.stringify(_filter18female) }
fpFilter18female(auto-currying):
${ JSON.stringify(fpFilter18female(people)) }
`);


// let isMale = {
//   gender: 'male'
// }
// console.log(fpFilter(isMale, people));
// console.log(fpFilter(isMale)(people));