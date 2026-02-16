let url = "https://www.savasholding.com.tr";
let youtube = "Pagani Sürmek";
let result;

//! --- 1-Karakter Sayısı Bulma --- !//
result = url.replace(" "," ").length;
result = youtube.length;
result =youtube.replace(" ", " ").length;



//! --- 2-Youtube Karakteri Kaç Haneden Oluşuyor --- ?//
// result = youtube.split(" ").length;
// result = url.split(".").length;

//! --- 3-Kanal Adı Başlangıç Kontrol--- !//
// result = youtube.startsWith("Pagani");
// esult =url.startsWith("https://www.savasholding.com.tr");
// if(result){
//     console.log("Test Başarılı Pagani <3 ");
// }else{
// console.log("Test Başarısız Sana Pagani yok :(")
// }

//! --- 4-Kelime Kontrolü --- ?//
// if(youtube.indexOf("Pani") > -1){
//     console.log("BAŞARDIN ARTIK <BİR PAGANİNN VARRR <3");
// }else{
//     console.log("BECERİKSİZ YOK SANA PAGANİ >:(");
// }
//! --- 5- Url ve Youtube Derğişkeni Birleştir --- !// 
youtube = youtube.toLocaleLowerCase().replace(" ", "-");
// url = url.replace("com", "com/");
 url = "https://www.savasholding.com.tr";
let newUrl = url.replace(url, url + youtube);
newUrl = `${url}/${youtube}`

console.log(newUrl);