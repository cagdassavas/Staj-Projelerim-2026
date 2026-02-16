// let customer1 = ["savaş",["karpuz","kavun", "portakal", [10, 20, 30]]];

// console.log(`ürün ${customer1[1][0]} fiyati: $${customer1[1][3][0]}`);

let customer1 = {
    "ad": "Çağdaş",
  "soyad": "Savaş",
  "sehir": "Antalya",
  "yas": 23,
   "products":
   {
    "car": "Pagani",
    "price" : "100000000000000$"
 }
};

let customer2 = {
    "ad": "Derya Pınar",
  "soyad": "AK",
  "sehir": "İstanbul",
  "yas": 23,
  "products":
    {
    "ruj": "Dior",
    "price": "10000$"
    }
};

let customer3 = {
    "ad": "Rercep",
  "soyad": "Kavakçı",
  "sehir": "İzmir",
  "yas": 17,
};
//  console.log(customer2.products.price);

let musteriler = [
    customer1,
    customer2,
    customer3,
]

let ürünler = [
    {
        "urunadi": "Pagani",
        "fiyati":"100000000000000000$"
    },
     {
        "urunadi": "Mclaren",
        "fiyati":"10000000000$"
    },
     {
        "urunadi": "Porshe",
        "fiyati":"1000000$"
    },
]

console.log(ürünler[0]);
