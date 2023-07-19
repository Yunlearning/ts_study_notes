const houses: House[] = require('./houses.json');

interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithID extends House {
    id: string;
}

function createRandomId() {
    return Math.random().toString(36).substr(2, 9);
}
function findHouses(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
    var hs: House[];
    if (typeof houses === 'string') {
        hs = JSON.parse(houses);
    } else {
        hs = houses;
    }

    let housesWithId: HouseWithID[] = hs.map((h) => ({
        id: createRandomId(),
        ...h,
    }));

    if (filter) {
        return housesWithId.filter(filter);
    } else {
        return housesWithId;
    }
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides'));

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
