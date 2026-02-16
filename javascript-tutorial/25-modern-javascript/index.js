//!ARROW FUCTİON

// const sayHello = function(){
//     console.log("hello");
// }



// const sayHello2 = () => {
//     console.log("hello");
// };
// const sayHello3 = () => console.log("hello");

// const sayHello4 =function (name){
//     console.log(`Hello, ${name}`);
// };

// const sayHello5 = (name) => console.log(`Hello, ${name}`);

// sayHello5();

//! Array Methots

// map
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((x) => x * x);
// console.log(squares );

//! filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ciftSayilar = numbers.filter((x) => x % 2 ===0);
// console.log(ciftSayilar);

//! reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc,x)=>acc + x, 0);
// console.log(sum);

//! find
// const numbers = [0,  1, 2, 3, 4, 5];
// const findNumber = numbers.find((x)=> x  % 2 === 0);
// console.log(findNumber);

//! some
// const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isBigNumberExist = numbers.some((x) => x > 10);
// console.log(isBigNumberExist);

//! every
// const numbers = [2, 4, 6, 8, 10];
// const isAllEven = numbers.every(x=> x % 2 === 0);
// console.log(isAllEven);

//! spread opretor
// const numbers1 = [1, 2, 3];
// const numbers2 = [ ...numbers1,4, 5, 6];
// console.log(numbers2);

// const numbers = [1, 2, 3];
// const add = (x, y, z) => x + y + z;

// console.log(add(...numbers));

// const obj1 = {name: "john", age: 30 };
// const obj2 = { ...obj1, job: "Developer", ...obj1 };
// console.log(obj2);


//!Destructuring

// const obj = {name: "john", age: 30, job: "Developer"};
// const {name, age } = obj;
// const newObj = {name, age };
// console.log(newObj);

// const obj = {name: "John", age: 30 };
// const { name: firstName } = obj;
// console.log(firstName);

// const numbers = [1, 2, 3, 4, 5, 6];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// const obj = {name: "john", age: 30, job: "Developer"};
// const{name,age} =obj;
// const newObj = {name, age, location: "New York", ...obj};
// console.log(newObj);

//! Maps
const map =new Map();
map.set("name", "johny");
map.set("age", 30);
map.set("job", "Developer");

console.log(map.get("name"));
console.log(map.delee("ob"));
console.log(map);