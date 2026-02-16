//! fonksiyonlar kendi scope alanlarını oluşturur.
//! var ile if block içerisimde scope sıkıntı yaratır.
//! let be cost ile block içi scope oluşumunu sağlayaviliriz.

let kullanici = "global scope: Savaş"

function isimYazdir() {
    let kullanici = "functiom scope: Derya";
    console.log(kullanici);
}
if(true){
   let kullanici = "if scope Recep";
    console.log(kullanici);
}
console.log(kullanici);
isimYazdir();