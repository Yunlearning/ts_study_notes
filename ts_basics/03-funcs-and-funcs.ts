// callback
export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

// export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[] {
//     return numbers.map(mutate);
// }
// 提出mutate:
export type MutationFunction = (v: number) => number;
export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));
// 複用type
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

// 閉包
export type AdderFunction = (val: number) => number;
export function createAdder(num: number): AdderFunction {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(50));
