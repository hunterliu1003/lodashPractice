let john = { name: 'john', age: 54, gender: 'male', obj: {
  a: 'a', b: 'b'
} };

let john2 = { ...john }

john2.name = 'jeff';
john2.obj.a = 'hunter';

console.log(john)
console.log(john2)