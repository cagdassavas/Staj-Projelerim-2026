let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;
//! 1-Aritmatik Oparatörler
//? +, -, /, *, , % ,++, --
 result = number1 + number3;
result = number2 - number3;
result = number2 / number3;
result = number2 * number3;
result = number2 % number1;

//! 2- Atama Oparatörleri
// //? =, +=, /=, *=, %=
result = number1;
 result += number2; /* result + number2;*/
 result -= number2; /* result - number2;*/
 result /= number2; /* result / number2;*/
 result *= number2; /* result * number2;*/
 result %= number2; /* result % number2;*/

//! 3- Karsılaştırma Oparatötleri
//? ==, !=, ===, <, >, >=, <=
result = number1 == number2;
result = number1 != number2;
result = 10 == 10 ;    // sayıların arasındaki değere bakar//
result = 10 === "10 "; //tip değer sağdaki değere bakar//
result = number1 > number2;
result = number2 < number1;
result = number1 >= number2;
result = number1 <= number2;
// console.log(result);
//! 4- Mantıksal Oparatörler
//? &&: ve, ||:veya, !:tersi

//&& ve: iki şartıda sağlaması gerekiyor
// console.log(number1 !== number2);
// console.log(number1 !== number2 && number1 > number2);

// || veya: true için bir şartı sağlaması yeterli
// console.log(number1 > number3 || number1 !== number1);
 
/* ! tersi  */
console.log(!(number1 > number3) && number2 >= number1);
