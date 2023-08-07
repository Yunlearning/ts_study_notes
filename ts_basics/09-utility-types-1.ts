// 缺點:無法動態處理key的型別與數量，並且code重複且冗於
// interface MyUser {
//     name: string;
//     id: string;
//     email?: string;
// }
// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }
// ---------------------
// 利用根據一個型別，來建立出另一個型別的特性以Partial建立MyUserOptionals的型別
// 注意MyUserOptionals內部的key都改為'可選的'
interface MyUser {
    name: string;
    id: number;
    email?: string;
    phone?: string;
}
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    };
};

console.log(
    merge(
        {
            name: 'jack',
            id: 1,
            email: '1@yy.yy',
        },
        {
            email: '2@yy.yy',
        }
    )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

// Omit=>省略，可省略某個key
type UserWithoutID = Omit<MyUser, 'id'>;
const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other,
        };
        // ------
        // return {
        //     ...a,
        //     [v.id]: v,
        // };
    }, {});
};

console.log(
    mapById([
        {
            id: 1,
            name: 'Mr. Foo',
        },
        {
            id: 1,
            name: 'Mrs. Baz',
        },
    ])
);
