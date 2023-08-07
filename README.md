# 設置 TS 方式:

-   npm init
-   npm add typescript -D
-   npm add ts-node -D

# 設置 compiler

-   npx tsc --init
    -   ps: 出現 tsconfig.json 為紅色，表示正常
    -   其意義說明目前專案還未建立 ts 檔案

# 使用 ts 編譯 js

-   npx ts-node yourfile.js
    -   但不會出現型別錯誤的檢測結果，所以斯要更改.js 為.ts

# 定義 object 方式

-   一般宣告方式:
    -   缺點:難以重用或修改
        const myPerson: {
        first: string;
        last: string;
        } = {
        first: 'Jeff',
        last: 'Herrington',
        };
-   透過 interface 建立可重複使用的型別宣告
    interface Person {
    first: string;
    last: string;
    }
    const myPerson: Person = {
    first: 'Jeff',
    last: 'Herrington',
    };
-   若要動態變更 object，可以宣告使用 Record
-   : Record<>
    -   可以定義 object 的 key/value 型別
-   使用 for/foreach/map 等迴圈時，不必特地規範型別，ts 會自行判斷
    -   但可以規範輸出的型別
    -   const out: number[] = [4, 5, 6].map((n) => n \* 10);

# function 的使用方式:

1.  輸入變數需要加上型別，然後在()後側加上輸出結果的型別宣告，如下:

    -   function(a: number,b: number): number{}
    -   如果 func 沒有 return，則在()後側使用: void
    -   處理 promise 方式:
    -   const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`); - 解構宣告: - function introduce(salutation: string, ...names: string[]): string {
        return `${salutation} ${names.join(' ')}`;
        }

2.  如果輸入變數為可選的，可以再宣告該變數時加上?
    -   function printIntgredient(quantity: string, ingredient: string, extra?: string)

# callback 的使用方式:

1. 當使用 callback 時，如果 func 不 return，可以使用 void
    - Ex:function printToFile(text: string, callback: () => void): void {
      console.log(text);
      callback();
      }
    - ()=>viod(表示輸出結果)，()則表示 callback 的輸入參數，型別宣告同 func
2. 可以將 callback 型別宣告拆出來，使程式更易讀
    - 使用 type
        - Ex:type MutationFunction = (v: number) => number;
        - type 可以使用 export 匯出，使其可複用

# 閉包 的使用方式:

1. 注意:整個閉包的輸出結果即是輸出型別，因此不須特意規範內部函式的輸出型別
    - Ex:export function createAdder(num: number): (val: number) => number {
      return (val: number) => num + val;
      }
2. 冗長的輸出型別宣告可以提出，與 callback 相同使用'type'

# 型別 unknow

-   可以認為是一種安全的 any 型別
-   使用此型別時，若要讓結果為其他型別(如 string)，可以使用'as'，透過 as 可以將 unknow 型別的參數進行轉換
    -   ex:coord = {
        x: args1 as number,
        y: args2 as number,
        };
-   as 也可以將函式內的參數轉換為 object 宣告的 key 值
    -   Ex:interface Coordinate {
        x: number;
        y: number;
        }
    -   用 as 轉換:
        coord[key as 'x' | 'y'] = parseInt(value, 10);

# overloads

1. ts 可以透過重複宣告 func 來指定函式的輸入規則，js 因為 hoisting 則不行
2. 函式超載指的是擴充一個函式可以被執行的形式。簡單來說就是針對同一個 function 提供多個不同的 type definition。可以使用相同的 function 名稱，定義不同的參數數量或型別創建多種方法。

3. Function Overload 會包含兩個部分：
    - overload signatures：也就是 type definition 的部分， 通常會定義 2 種或以上。
    - function implementation：實際上執行的 function，它的型別需要滿足所有的 overload signatures。

# tuples

1. tuple is array
2. 在 tuple 中的 array 裡的每個項目可以是任何類型，且彼此元素的型別也可不同

# generics(ts 的重點功能)

1. 使用方式:
    -   1. 將函式內的相同型別統一為某個大寫變數(一般為 T)
    -   2. 在函式的名稱後面加上<>，然後中間放入宣告的變數，
            - 如:function add<T>
2. generics 可透過該變數將型別統一，例如輸入變數以 generics 宣告，當輸入變數型別為 number，函式中以 generics 宣告的變數，其規範的型別將自動轉為 number
3. 當使用函式時，還可以重新決定 generics 變數的輸入型別，使函式接受多種型別輸入
    - 方式如下:
    - add<number | null>(null)
4. generics 可以傳遞:
    - 564

# generics with keyof

1. 可以將 generics 宣告的型別作為另一型別的 key 使用
    - 如: pluck<DataType, KeyType extends keyof DataType>
    - 上面 KeyType 作為 DataType 的 key 使用
2. keyof 的使用可以將輸入的型別限定在一個範圍，可以是某個傳入物件所擁有的 key 或是 interface 定義的型別

# ts 特點:

1. ts 執行在編譯(compiler)階段而非執行(run)階段
    - 如果將 ts 的函式匯入到 js，然後以 node 執行，將的到'MODULE_NOT_FOUND'，表示找不到該 module
    - 因此需要先對 ts 檔案進行編譯
    - npx tsc yourfile.ts
    - 執行後將得到編譯好的 yourfile.js，此時在引入 ts 的 jsfile 將會找到該 module
2. 當 js 在執行編譯好的 ts 時，並不會在執行時檢查型別，他只會在編譯時檢查型別。因為執行時檢查型別代價高
3. 若要確保編譯後的 js 函式可以在沒輸入參數時執行，可以在 ts 函式中為內部參數加上?，如此編譯後的 js 會將轉 undifined - Ex:export function getName(user: { first: string; last: string }): string {
   return `${user?.first} ${user?.last}`;
   }
    - 若不想出現 undifined，可以在 ts 中設定初值
    - Ex:export function getName(user: { first: string; last: string }): string {
      return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
      }
4. 函式的參數在宣告時加入'?'表示該參數可以為空
5. 可以在使用的各級變數之後加上'!'，使 ts 強制忽略該變數的值可能為 null 或 undefined 的情形，一邊情況下不建議使用
    - ex:return user.info.email!;
    - 見 optional.ts 範例

# 使 ts 可以匯入.json

-   需要在 tsconfig.json 加入控制項"resolveJsonModule": true
