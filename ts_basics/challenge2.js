function redeceFilter(items) {
    return items.reduce((prev, curr) => {
        if (curr < 3) {
            return [...prev, curr];
            //
            // prev.push(curr);
            // return prev;
        }
        return prev;
    }, []);
}

const arr = [1, 2, 3];
// console.log(redeceFilter(arr));

function redeceFilter2(items, callbackFilter) {
    return items.reduce((prev, curr) => callbackFilter(prev, curr), []);
    // return items.reduce((prev, curr) => {
    //     if (curr < 3) {
    //         return [...prev, curr];
    //         //
    //         // prev.push(curr);
    //         // return prev;
    //     }
    //     return prev;
    // }, []);
}
console.log(
    redeceFilter2(arr, (prev, curr) => {
        if (curr < 3) {
            return [...prev, curr];
        }
        return prev;
    })
);
