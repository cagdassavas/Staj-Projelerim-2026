// const meyveler = ["Elma", "Armut","Muz","Portakal","Karpuz", "kavun", "kiraz"];

// console.log(meyve[0]);
// console.log(meyve[1]);
// console.log(meyve[2]);
// console.log(meyve[3]);
// console.log(meyve[4]);
// console.log(meyve[5]);
// console.log(meyve[6]);
// console.log(meyve[7]);

// for(let i = 5; i < 100; i++){
//     console.log(i);
// }
 //! 0'dan 100'e Kadar Sayıları Yazdır
//  for(let i =0; i <= 100; i = i +30){
//     console.log(i);
// }

//! Sayı Toplama

// let sayilar = [10, 20, 40, 40, 50, 500];
 // console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);

 
//  let toplam = 0;
//  for(let i = 0; i < sayilar.length; i++ ){
//     console.log(toplam = toplam + sayilar[i]);
//  }

//! Kısayol İndex

// let sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let toplam = 0;
// for(let i in sayilar){
// console.log(toplam += sayilar[i]);
// }

//! Direk Sayılar alma 

// let sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let toplam =0;
// for(let sayi of sayilar){
//    console.log(toplam += sayi);
// }

 //! Oobject ile döngü

//  const users ={
//    "ad": "Çağdaş",
//    "soyad": "Savaş",
//    "emaill": "savasc894@gmail.com",
//    "yas": 23
//  }
//  for(let key in users){
//    console.log(users[key]);
//  }

 //!Çoklu Kullanıcı

let users =[
  { 
    "id":"1",
  "ad": "Çağdaş",
   "soyad": "Savaş",
   "emaill": "savasc894@gmail.com",
   "yas": "23",
},
{ 
  "id":"2",
  "ad": "Derya Pınar",
   "soyad": "Ak",
   "emaill": "pinarak893@gmail.com",
   "yas": "23",
},
{ 
  "id":"3",
  "ad": "Recep",
   "soyad": "Kabakçı",
   "emaill": "Rercekkabakçi121@gmail.com",
   "yas": "17",
},
]
// console.log(users [0].soyad);
// console.log(users [1].ad);
// console.log(users [2].yas);

for(let i = 0; i < users.length; i++){
  console.log(users[i].ad);
}