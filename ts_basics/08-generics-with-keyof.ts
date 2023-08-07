function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map((item) => item[key]);
}

const dogs = [
    {
        name: 'Mini',
        age: 12,
    },
    {
        name: 'Black',
        age: 2,
    },
];
console.log(pluck(dogs, 'name'));
console.log(pluck(dogs, 'age'));

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    // 使addToCart需要提供BaseEvent的變數與quantity跟productID
    addToCart: BaseEvent & {
        quantity: number;
        productID: string;
    };
    checkout: BaseEvent;
}
function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
    console.log([name, data]);
}

sendEvent('addToCart', { productID: 'foo', user: 'Joe', quantity: 20, time: 10 });

sendEvent('checkout', { time: 20, user: 'May' });
