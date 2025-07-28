// const twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]; // 7
//     if (map.has(complement)) {
//       // 7 map ichida bormi ? false
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i); // mapga qoshadi numsni o-sini shudaynmi
//   }
// };

// let res = twoSum([2, 7, 11, 15], 9);
// let res = twoSum([3,2,4], 6);
// let res = twoSum([3,3], 6);

//===============================================

// problem 2 isPolindrome
// function isPalindrome(num) {
//   let arrNum = num.toString().split('').reverse().join('');
//   if (Number(arrNum) === num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// ==============================
// 1-masala: Juft sonlar yig‘indisi
// Vazifa:
// Berilgan butun son n uchun 1 dan n gacha bo‘lgan faqat juft sonlar yig‘indisini qaytaruvchi funksiya yozing.
// function sumEven(num) {
//   let counter = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       counter += i;
//     }
//   }
//   return counter;
// }

// let res = sumEven(10); // 2 + 4 + 6 + 8 + 10 = 30
// console.log(res);

//====================================================

// 2-masala: Eng uzun so‘z
// Vazifa:
// Berilgan matndan eng uzun so‘zni toping. Faqat birinchi uchragan eng uzun so‘zni qaytaring.

// function longestWord(str) {
//   let longWord = '';
//   let strArr = str.split(' ').forEach((word) => {
//     if (longWord.length < word.length) {
//       longWord = word;
//     }
//   });

//   return longWord;
// }

// let res = longestWord('Men JavaScriptni yaxshi ko‘raman!'); // "JavaScriptni"

// console.log(res);

//==========================================================

// 3-masala: FizzBuzz
// Vazifa:
// 1 dan n gacha bo‘lgan sonlarni quyidagi qoidalarga ko‘ra chop eting:
// 3 ga bo‘linadigan son o‘rniga "Fizz"
// 5 ga bo‘linadigan son o‘rniga "Buzz"
// Ham 3, ham 5 ga bo‘linadigan son o‘rniga "FizzBuzz"
// Aks holda o‘zini chiqaring

// function fizzBuzz(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

//=====================================================
// 1-masala: So‘z ichidagi unli harflar soni
// Vazifa:
// Berilgan matnda nechta unli harf borligini toping (a, e, i, o, u harflari, katta-kichik farqsiz).

// function countVowels(str) {
//   let counter = 0;
//   const unliHarflar = 'aeiouAEIOU'; // bu qatorda unli harflar kiritilishi kerak edi
//   for (let i = 0; i < str.length; i++) { // <= emas, < bo‘lishi kerak
//     if (unliHarflar.includes(str[i])) {
//       counter++;
//     }
//   }
//   return counter;
// }

//==========================================

// 2-masala: Takrorlanuvchi elementni topish
// Vazifa:
// Berilgan array ichida birinchi bo‘lib takrorlangan elementni qaytaring. Agar yo‘q bo‘lsa, undefined qaytaring.

// function findDuplicate(arr) {
//   let num = undefined;
//   arr.forEach((element, index, arr) => {
//     if (index !== arr.lastIndexOf(element)) {
//       num = element;
//     }
//   });
//   console.log(num);

//   return num;
// }

// function findDuplicate(arr) {
//   let seen = new Set();
//   for (let el of arr) {
//     if (seen.has(el)) return el;
//     seen.add(el);
//   }
//   return undefined;
// }

// findDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4]); // 2
// findDuplicate([1, 2, 3, 4]); // undefined

//============================
// Eng ko‘p takrorlangan harfni topish
// Vazifa:
// Berilgan satrda eng ko‘p takrorlangan harfni toping va uni qaytaring.
// Bo‘sh joylar, belgilar e’tiborga olinmasin. Agar bir nechta harflar bir xil takrorlangan bo‘lsa, birinchi uchraganini qaytaring.

// function mostFrequentChar(str) {
//   let word = str
//     .toLowerCase()
//     .trim()
//     .split('')
//     .reduce((acc, curVal) => {
//       if (curVal in acc) {
//         acc[curVal] += 1;
//       } else if (curVal !== ' ') {
//         acc[curVal] = 1;
//       }
//       return acc;
//     }, {});
//   let maxCount = 0;
//   let mostFrequent = '';

//   for (let char in word) {
//     if (maxCount < word[char]) {
//       maxCount = word[char];
//       mostFrequent = char;
//     }
//   }
//   return mostFrequent;
// }

// let res = mostFrequentChar('assssalomu alaykum');
// console.log(res);

//================================================
// 2-masala: Anagram tekshirish
// Vazifa:
// Ikki so‘z berilgan. Ular anagram ekanligini aniqlang.
// Anagram — harflari bir xil, lekin tartibi boshqacha bo‘lgan so‘zlar (masalan: "listen" va "silent").

// ✅ Shartlar:
// Faqat harflarni hisobga oling, boshqa belgilar bo‘lsa, e’tibor bermang.
// Katta-kichik harf farqi bo‘lmasin.
// Bo‘sh joylar e’tiborga olinmaydi.

// const isAnagram = (prop1, prop2) => {
//   let newProp1 = prop1
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .split('')
//     .sort();
//   let newProp2 = prop2
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .split('')
//     .sort();
//   if (newProp1.length !== newProp2.length) {
//     return false;
//   }

//   let anagram = false;
//   for (let i = 0; i <= newProp1.length; i++) {
//     if (newProp1[i] === newProp2[i]) {
//       anagram = true;
//     } else {
//       anagram = false;
//     }
//   }
//   return anagram;
// };

// const isAnagram = (str1, str2) => {
//   const normalize = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z]/g, '')
//       .split('')
//       .sort()
//       .join('');

//   return normalize(str1) === normalize(str2);
// };

// console.log(isAnagram('listen', 'silent'));
// console.log(isAnagram('Hello', 'Hello'));
// console.log(isAnagram('Hello', 'Hello'));

//==========================================================

// Yagona elementni toping
// Vazifa:
// Berilgan arrayda barcha elementlar juftlab kelgan, faqat bitta elementdan bitta dona bor. O‘sha elementni topuvchi funksiya yozing.
// Arrayda raqamlar bo‘ladi, va barcha raqamlar 2 martadan qatnashgan bo‘ladi, faqat bitta elementdan tashqari.

// function findSingle(arr) {
//   let obj = arr.reduce((acc, curVal) => {
//     if (curVal in acc) {
//       acc[curVal] += 1;
//     } else {
//       acc[curVal] = 1;
//     }
//     return acc;
//   }, {});

//   for (let num in obj) {
//     if (obj[num] === 1) {
//       return num;
//     }
//   }

// }

//2-usul

// function findSingle(arr) {
//   return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
// }

// console.log(findSingle([2, 3, 5, 4, 5, 3, 4]));
// console.log(findSingle([1, 1, 2]));
// console.log(findSingle([7]));

//=====================================

// 4-masala: So‘zdagi takrorlanuvchi birinchi harfni toping
// Vazifa:
// Berilgan satrda birinchi marta takrorlangan harfni toping.
// Agar hammasi unikal bo‘lsa, undefined qaytaring.

// function firstDuplicateChar(str) {
//   let firstDuplicate = str
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .split('');
//   let unikArr = new Set(firstDuplicate);

//   if ([...unikArr].length === firstDuplicate.length) {
//     return undefined;
//   } else {
//     return firstDuplicate.find(
//       (item, index, arr) => index !== arr.lastIndexOf(item)
//     );
//   }
// }

// let seen = new Set();

// for (let ch of str) {
//   if (seen.has(ch)) return ch;
//   seen.add(ch);
// }
// return undefined;

// console.log(firstDuplicateChar('javascript'));
// console.log(firstDuplicateChar('abcde'));
// console.log(firstDuplicateChar('hello'));

//=====================================================

// 5-masala: So‘zlarni teskari tartibda chiqarish
// Vazifa:
// Berilgan gapdagi so‘zlarni teskari tartibda chiqaradigan funksiya yozing.
// Faqat so‘zlar o‘rnini almashtiring, har bir so‘z ichidagi harflar joyida qoladi.

// function reverseWords(str) {
//   let arr = str.split(' ').reverse().join(' ');
//   return arr;
// }

// console.log(reverseWords('salom Asadbek'));

//======================================================
// 6-masala: So‘zlar ichidagi harflarni teskari qilish
// Vazifa:
// Gapdagi har bir so‘zning harflarini teskari qilib, umumiy tartibni saqlab qoling.

// function reverseLetters(str) {
//   let newStr = str
//     .split(' ')
//     .map((item) => {
//       return item.split('').reverse().join('');
//     })
//     .join(' ');

//   return newStr;
// }

// console.log(reverseLetters('Men React o‘rganayapman'));

//=================================================

// 7-masala: Faqat raqamlarni ajratib olish
// Vazifa:
// Berilgan matndan faqat raqamlarni ajratib olib, ularni bitta yangi stringga birlashtiring.
// Agar hech qanday raqam bo‘lmasa, "raqam topilmadi" deb qaytaring.

// function extractNumbers(str) {
//   let numberStr = '';
//   for (let i of str) {
//     if (!isNaN(i) && i !== ' ') {
//       numberStr += i;
//     }
//     // console.log(i);
//   }

//   return numberStr ? numberStr : 'raqam topilmadi';
// }

// console.log(extractNumbers('Bugun 2025-yil 7-iyul'));
// console.log(extractNumbers('Men 2 ta olma va 4 ta banan oldim'));

//=================================================================

// Masala: Slug generator (URL friendly)
// Vazifa:
// Berilgan sarlavhadan (title) slug yasovchi funksiya yozing — masalan, URL uchun.
// Slug — bu kichik harflar, bo‘sh joy o‘rniga -, va faqat harf/raqamlar bo‘ladi.

// function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9\s]/g, '')
//     .trim()
//     .replace(/\s+/g, '-');
// }

// console.log(generateSlug('Men React o‘rganayapman!'));

//=======================================================
// masala: Email manzilini tekshirish
// Vazifa:
// Foydalanuvchi kiritgan string haqiqiy email manzilmi yoki yo‘qmi — shuni tekshiradigan funksiya yozing.
// function isValidEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }
// console.log(isValidEmail('asadbek@gmail.com'));
// console.log(isValidEmail('test123@domainco'));

//==================================================
// CRUD uchun boshlang‘ich masala:
// 🧩 Masala: Mahsulotlar ro‘yxatini boshqarish
// Vazifa:
// Quyidagi funksiyalarni yozing:

// createProduct(name) — mahsulot qo‘shadi

// getProducts() — barcha mahsulotni qaytaradi

// updateProduct(oldName, newName) — nomni yangilaydi

// deleteProduct(name) — mahsulotni o‘chiradi

// let products = ['olma', 'anor', 'banan'];

// function getProducts() {
//   return products;
// }

// function createProduct(item) {
//   products.push(item);
// }
// createProduct('shaftoli');

// function updateProduct(oldName, newName) {
//     products = products.map((item) =>
//         item === oldName ? newName : item
//       );

//   getProducts(products);
// }
// updateProduct('anor', 'anjir');

// function deleteProduct(name) {
//   products = products.filter((item) => item !== name);

//   getProducts(products);
// }

// deleteProduct('banan');

//==============================

// Obyektlar ro‘yxati bilan CRUD

// createProduct(name) – yangi mahsulot qo‘shadi (id avtomatik)

// getProducts() – mahsulotlar ro‘yxatini qaytaradi

// updateProduct(id, newName) – id bo‘yicha nomini o‘zgartiradi

// deleteProduct(id) – id bo‘yicha mahsulotni o‘chiradi

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];

// function getProducts() {
//   return products;
// }

// function createProduct(name) {
//   const newId = products.length ? products[products.length - 1].id + 1 : 1;
//   products.push({ id: newId, name });
// }

// const updateProduct = (id, newName) => {
//   products = products.map((prod) =>
//     prod.id === id ? { ...prod, name: newName } : prod
//   );
// };

// function deleteProduct(id) {
//   products = products.filter((item) => item.id !== id);
// }

//=====================================

// Bugun quyidagilarni qo‘shamiz:

// 🔍 searchProducts(keyword)
// — mahsulot nomida keyword bo‘lsa, chiqarish

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];
// let filteredProducts = [...products];

// function searchProducts(keyword) {
//   if (!keyword) {
//     filteredProducts = [...products]; // 🔁 bo‘sh bo‘lsa, tiklaymiz
//   } else {
//     filteredProducts = products.filter((item) =>
//       item.name.toLowerCase().includes(keyword.toLowerCase())
//     );
//   }
// }

// searchProducts('an');

//=====================================================

let products = [
  { id: 1, name: 'olma' },
  { id: 2, name: 'anor' },
  { id: 3, name: 'banan' },
  { id: 4, name: 'shaftoli' },
  { id: 5, name: 'gilos' },
  { id: 6, name: 'nok' },
  { id: 7, name: 'uzum' },
];

function paginateProducts(page, perPage) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return products.slice(startIndex, endIndex);
}

console.log(paginateProducts(1, 4));
