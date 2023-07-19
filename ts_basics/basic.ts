let userName: string = 'Jeff';
let hasLoggedIn: boolean = true;

userName += ' Herrington';

console.log(userName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3];

// 定義object方式:
// 1. 一般宣告方式，缺點:難以重用或修改
// const myPerson: {
//     first: string;
//     last: string;
// } = {
//     first: 'Jeff',
//     last: 'Herrington',
// };
// 2. 透過interface建立可重複使用的型別宣告
interface Person {
    first: string;
    last: string;
}
const myPerson: Person = {
    first: 'Jeff',
    last: 'Herrington',
};

const ids: Record<number, string> = {
    10: 'q',
    20: 'w',
};
ids[30] = 'e';

if (ids[30] === 'S') {
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1, 2, 3].forEach((n) => console.log(n));
const out: number[] = [4, 5, 6].map((n) => n * 10);
// const out = [4, 5, 6].map((n) => `${n * 10}`);
