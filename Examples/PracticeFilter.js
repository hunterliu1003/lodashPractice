const _iteratee = require('lodash/iteratee');
const _filter = require('lodash/filter');
const fpFilter = require('lodash/fp/filter');

let john = { name: 'john', age: 54, gender: 'male' };
let jane = { name: 'jane', age: 36, gender: 'female' };
let mary = { name: 'mary', age: 18, gender: 'female' };
let people = [john, jane, mary];

let filter18female = people.filter(person => {
  return person.gender == 'female' && person.age == 18;
});
let filter18femaleIteratee = people.filter(_iteratee({age: 18, gender: 'female'}));
let _filter18female = _filter(people, _iteratee({age: 18, gender: 'female'}));
// let _filter18female = _filter(people, {age: 18, gender: 'female'});
let fpFilter18female = fpFilter({age: 18, gender: 'female'});

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