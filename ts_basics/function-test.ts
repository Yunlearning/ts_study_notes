import addNumbers, { getName } from './function';

console.log(addNumbers(1, 2));
// 型別錯誤
// console.log(addNumbers(1, 'jack'));

//
console.log(getName({ first: 'jeff', last: 'Herrington' }));
