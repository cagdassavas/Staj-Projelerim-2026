// let araba = {
//     renk: "mavi",
//     hiz: 0,
// };

// console.log(araba.renk);
// console.log(araba.hiz);

//! method

// let araba ={
//     renk:"mavi",
//     hiz:0,
//     hizlandir: function(deger) {
//         this.hiz += deger;
//     },
// };
// araba.hizlandir(14515)
// console.log(araba.hiz);

//! constructor ES5
 
// function Araba(renk) {
//     this.renk = renk;
//     this.hiz = 0;
// }

// Araba.prototype.hizlandir =function(deger){
// this.hiz += deger;
// }
// let araba = new Araba("red");

// console.log(araba.renk);
// araba.hizlandir(100)
// console.log(araba.hiz);

//! constructor ES6

// class Araba{
//     constructor(renk){
//         this.renk = renk;
//     }
// }
// let araba = new Araba("siyah");
// console.log(araba.renk);

//! class
// class Araba{
//     constructor(renk){
//         this.renk = renk;
//         this.hiz = 0
//     }
//     hizlandir(deger){
//         this.hiz += deger;
//     }
// }
// let araba = new Araba("siyah")
// console.log(araba.renk);
// araba.hizlandir(200)
// console.log(araba.hiz);

// class MotorluAraba extends Araba {
//      constructor(renk, motor) {
//         super(renk);
//         this.motor = motor;
//     }
// }
// let motorAraba = new MotorluAraba("siyah","v8");
// let araba = new Araba("red"); 

// console.log(motorAraba.renk);
// console.log(motorAraba);
// console.log(araba.renk);

//!encapsulation

// class Araba{
//     #renk;
//     constructor(renk, hiz) {
//         this.#renk =renk;
//         this.hiz = hiz;
//     }
// }

// const araba = new Araba("siyah", 10)
// console.log(araba.hiz)
// class Araba
//     #renk
//     constructor(renk, hiz) 
//         this.#renk =renk
//         this.hiz = hiz
//     
//     getRenk()
//          return this.#ren
//     
//     setRenk(renk) 
//         this.#renk = renk
//     }
// }
// const araba = new Araba("red",10);
// console.log(araba.getRenk());
// araba.setRenk("blue")
// console.log(araba.getRenk());

//! polymorphism
// class Shape {
//     draw(){
//         console.log("şekil çiziliyor.");
//     }
// }

// let shape = new Shape();

// console.log( shape.draw());


// class Shape {
//     draw(){
//         console.log("şekil çiziliyor.");
//     }
// }
// class Circle extends Shape {
//     draw(radius) {
//         console.log(`${radius}radiuslu bir daire çiziliyor`);
//     }
// }
// let shape = new Shape();
// let circle = new Circle();
// console.log(circle.draw("20"));


//!abstraction

// 1. Önce Database sınıfını tanımla (BU KISIM SENDE EKSİK)
class Database {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
}

// 2. Sonra DataController sınıfını yaz
class DataController extends Database {
    constructor(data) { 
        // DİKKAT: constructor(data) yanındaki ";" işaretini mutlaka sil!
        super(data);
    }

    getData() {
        return "Data: " + super.getData();
    }
}

// 3. Kullanım
const database = new Database("savaş");
const dataController = new DataController("Derya");

console.log(database._data);
console.log(dataController._data);