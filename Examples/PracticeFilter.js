const _iteratee = require('lodash/iteratee');
const _filter = require('lodash/filter');
const fpFilter = require('lodash/fp/filter');

let john = { name: 'john', age: 54, gender: 'male' };
let jane = { name: 'jane', age: 36, gender: 'female' };
let mary = { name: 'mary', age: 18, gender: 'female' };
people = [john, jane, mary];

console.log('filter:');

console.log(
  people.filter(function(obj) {
    return obj == null ? undefined : obj['gender']=='female'
  })
);

console.log('\nfilter with _iteratee:');
console.log(people.filter(_iteratee({age: 18})));

console.log('\n_filter with _iteratee:');
console.log(_filter(people, _iteratee({age: 18, gender: 'female'})));

console.log('\n_filter:');
console.log(_filter(people, {age: 18, gender: 'female'}));

console.log('\nfpFilter(auto-currying):');
console.log(fpFilter({age: 18, gender: 'female'})(people));
console.log(fpFilter({age: 18, gender: 'female'}, people));
