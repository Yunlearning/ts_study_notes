// const houses = require('./houses.json');
import houses from './houses';
interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithID {
    id: number;
    name: string;
    planets: string | string[];
}
// 將json的房子給予id，callback則透過name找對應房子?
export type HouseWithIDFunc = (house: House) => boolean;
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: HouseWithIDFunc): HouseWithID[];
function findHouses(houses: House[], filter: HouseWithIDFunc): HouseWithID[];
function findHouses(args1: unknown, args2?: unknown): HouseWithID[] {
    let houses: HouseWithID[] = [];
    if (typeof args1 === 'string') {
        const getHouses = JSON.parse(args1 as string);
        houses = getHouses.map((house: House, index: number) => {
            return {
                id: index + 1,
                ...house,
            };
        });
    } else if (typeof args1 === 'object') {
        const getHouses = args1 as House[];
        houses = getHouses.map((house: House, index: number) => {
            return {
                id: index + 1,
                ...house,
            };
        });
    }
    if (typeof args2 === 'function') {
        return houses.filter(args2 as HouseWithIDFunc);
    }
    return houses;
}
console.log(findHouses(houses));
console.log(findHouses(JSON.stringify(houses)));

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides'));

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
