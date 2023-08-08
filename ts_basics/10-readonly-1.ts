// breed:品種
// 在key前加入 readonly可使其無法被更改
interface Cat {
    readonly name: string;
    breed: string;
}
// 若要禁用全部則可改為type
type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): Cat {
    return {
        name,
        breed,
    };
}

const usul = makeCat('Usul', 'Tabby');
// name無法修改
// usul.name = 'sfsa';

// ------
// 在函式輸出加上readonly使輸出結果無法修改
function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
    return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;

const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 15;
