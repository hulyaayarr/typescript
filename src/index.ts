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

const kardesPayi = (name?: string) => {
  if (name) {
    console.log(`bir tane ${name} için, bir de benim için.`);
  } else {
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

const artikYil = (year: number) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("true");
  } else {
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

// "Movie" türünü, aşağıdaki iki değişkenin doğru şekilde tür almasını sağlayacak şekilde
// tanımlayalım. "originalTitle" opsiyonel olsun

interface Movie {
  title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
}

const dune: Movie = {
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

const cats: Movie = {
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

const getProfit = (movie: Movie) => {
  const profit = movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
  console.log(profit);
};
getProfit(dune);
getProfit(cats);

console.log("*****************ARRAYLER*****************");

// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.

const ages: number[] = [];

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.

const gameBoard: string[][] = [[]];

// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};
const product1: Product = {
  name: "coffe mug",
  price: 11.5,
};
const product2: Product = {
  name: "laptop",
  price: 11.5,
};
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.

const getTotal = (products: Product[]) => {
  let total = 0;

  for (const product of products) {
    total += product.price;
  }
  console.log(total);
};
getTotal([product1, product2]);

console.log("*****************UNIONS*****************");

// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.

let highScore: number | boolean;

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın.
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.

let stuff: (string | number)[] = [];

stuff.push(8);
stuff.push("deneme");
console.log(stuff);

// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "SkillLevel" isminde bir literal türü oluşturalım (enum değil, literal tür).
// Bu tür, "Beginner", "Intermediate", "Advanced", ve "Expert" değerlerini alabilsin.

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "SkiSchoolStudent" isminde bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - name bir string olsun
// - age bir numara olsun
// - sport değeri "ski" veya "snowboard" olsun
// - level ise yukarıda oluşturduğumuz SkillLevel türünden bir değer olsun

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************
// RGB renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - r bir numara olsun
// - g bir numara olsun
// - b bir numara olsun

type RGB = {
  r: number;
  g: number;
  b: number;
};

// HSL renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - h bir numara olsun
// - s bir numara olsun
// - l bir numara olsun

type HSL = {
  h: number;
  s: number;
  l: number;
};

// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler
// bulunabilsin.

const colors: (RGB | HSL)[] = [];

// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.

function greet(name: string | string[]) {
  if (typeof name === "string") {
    console.log(`Merhaba ${name}`);
  } else if (Array.isArray(name)) {
    for (const names of name) {
      console.log(`Merhaba ${names}`);
    }
  }
}

greet("ayşe");
greet(["kamil", "esmeralda", "ramiz"]);
