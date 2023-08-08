// 如何建立簡單nosql database(面試常見)

interface DataBase {
    get(id: string): string;
    set(id: string, value: string): void;
}
// 建立可持久的接口
interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}
// 內存資料庫
class InMemoryDatabase implements DataBase {
    protected db: Record<string, string> = {};
    get(id: string): string {
        return this.db[id];
    }
    set(id: string, value: string): void {
        this.db[id] = value;
    }
}

const myDB = new InMemoryDatabase();
myDB.set('foo', 'bar');
// 問題:db資料被其他形式覆蓋=>db為非私有狀態
// 私有化方式:在db前加上private
// myDB.db['foo'] = 'baz';
console.log(myDB.get('foo'));

// -----
// 可持久的db
class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
    // 若this.db使用private，即使是class extends的情況，依然無法取的private的資訊，所以要改用protected
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const persistentDB = new PersistentMemoryDB();

persistentDB.set('test', 'bbb');
console.log(persistentDB.get('test'));
const saved = persistentDB.saveToString();
persistentDB.set('test', 'db1-sss');
console.log(persistentDB.get('test'));

const persistentDB2 = new PersistentMemoryDB();

persistentDB2.restoreFromString(saved);
console.log(persistentDB2.get('test'));
