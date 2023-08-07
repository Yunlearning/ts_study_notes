function printIntgredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`);
}

printIntgredient('1C', 'Flour');
printIntgredient('1C', 'Sugar', 'Something more');

interface User {
    id: string;
    info?: {
        email?: string;
    };
}
// 使用'!'忽略info|email出現null或undefined的情形(通常不建議使用)
function getEmail(user: User): string {
    if (user.info) {
        return user.info.email!;
    }
    return '';
}
// 更好的方式:
function getEmailEasy(user: User): string {
    return user?.info?.email ?? '';
}

// callback的可選方式
function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x, y]);
    callback?.();
}
