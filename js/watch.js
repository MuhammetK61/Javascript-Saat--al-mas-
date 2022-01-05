//Burada kullanıcıdan isim bilgilsini alıyoruz. 
//Daha sonra querySelector ile Htmlde bulunan ıd ye gönderiyoruz
var newName = prompt('Adınızı giriniz:')
let myName = document.querySelector("#myName")
myName.innerHTML = `${newName}`


//Saat Kısmı

var tarih = new Date();
var saat=tarih.getHours();
var dakika =tarih.getMinutes();
var saniye = tarih.getSeconds();
if (saat < 10){
    saat = "0"+saat;
}else{
    saat;
}
if(dakika < 10){
    dakika = "0"+dakika;
}else{
    dakika;
}
if(saniye < 10){
    saniye = "0"+saniye;
}else{
    saniye;
}

let myClock = document.querySelector("#myClock");

myClock.innerHTML = `${saat}: ${dakika}: ${saniye}`