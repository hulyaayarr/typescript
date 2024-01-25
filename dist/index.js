// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "kardesPayi" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre
// olarak bir isim alsın. Eğer fonksiyona bir isim girilirse, fonksiyon
// "bir tane İSİM_BURAYA_GELECEK için, bir de benim için" şeklinde bir string dönsün.
// Eğer fonksiyona bir isim girilmezse, fonksiyon şu şekilde bir string dönsün:
// "bir tane senin için, bir de benim için."
// Örnekler:
// kardesPayi("Ahmet") --> "Bir tane Ahmet için, bir de benim için"
// kardesPayi() --> "Bir tane senin için, bir de benim için."
// Kodu buraya yazalım...
const kardesPayi = (name) => {
    if (name) {
        console.log(`bir tane ${name} için, bir de benim için.`);
    }
    else {
        console.log(`bir tane senin için, bir de benim için.`);
    }
};
kardesPayi("Ahmet");
kardesPayi();
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "Artık yıl" hesaplayan bir "isLeapYear" fonksiyonu yazalım. Bu fonksiyon,
// parametre olarak bir yıl alsın ve eğer bu yıl artık yıl ise true, değilse
// false dönsün. Bir yılın artık yıl olması için şu koşulların sağlanması gerekiyor:
// 1 - Yıl 4'e tam bölünmeli
// 2 - Yıl 100'e tam bölünmemeli
// VEYA
// 1 - Yıl 400'e tam bölünmeli
// Artık yıl hakkında daha fazla bilgi için:
// https://tr.wikipedia.org/wiki/Art%C4%B1k_y%C4%B1l
// Örnekler:
// artikYil(2024) --> true
// artikYil(2021) --> false
// artikYil(2020) --> true
// artikYil(2019) --> false
// artikYil(2000) --> true
// artikYil(1900) --> false
// artikYil(1700) --> false
// artikYil(1600) --> true
// İPUCU: mod alma işlemi için % operatörünü kullanabiliriz.
// Kodu buraya yazalım...
const artikYil = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
};
artikYil(2024);
artikYil(2021);
artikYil(2020);
artikYil(2019);
artikYil(2000);
artikYil(1900);
artikYil(1700);
artikYil(1600);
console.log("*****************OBJELER*****************");
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// "getProfit"  isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre
// olarak bir film alsın ve bu filmin worldwide gross (dünya çapındaki brüt hasılatı)
// ile budget (bütçesi) arasındaki farkı döndürsün. Bu farka "profit" yani kâr deniyor.
// Örnekler:
// getProfit(dune) --> 235671789
// getProfit(cats) --> -21166652
// Kodu buraya yazalım...
const getProfit = (movie) => {
    const profit = movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
    console.log(profit);
};
getProfit(dune);
getProfit(cats);
export {};
//# sourceMappingURL=index.js.map