let tarih = new Date();
let result;

//!--- Get Metots ---
result = tarih.getDate(); //!gün
result = tarih.getDay();//! 0 = pazar, 6 = cumartesi⁡
result = tarih.getHours(); //! saat⁡
result = tarih.getTime();  //! milisaniye
result = tarih.getTimezoneOffset();


 //! Tarihi Güncelleme Methotları - Set Methods --
tarih.setFullYear(2026);  //! Tarihi Sen Ayarlarsın⁡
tarih.getFullYear();     //! Tarihi Kendisi Ayarlar⁡
tarih.setMonth(9); //! ÖnemlNot;"Sayaç her zaman sıfırdan başlar"⁡
tarih.setDate(8);
result = tarih;

//! ⁡⁣⁣⁢--- Doğum tarihi ---⁡

let dogumTarihi = new Date(2003, 8, 14);
result = tarih.getFullYear() - dogumTarihi.getFullYear();




console.log(result);

 







