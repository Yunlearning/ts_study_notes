type ThreeDCoordniate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordniate, c2: ThreeDCoordniate): ThreeDCoordniate {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([0, 100, 0], [10, 20, 30]));

// 簡易react usestate實現，輸出是以tuple形式規範
function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        },
    ];
}

const [strGetter, setStrGetter] = simpleStringState('hello');
const [str2Getter, setStr2Getter] = simpleStringState('jeff');

console.log(str2Getter());
console.log(strGetter());
setStrGetter('goodbye');
console.log(strGetter());
console.log(str2Getter());
