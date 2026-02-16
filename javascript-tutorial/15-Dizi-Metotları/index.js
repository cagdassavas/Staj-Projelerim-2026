let products = ["pagani zodda","doc challenger", "BMW m4"];
let result;
// result = products;
result = products.length;

//! Array to String
// result = products.toString(); //string'e çevir
// result = products.join("-"); //Ayırma

//! Diziden Eleman Silme
// resuld = products.shift(); //İlk elemanı siler döndürür
// result = products.pop(); // Son elemanı siler döndürür


    //! Eleman Ekleme
//result = products.push("porshe"); //Dizi sonuna eleman ekler
//result = products.unshift("Porshe"); //Dizi başına eleman ekler

    
     //! Dizi Birleştirme
let urunler1 = ["allık", "toka"];
let urunler2 = ["ruj"," eilenier"];
let urunler3 = ["ayna", "fırça"];

//result = urunler1.concat(urunler3 ,urunler2);
// result = urunler1.splice(0, 0, "karpuz");
// result = urunler1.splice(0, 0, urunler2);
// result = urunler1.splice(0, 0,"lastik" );
 result = urunler1.splice(0, 2 );
console.log(result);
console.log(urunler1);

