// function sayHello(person: string) {
//     return 'Hello, ' + person;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let user = [0, 1, 2];
// // console.log(sayHello(user));
// let createdByBoolean: boolean = Boolean(1);
// console.log(createdByBoolean.Boolean)
// 数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
//字符串
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    alert('My name is Tom');
}
var u = undefined;
var n = null;
var num = undefined;
//12
var u;
var num = u;
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
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
var tom = {
    name: 'Tom',
    age: 25,
    gender: 123
};
tom.id = 9527;
//数组的类型
//最简单的方法是使用「类型 + 方括号」来表示数组：
var fibonacci = [1, 1, 2, 3, 5];
var fibonacci2 = [1, '1', 2, 3, 5]; //出现报错
fibonacci.push('8'); //传入参数也有影响，还是只允许传入number类型的
//数组泛型
var fibonacci3 = [1, 1, 2, 3, 5];
var fibonacci4 = [1, 1, 2, 3, 5];
//类数组
// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// }
function sum1() {
    var args = arguments;
}
//any 在数组中的应用 允许出现任意类型
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
//函数声明
// 函数声明（Function Declaration）
function sum2(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
var mySum1 = function (x, y) {
    return x + y;
};
function sum(x, y) {
    return x + y;
}
sum(1, 2, 3); //输入多余||少于的不行
var mySum3 = function (x, y) {
    return x + y;
};
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
//search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
//可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom1 = buildName('Tom');
//参数默认值
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat2 = buildName('Tom', 'Cat');
var tom2 = buildName('Tom');
//剩余参数 ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }
// let a: any[] = [];
// push(a, 1, 2, 3);
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
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
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (typeof (error instanceof ApiError).code === 'number') {
        return true;
    }
    return false;
}
var foo = 1;
foo.length = 2;
window.foo = 1;
var tom = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
var animal = tom;
console.log(animal);
function testAnimal(animal) {
    return animal;
}
function testCat(cat) {
    return cat;
}
//类型断言 vs 类型转换
// function toBoolean(something: any): boolean {
//     return something as boolean;
// }
// toBoolean(1);// 返回值为 1
function toBoolean(something) {
    return Boolean(something);
}
toBoolean(1); // 返回值为 true
document.addEventListener('click', function (e) {
    console.log(e.targetCurrent);
});
// let tom: [string, number];
// tom = ['Tom', 25];
var tom;
tom = ['Tom', 25];
tom.push('male');
tom.push(true);
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
//类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
