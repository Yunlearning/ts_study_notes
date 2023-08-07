// 簡易react usestate實現，將其調整為可接受泛用(generics)的型別規範
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let str: T = initial;
    return [
        () => str,
        (v: T) => {
            str = v;
        },
    ];
}

const [numGettter, setnumGetter] = simpleState(0);
console.log(numGettter());
setnumGetter(55);
console.log(numGettter());

//
const [strGettter, setstrGetter] = simpleState<string | null>(null);
console.log(strGettter());
setstrGetter('str');
console.log(strGettter());

// generics傳遞
interface Rank<RankerItem> {
    item: RankerItem;
    rank: number;
}
function ranker<RankerItem>(items: RankerItem[], rank: (v: RankerItem) => number): RankerItem[] {
    const ranks: Rank<RankerItem>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map((rank) => rank.item);
}

interface Pokemon {
    name: string;
    hp: number;
}
const pokemon: Pokemon[] = [
    {
        name: '快樂蛋',
        hp: 255,
    },
    {
        name: '脫殼忍者',
        hp: 1,
    },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
