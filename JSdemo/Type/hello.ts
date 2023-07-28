// function sayHello(person: string) {
//     return 'Hello, ' + person;
// }

// let user = [0, 1, 2];
// // console.log(sayHello(user));

// let createdByBoolean: boolean = Boolean(1);
// console.log(createdByBoolean.Boolean)

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

//字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
    alert('My name is Tom');
}

let u: undefined = undefined;
let n: null = null;
let num: number = undefined;

//12
let u: void;
let num: number = u;

//任意值
// let myFavoriteNumber: any = 'seven';
// myFavoriteNumber = 7;

// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');

// let something: any;
// something = 'seven';
// something = 7;
// something.setName('Tom');

//访问联合类型的属性或方法
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

//对象的类型——接口
interface Person {
    readonly id: number;
    name: string;
    age?: number;//可选属性？ 可要可不要，仍然不允许添加未定义的属性：
    // [propName: string]: any; //接口允许有任意的属性
    [propName: string]: string | number;
}
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender:123
};
tom.id = 9527;


//数组的类型
//最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci2: number[] = [1, '1', 2, 3, 5];//出现报错
fibonacci.push('8'); //传入参数也有影响，还是只允许传入number类型的

//数组泛型
let fibonacci3: Array<number> = [1, 1, 2, 3, 5];
//接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci4: NumberArray = [1, 1, 2, 3, 5];
//类数组
// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// }
function sum1() {
    let args: IArguments = arguments;
}

//any 在数组中的应用 允许出现任意类型
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];



//函数声明
// 函数声明（Function Declaration）
function sum2(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
let mySum1 = function (x, y) {
    return x + y;
};

function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3);//输入多余||少于的不行


let mySum3 = function (x: number, y: number): number {
    return x + y;
};
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
//search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');

//参数默认值
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName('Tom', 'Cat');
let tom2 = buildName('Tom');

//剩余参数 ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }

// let a: any[] = [];
// push(a, 1, 2, 3);

function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

//重载
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}




//类型断言 as
// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }

// function isFish(animal: Cat | Fish) {
//     if (typeof (animal as Fish).swim === 'function') {
//         return true;
//     }
//     return false;
// }

//将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error instanceof  ApiError).code === 'number') {
        return true;
    }
    return false;
}

const foo: number = 1;
foo.length = 2;
(window as any).foo = 1;


interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal: Animal = tom;
console.log(animal)

//当 Animal 兼容 Cat 时，它们就可以互相进行类型断言了：
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}

//类型断言 vs 类型转换
// function toBoolean(something: any): boolean {
//     return something as boolean;
// }
// toBoolean(1);// 返回值为 1

function toBoolean(something: any): boolean {
    return Boolean(something);
}
toBoolean(1); // 返回值为 true


//类型断言 vs 类型声明
// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }
// interface Cat {
//     name: string;
//     run(): void;
// }
// const tom3: Cat = getCacheData('tom');
// tom3.run();



//--声明文件--
// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }
}
document.addEventListener('click', function(e) {
    console.log(e.targetCurrent);
});

// let tom: [string, number];
// tom = ['Tom', 25];

let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);


enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true



//类
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
}
let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack