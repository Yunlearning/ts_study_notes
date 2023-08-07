// func overloading
/*
 * 程式說明:
 * 將parseCoordinateFromObject與parseCoordinateFromNumbers整合為一個函式
 * 使其可以將輸入的參數正確地轉換成座標object
 * 情境1:輸入式包含xy的object則直接輸出
 * 情境2:輸入2個數字，則轉換為object輸出
 *
 */
interface Coordinate {
    x: number;
    y: number;
}
// 一般做法
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return { ...obj };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y,
    };
}
// 整合
/**
 * 確保輸出始終符合Coordinate
 *
 *
 */
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(args1: unknown, args2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };
    if (typeof args1 === 'string') {
        (args1 as string).split(',').forEach((str) => {
            const [key, value] = str.split(':');
            coord[key as 'x' | 'y'] = parseInt(value, 10);
        });
    } else if (typeof args1 === 'object') {
        coord = {
            ...(args1 as Coordinate),
        };
    } else {
        coord = {
            x: args1 as number,
            y: args2 as number,
        };
    }
    return coord;
}

console.log(parseCoordinate(10, 5));
console.log(parseCoordinate({ x: 85, y: 47 }));
console.log(parseCoordinate('x: 12,y: 3'));
