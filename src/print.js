/*


let [a, b, c] = [1, 2, 3];
console.log(a,b, c)

let { foo:baz } = {foo: 'aaa', bar: "bbb"};
console.log(baz);

let obj = {
    p: [
        "hello",
        { y: "world"}
    ]
}
let { p, p:[x , {y}] } = obj;
console.log(x,y,p)
let test2 = {};
({ test: test2} = {test : {test2:"test3"}})
console.log( test2);

let { length : len } = 'hello';
console.log(len)

function add([x, y]){
    return x + y;
  }
console.log(add([1, 2]));

const action = 10;
const tmp = `<div>this is <h2>模板字符串</h2> ${action} test</div>`;
var dom = document.createElement('div');
dom.innerHTML = tmp;
document.body.appendChild(dom);


function foo({x, y =5}) {
    console.log(x,y)
}
foo({x: 2})

let x = 99;
function foo(p = x + 1) {
    console.log(p);
}
foo();

x = 200;
foo()


function fetch(url, { body = '', method = 'Get',header= {} } = {}) {
    console.log(method);
}

fetch('hepp://test.com')


function f(x, y  = 5, z = 6) {
    return [x,y,z]  ;
}

console.log (f());
console.log (f.length);


//rest参数
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}

console.log(add(1,2,3,4))

//push 

function push (array, ...items) {
    items.forEach(function(item){
        array.push(item);
        console.log(item)
    });
}

var a = [];
push(a,1,2,3,4);
console.log(a)



//箭头函数

 var f = (num1, num2) => { return num1 + num2};
 console.log(f(2,3))

 var getItem = id => ({id:id, name: "temp"})

console.log( getItem(2))

const isEven = n => n % 2 === 0;
console.log(isEven(3));

const number = (x, ...nums) => [nums, x];
console.log(number(1,2,3,4))

function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
  var f = foo.call({id: 1});
  var t1 = foo.call({id: 2})()()();

  //箭头函数不适用场合

  //定义对象的方法

  const cat = {
      lives: 0,
      jumps: function() {
          this.lives++;
          console.log(this.lives);
      },
  }
  cat.jumps();

const pipeline = (...funs) => val => funs.reduce((a, b) => b(a), val)

const plus1 = a => a + 1;
const mult2 = a => a * 2;
var addThenMult = pipeline(plus1, mult2);
console.log(addThenMult(5))


//扩展运算符 将一个数组转为用逗号分隔的参数序列
const push = (array,...item) => array.push(...item);
var a = [];
push(a, 1,2,3,4,5);
console.log(a)

console.log(Math.max.apply(null, [13,2,17]));
console.log(Math.max(...[13,2,17]))

//复制数组
//es5

var a1 = [1,2];
var a2 = a1.concat();
a2[0] = 3;
console.log(a1, a2);

//es6
const a3 = [1,2];
const a4 = [...a3];
a4[0] = 3;
console.log(a3,a4);

//合并数组


const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d','e','f'];
//es5

const arr = [...arr1, ...arr2, ...arr3]
arr1[0] = 'aa'
console.log(arr)
console.log(arr1)


// const a1 = [{ foo: 1 }];
// const a2 = [{ bar: 2 }];

// const a3 = a1.concat(a2);
// const a4 = [...a1, ...a2];
// a1[0].foo = 4
// console.log(a3,a4)


//扩展运算符与解构赋值
const [first, ...rest] = [1,2,3,4,5];
console.log(first, rest);

// array from  将对象转化成数组
let arraylike = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    length: 3
}
var arr = Array.from(arraylike);
console.log(arraylike)
console.log(arr)

console.log(Array.from('hello'))


//Array.of 将一组值转换成数组
console.log(Array.of(3,11,5))


// 数组的 entries() keys() value()方法

const arr = ['a','b', 'c']
for (var value of arr.values() ) {
    console.log(value)
}

Array.prototype.method = function() {
    console.log(this.lenth)
}

const myArray = [1,2,3,4,5];
myArray.name = "数组";
console.log(myArray)

// myArray.forEach(function(i,v){
//     console.log(i,v)
//     if (i = 3) {
//         return false
//     } 
// })

// for ( let [index,value] of myArray.entries() ) {
//     console.log(index, value);
//     if( index == 2) {
//         break;
//     }
// }

// for (var index in myArray) {
//     if (myArray.hasOwnProperty(index)){
//         console.log(index)
//     }
// }



// 数组的inclundes()方法 返回一个布尔值，表示某个数组是否包含给定的值

console.log([1,3,4].includes(1,1))



//对象的扩展运算符

let {x, y, ...z} = {x: 1 ,y: 2, z: 4, a: 3};
console.log(x,y, z)

console.log(...['a','b','c']);
console.log( {...['a','b', 'c']} )

//合并两个对象
let a = {
    'age': 12,
    'name': 'aaa'
}
let b = {
    'age': 10,
    'name': 'bbb',
    'sex': 'boy'
}
console.log({...a, age:1, y:2})
console.log({ age:1, y:2, ...a})



//symbol 表示独一无二的值

let s = Symbol();
let b = Symbol();

let obj = {
    [s]: 'test',
    [b]: 'bbb'
}
obj[s] = 'test2'
obj[b] = 'test2'
console.log(obj[s] == obj[b])

const shapeType = {
    triangle: Symbol(),
    test : Symbol()
  };
  
function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
        case shapeType.test:
            area=  options.width + options.height;
    }
    return area;
}

console.log(getArea(shapeType.test, { width: 100, height: 100 }))
console.log(Object.keys(shapeType))

------------------- */

// proxy修改某些操作的默认行为

var person = {
    name:'张萨姆'
}

var proxy = new Proxy(person, {
    get: function(target, property){
        if (property in target) {
            return target[property]
        } else {
            return '2'
        }
    }
})

console.log(proxy.name)

