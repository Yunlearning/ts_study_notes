function addNumbers(a: number, b: number): number {
    return a + b;
}

export default addNumbers;

export const addString = (str1: string, str2: string): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number): string => `${title} ${param}`;

// 沒有return的輸出宣告方式:
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};
// 處理promise方式:
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// 解構宣告:
function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`;
}

// ts 執行在編譯(compiler)階段而非執行(run)階段
export function getName(user: { first: string; last: string }): string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
