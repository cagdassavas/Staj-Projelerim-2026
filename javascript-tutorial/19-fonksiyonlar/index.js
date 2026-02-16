
// let sayi1 = 15;
// let sayi2 = 20;
// let sayi3 = 25;
// let toplam = sayi1 + sayi2 + sayi3; // İsimleri doğru yazalım

// let sayi4 = 15;
// let sayi5 = 15;
// let sayi6 = 15;
// let toplam2 = sayi4 + sayi5 + sayi6; // Yeni sayıları toplayalım

// console.log(toplam);
// console.log(toplam2);

//! Basit toplama fonksiyonu

// function sayiToplami(sayi1, sayi2){
//     let toplam = sayi1 + sayi2;
//     console.log(toplam);
// }

//  sayiToplami(10, 20);
// sayiToplami(40, 20);

//! Gelişmiş Toplama  Fonksiyonu
//  function sayiToplami(...sayilar){
//     let toplam = 0;
//     for (let sayi of sayilar){
//         console.log(sayi);
//     }
//     }

//     sayiToplami(10, 20, 30, 40, 50, 60, 5, 2, 3);

// let toplam = 0;
// function sayiToplami(...sayilar) {
//     for (let sayi of sayilar){
//         toplam += sayi;
//     }
// }

// sayiToplami(10, 20, 30, 40, 50, 60, 5, 2, 3);
// console.log(toplam);

//! Yaş Hesaplama
function yasHesapla(dogumYili){
    let yil = new Date().getFullYear();
    console.log(yil - dogumYili);
}
yasHesapla(2003);     