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

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
//   { id: 6, name: 'nok' },
//   { id: 7, name: 'uzum' },
// ];

// function paginateProducts(page, perPage) {
//   const startIndex = (page - 1) * perPage;
//   const endIndex = startIndex + perPage;
//   return products.slice(startIndex, endIndex);
// }

// console.log(paginateProducts(1, 4));

//==========================================
// Mahsulotlarni name bo‘yicha tartiblash (sort)

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
// ];

// function sortProducts(order) {
//   if (order === 'asc') {
//     return products.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (order === 'desc') {
//     return products.sort((a, b) => b.name.localeCompare(a.name));
//   } else {
//     throw new Error("Xatolikka yo'l qo'ydingiz");
//   }
// }

// sortProducts('asc');
// sortProducts('desc');

//==================================================
// Mahsulotga inStock: true qo‘shish
// 🎯 Vazifa:
// Yangi array qaytaruvchi funksiya yozing:
// Har bir mahsulotga inStock: true qo‘shilsin
// Asl products o‘zgarmasin

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];
// function addStockFlag(products) {
//   return (products = products.map((item) => {
//     return { ...item, inStock: true };
//   }));
// }

// console.log(addStockFlag(products));

//=================================================
// Nomidagi harflar soni 5 yoki undan ko‘p bo‘lgan mahsulotlar
//

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
// ];

// function filterLongNames(products) {
//   return (products = products.filter((product) => {
//     return product.name.length >= 5;
//   }));
// }

// console.log(filterLongNames(products));

//=======================================================
// Katta harfga o‘zgartirish + filter

// 🎯 Vazifa:
// Quyidagi ishlarni bir funksiyada bajaring:
// Faqat name.length >= 5 bo‘lgan mahsulotlarni ajratib oling
// Har bir nameni katta harflar bilan (toUpperCase()) qaytaring
// name o‘rniga uppercaseName sifatida qaytaring

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
// ];

// function transformProducts(products) {
//   return (products = products
//     .filter((product) => product.name.length >= 5)
//     .map((item) => {
//       return { id: item.id, uppercaseName: item.name.toUpperCase() };
//     }));
// }

// console.log(transformProducts(products));

//===================================================

// Chegirma berish — faqat uzun nomlilarga

// Nima qilishi kerak?
// Faqat nomi 6 yoki undan ko‘p harfdan iborat mahsulotlarni ajrating
// Har biriga 10% chegirma bering (price * 0.9)
// Yangi massiv qaytaring, original products o‘zgarmasin

// let products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'anor', price: 10000 },
//   { id: 3, name: 'banan', price: 12000 },
//   { id: 4, name: 'shaftoli', price: 15000 },
//   { id: 5, name: 'gilos', price: 11000 },
// ];

// function applyDiscount(products) {
//   return (products = products
//     .filter((product) => product.name.length >= 6)
//     .map((item) => {
//       return { ...item, price: item.price * 0.9 };
//     }));
// }

// console.log(applyDiscount(products));

//=================================
//Yangi mahsulotlarga "YANGI" badge qo‘shish
// 🎯 Vazifa:
// Faqat so‘nggi 7 kunda qo‘shilgan mahsulotlarni ajratib ol
// Har biriga { ...product, badge: "YANGI" } sifatida badge qo‘sh
// Yangi array qaytar (original products o‘zgarmasin)

// let products = [
//   { id: 1, name: 'olma', createdAt: '2024-11-01' },
//   { id: 2, name: 'anor', createdAt: '2025-06-01' },
//   { id: 3, name: 'banan', createdAt: '2025-07-20' },
//   { id: 4, name: 'shaftoli', createdAt: '2025-07-26' },
//   { id: 5, name: 'gilos', createdAt: '2025-07-22' },
// ];

// function markNewProducts(products) {
//   const now = new Date();
//   let sevenDay = 7 * 24 * 60 * 60 * 1000;
//   return (newProducts = products
//     .filter((product) => now - new Date(product.createdAt) <= sevenDay)
//     .map((item) => {
//       return { ...item, badge: 'YANGI' };
//     }));
// }

// console.log(markNewProducts(products));

//=======================================================
//reduce bilan array ichidagi sonlar nechta marta qatnashganini hisoblang

// Masala:
// Quyidagi arrayda har bir son necha marta qatnashganini aniqlang.
// Natija obyekt bo‘lishi kerak.

// const numbers = [4, 2, 4, 3, 2, 1, 4, 2];

// let objNumbers = numbers.reduce((acc, curVal) => {
//   if (curVal in acc) {
//     acc[curVal] += 1;
//   } else {
//     acc[curVal] = 1;
//   }
//   return acc;
// }, {});

// console.log(objNumbers);

//======================================================

// Barcha mahsulotlar narxi 5000 so‘mdan katta ekanini tekshiring
// Masala:
// Quyidagi arraydagi barcha mahsulotlar narxi 5000 so‘mdan katta yoki yo‘qligini tekshiring.

// const products = [
//   { name: 'olma', price: 8000 },
//   { name: 'anor', price: 10000 },
//   { name: 'banan', price: 3000 }, // bu past!
// ];

// function priceProducts(products) {
//   let a = products.every((product) => product.price >= 5000);
//   return a;
// }

// console.log(priceProducts(products));

//========================================

// Narxi 10 000 so‘mdan past birinchi mahsulotning indeksini toping
//Vazifa:
// price < 10000 bo‘lgan birinchi mahsulot indeksini findIndex() yordamida toping.
// const products = [
//   { name: 'olma', price: 12000 },
//   { name: 'shaftoli', price: 15000 },
//   { name: 'gilos', price: 9000 },
//   { name: 'banan', price: 8000 },
// ];

// let item = products.findIndex((item) => item.price <= 10);
// console.log(item);

//====================================

// Quyidagi kurslar ro‘yxatida har bir kursda o‘quvchilar bor.
// Vazifa: barcha kurslardagi o‘quvchilardan faqat "active: true" bo‘lganlarni tekis (bitta) arrayga yig‘ing.

// const courses = [
//   {
//     title: 'Frontend',
//     students: [
//       { name: 'Asad', active: true },
//       { name: 'Sardor', active: false },
//     ],
//   },
//   {
//     title: 'Backend',
//     students: [
//       { name: 'Javlon', active: true },
//       { name: 'Muhammad', active: false },
//     ],
//   },
// ];

// const allStudentsArrays = courses
//   .map((course) => course.students)
//   .flat(Infinity)
//   .filter((item) => item.active);

// console.log(allStudentsArrays);

//=================================================
// Kamida bitta mahsulot narxi 10000 so‘mdan yuqori ekanini tekshiring
//Vazifa:
// some() metodidan foydalanib, ushbu mahsulotlar ichida kamida bitta mahsulot narxi 10000 so‘mdan katta ekanini aniqlang.

// const products = [
//   { name: 'olma', price: 8000 },
//   { name: 'anor', price: 9500 },
//   { name: 'banan', price: 12000 },
//   { name: 'gilos', price: 7000 },
// ];

// let someProduct = products.some((product) => product.price > 10000);
// console.log(someProduct);

//=========================================

// Foydalanuvchi nomi ro‘yxatda bormi??
// Vazifa:
// Foydalanuvchi kiritgan ism ro‘yxatda bor-yo‘qligini includes() yordamida tekshir.
// Case-insensitive bo‘lishi kerak (ya'ni Asadbek, ASADBЕК, asadbek — hammasi tanilsin).

// const users = ['asadbek', 'javlon', 'sardor', 'muhammad'];

// let includeName = (name) => {
//   return users.includes(name.toLowerCase());
// };
// console.log(includeName('Asadbek'));

//=]===================================

// Savatchadagi jami narxni hisoblang
// Vazifa:
// reduce() yordamida umumiy summa (jami narx)ni hisoblang.
// const cart = [
//   { name: 'olma', price: 8000, quantity: 2 },
//   { name: 'anor', price: 10000, quantity: 1 },
//   { name: 'banan', price: 5000, quantity: 3 },
// ];

// const allPrice = cart.reduce((acc, curVal) => {
//   acc += curVal.price * curVal.quantity;
//   return acc;
// }, 0);

// console.log(allPrice);

//================================================
// Mahsulotlarni narx bo‘yicha saralash

// const products = [
//   { name: 'olma', price: 12000 },
//   { name: 'banan', price: 8000 },
//   { name: 'gilos', price: 15000 },
//   { name: 'anor', price: 10000 },
// ];
// const sortedProducts = products.sort((a, b) => a.price - b.price);
// console.log(sortedProducts);

//========================================
//Foydalanuvchini ID bo‘yicha topish

// const users = [
//   { id: 1, name: 'Asadbek' },
//   { id: 2, name: 'Javlon' },
//   { id: 3, name: 'Sardor' },
//   { id: 4, name: 'Muhammad' },
// ];

// function findUserById(id) {
//   const user = users.find((user) => user.id === id);
//   return user ?? { message: 'User topilmadi' };
// }

// console.log(findUserById(3)); // 👉 { id: 3, name: 'Sardor' }
// console.log(findUserById(11)); // 👉 { id: 3, name: 'Sardor' }

//=======================================

// Yangilangan mahsulot nomini saqlash
// Vazifa:
// Berilgan id bo‘yicha mahsulot nomini yangilaydigan funksiya yozing.
// Massivni yangilangan holatda qaytarsin.
// Agar id mavjud bo‘lmasa, massiv o‘zgarmasdan qaytishi kerak.

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];

// function updateProductName(id, productName) {
//   return products.map((item) =>
//     item.id === id ? { ...item, name: productName } : item
//   );
// }

// console.log(updateProductName(2, 'gilos'));

//==========================================

// Quyidagi kabi sonlar massiv berilgan:
// Eng katta ikki sondan iborat yangi massiv hosil qiladigan funksiya yozing.
// Masalan: [9, 7] bo‘lishi kerak.
// const numbers = [4, 7, 2, 9, 1, 5, 3];

// function getTopTwo(arr) {
//   const sorted = [...arr].sort((a, b) => b - a); // kamayish tartibida saralash
//   return sorted.slice(0, 2); // birinchi ikki elementni olish
// }

// console.log(getTopTwo([4, 7, 2, 9, 1, 5, 3])); // 👉 [9, 7]

//==================================================

//Eng uzun so‘zni topadigan funksiya yozing.
// const strings = ['salom', 'olma', 'dunyo', 'kitob', 'telefon'];

// function longWord(arr) {
//   return [...arr].sort((a, b) => b.length - a.length)[0];
// }

// console.log(longWord(strings));

//==============================================
//Faqat juft sonlarni ajratib, yangi massivga qaytaradigan funksiya yozing.
// const nums = [3, 6, 8, 11, 14, 17];

// function evenNumber(nums) {
//   return let evenNums = [...nums].filter((num) => num % 2 == 0);
// }

// console.log(evenNumber(nums));

//=================================
// Masala 4 (array of objects):
// Quyidagi users massividan 18 yoshdan katta foydalanuvchilarni ajratib, faqat ularning name larini qaytaradigan funksiya yozing:

// const users = [
//   { name: 'Ali', age: 17 },
//   { name: 'Vali', age: 21 },
//   { name: 'Soli', age: 19 },
//   { name: 'Karim', age: 16 },
//   { name: 'Anvar', age: 23 },
// ];

// function namesMassiv(users) {
//   let names = [];
//   users.forEach((user) => {
//     if (user.age >= 18) {
//       names.push(user.name);
//     }
//   });

//   return names;
// }

// namesMassiv(users);

//=================================================
//Ya’ni price * quantity har biri uchun, so‘ng umumiy hisob.

// const cart = [
//   { name: 'olma', price: 8000, quantity: 3 },
//   { name: 'banan', price: 6000, quantity: 2 },
//   { name: 'gilos', price: 15000, quantity: 1 },
// ];

// function allPrice(cart) {
//   return cart.reduce((acc, curVal) => {
//     return (acc += curVal.price * curVal.quantity);
//   }, 0);
// }

// console.log(allPrice(cart));

//============================================
// Shu massiv ichidan id bo‘yicha foydalanuvchini topuvchi funksiya yozing.

// const users = [
//   { id: 1, name: 'Asadbek', role: 'admin' },
//   { id: 2, name: 'Sarvar', role: 'user' },
//   { id: 3, name: 'Dilnoza', role: 'moderator' },
// ];

// function findUserById(users, id) {
//   let result = users.find((user) => user.id === id);
//   return result;
// }

// console.log(findUserById(users, 4));
// console.log(findUserById(users, 2));

//============================================

// Quyidagi kabi foydalanuvchilar roʻyxati berilgan. 18 yoshdan katta foydalanuvchilarning ism va yoshini qaytaradigan funksiya yozing:

// const users = [
//   { id: 1, name: 'Asadbek', age: 17 },
//   { id: 2, name: 'Zarina', age: 22 },
//   { id: 3, name: 'Javlon', age: 19 },
//   { id: 4, name: 'Diyor', age: 15 },
// ];

// function getAdults(users) {
//   let filteredUsers = users
//     .filter((user) => user.age >= 18)
//     .map((user) => ({ name: user.name, age: user.age }));
//   return filteredUsers;
// }

// console.log(getAdults(users));

//===================================================

// Quyidagi mahsulotlar ro‘yxati berilgan. Har bir mahsulot nomini kattagina harflarda qaytaradigan funksiya yozing.

// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
//   { id: 3, name: 'gilos', price: 15000 },
// ];

// function getUpperCaseNames(products) {
//   let upperCaseNames = products.map((product) => product.name.toUpperCase());
//   return upperCaseNames;
// }

// console.log(getUpperCaseNames(products));

//================================================
// Endi siz id orqali mahsulotni topib, uning price qiymatini yangilaydigan funksiya yozishingiz kerak.
// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
//   { id: 3, name: 'gilos', price: 15000 },
// ];

// function updateProductPrice(products, id, newPrice) {
//   let mapedArr = products.map((product) => {
//     return product.id === id ? { ...product, price: newPrice } : product;
//   });
//   return mapedArr;
// }

// console.log(updateProductPrice(products, 2, 9000));

//====================================================
//Quyidagi mahsulotlar ro‘yhatidan id orqali mahsulotni olib tashlang:

// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
//   { id: 3, name: 'gilos', price: 15000 },
// ];

// function deleteProductById(products, id) {
//   let filteredProducts = products.filter((product) => product.id !== id);
//   return filteredProducts;
// }

// console.log(deleteProductById(products, 2));

//===================================================

//addProduct funksiyasini yozamiz

// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
// ];

// function addProduct(products, newProduct) {
//   return [...products, newProduct]; // 🔁 yangi array
// }

// console.log(addProduct(products, { id: 3, name: 'gilos', price: 15000 }));

//-====================================
//Quyidagi users massiv berilgan:

// const users = [
//   { id: 1, name: 'Asadbek', role: 'admin' },
//   { id: 2, name: 'Sarvar', role: 'user' },
//   { id: 3, name: 'Dilnoza', role: 'moderator' },
// ];

// function searchUser(users, id) {
//   return users.find((user) => user.id === id);
// }

// console.log(searchUser(users, 2));

//========================================================
//Access tekshirish
//Quyidagi users ro‘yxatidan foydalanuvchi admin yoki moderator bo‘lsa — unga ruxsat bor deb hisoblaymiz:

// const users = [
//   { name: 'Asadbek', role: 'admin' },
//   { name: 'Sarvar', role: 'user' },
//   { name: 'Dilnoza', role: 'moderator' },
//   { name: 'Karim', role: 'guest' },
// ];

// function checkAccess(users) {
//   // 👉 true (chunki admin va moderator bor)

//   return users.some(
//     (user) => user.role === 'moderator' || user.role === 'admin'
//   );
// }

// function checkAccess(users) {
//     const allowedRoles = ['admin', 'moderator'];
//     return users.some(user => allowedRoles.includes(user.role));
//   }

// console.log(checkAccess(users));

//===================================================

// const products = [
//   { name: 'olma', price: 8000 },
//   { name: 'banan', price: 6000 },
//   { name: 'gilos', price: 12000 },
// ];

// let newProducts = [...products].map((product) => {
//   return { ...product, discountedPrice: product.price * 0.9 };
// });

// console.log(newProducts);

//=====================================================
//Quyidagi products massividagi mahsulotlarni narx bo‘yicha oshish tartibida saralovchi funksiya yozing:

// const products = [
//   { name: 'olma', price: 12000 },
//   { name: 'banan', price: 8000 },
//   { name: 'gilos', price: 15000 },
//   { name: 'anor', price: 10000 },
// ];

// const sortedProducts = [...products].sort((a, b) => a.price - b.price);

// console.log(sortedProducts);
//=========================================================

// Product name o‘zgartirish
// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
// ];

// function updateProductName(id, newName) {
//   let newProducts = [...products].map((product) => {
//     return product.id === id ? { ...product, name: newName } : product;
//   });

//   return newProducts;
// }

// console.log(updateProductName(2, 'shaftoli'));

//============================================

// : Mahsulotni o‘chirish
// Quyidagi mahsulotlar ro‘yxatidan berilgan idga ega mahsulotni o‘chiradigan funksiya yozing:

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
// ];

// function deleteProductById(id) {
//   let newProducts = [...products].filter((product) => product.id !== id);
//   return newProducts;
// }

// console.log(deleteProductById(1));

//=================================================

// Yangi mahsulot qo‘shish (duplicate check bilan)

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
// ];

// function addProduct(products, newProduct) {
//   const isDuplicate = products.some((product) => product.id === newProduct.id);

//   if (isDuplicate) {
//     console.log('❌ Bunday id mavjud');
//     return products; // eski ro‘yxatni qaytaramiz
//   }

//   return [...products, newProduct];
// }

// console.log(addProduct(products, { id: 2, name: 'anor' }));

//==================================================

// : Mahsulotlarni kategoriyaga qarab guruhlash
// const products = [
//   { id: 1, name: 'olma', category: 'meva' },
//   { id: 2, name: 'banan', category: 'meva' },
//   { id: 3, name: 'sabzi', category: 'sabzavot' },
//   { id: 4, name: 'gilos', category: 'meva' },
//   { id: 5, name: 'kartoshka', category: 'sabzavot' },
// ];

// function groupProductsByCategory(products) {
//   const newproducts = [...products].reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//     }

//     acc[product.category].push(product);
//     return acc;
//   }, {});
//   return newproducts;
// }

// console.log(groupProductsByCategory(products));

//=================================================

// So‘zlar chastotasini hisoblash

// const words = ['olma', 'banan', 'olma', 'gilos', 'banan', 'olma'];

// function countWords(words) {
//   let count = words.reduce((acc, word) => {
//     if (word in acc) {
//       acc[word] += 1;
//     } else {
//       acc[word] = 1;
//     }
//     return acc;
//   }, {});
//   return count;
// }

// console.log(countWords(words));

//=====================================================
//Qiymat bo‘yicha guruhlab, ID ro‘yxatini tuzish

// const users = [
//   { id: 1, status: 'active' },
//   { id: 2, status: 'inactive' },
//   { id: 3, status: 'active' },
//   { id: 4, status: 'pending' },
//   { id: 5, status: 'inactive' },
// ];

// function groupUserIdsByStatus(users) {
//   let reducerArr = users.reduce((acc, user) => {
//     if (!acc[user.status]) {
//       acc[user.status] = [];
//     }

//     acc[user.status].push(user.id);
//     return acc;
//   }, {});
//   return reducerArr;
// }

// console.log(groupUserIdsByStatus(users));

//===========================================

// Foydalanuvchining shahar nomlarini ajratib olish

// const users = [
//   {
//     id: 1,
//     name: 'Asadbek',
//     address: {
//       city: "Farg'ona",
//       street: "Bog'i shamol",
//     },
//   },
//   {
//     id: 2,
//     name: 'Sarvar',
//     address: {
//       city: 'Toshkent',
//       street: 'Yunusobod',
//     },
//   },
//   {
//     id: 3,
//     name: 'Dilnoza',
//     address: {
//       city: 'Andijon',
//       street: "Navro'z",
//     },
//   },
// ];

// function getCities(users) {
//   let cities = [...users].map((user) => {
//     return user?.address?.city;
//   });
//   return cities;
// }

// console.log(getCities(users));

//=====================================================
//Email'lari @gmail.com bo‘lgan foydalanuvchilarni topish va ularning namelarini olish

// const users = [
//   { id: 1, name: 'Asadbek', email: 'asadbek@gmail.com' },
//   { id: 2, name: 'Sarvar', email: 'sarvar@mail.ru' },
//   { id: 3, name: 'Dilnoza', email: 'dilnoza@gmail.com' },
//   { id: 4, name: 'Anvar', email: 'anvar@yandex.com' },
// ];

// function getGmailUsers(users) {
//   let namesArr = [...users]
//     .filter((user) => user?.email.endsWith('@gmail.com'))
//     .map((user) => user?.name);
//   return namesArr;
// }

// console.log(getGmailUsers(users));

//===============================================

// Eng arzon qimmat mahsulotni topish
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 12000 },
//   { id: 3, name: 'gilos', price: 15000 },
//   { id: 4, name: 'anor', price: 11000 },
//   { id: 5, name: 'shaftoli', price: 9000 },
// ];

// function getCheapestExpensive(products) {
//   return products
//     .filter((product) => product.price > 10000)
//     .reduce((acc, product) => (product.price < acc.price ? product : acc));
// }

// console.log(getCheapestExpensive(products));

//=====================================================

// Sahifalash (pagination) uchun ma'lumotlarni ajratish

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
//   { id: 4, name: 'anor' },
//   { id: 5, name: 'shaftoli' },
//   { id: 6, name: 'behi' },
//   { id: 7, name: 'uzum' },
//   { id: 8, name: 'nok' },
//   { id: 9, name: 'limon' },
//   { id: 10, name: 'olxori' },
// ];

// function paginate(arr, page, perPage) {
//   // Sahifa indeksi 1-based bo'lgani uchun 0-based ga o'tkazamiz
//   const startIndex = (page - 1) * perPage;
//   const endIndex = startIndex + perPage;

//   // Massivdan kerakli qismini ajratib olamiz
//   const paginatedItems = arr.slice(startIndex, endIndex);

//   return paginatedItems;
// }

// console.log(paginate(products, 3, 4));
//===================================================

// Siz validateForm(data) funksiyasini yozishingiz kerak. U quyidagilarni tekshiradi:
// name — bo‘sh bo‘lmasligi kerak
// email — @ belgisi bo‘lishi shart
// age — 18 va undan katta bo‘lishi kerak

// const formData = {
//   name: 'Asadbek',
//   email: 'asadbekgmail.com',
//   age: 17,
// };

// function validateForm(data) {
//   return Object.entries(data).reduce((acc, [key, value]) => {
//     switch (key) {
//       case 'name':
//         acc[key] = !!value && value.trim().length > 0;
//         break;
//       case 'email':
//         acc[key] = typeof value === 'string' && value.includes('@');
//         break;
//       case 'age':
//         acc[key] = Number(value) >= 18;
//         break;
//       default:
//         acc[key] = true;
//     }
//     return acc;
//   }, {});
// }

// console.log(validateForm(formData));

//=======================================================

// Mahsulotlarni narx va kategoriya bo‘yicha filtrlash
// const products = [
//   { id: 1, name: 'olma', price: 8000, category: 'meva' },
//   { id: 2, name: 'banan', price: 12000, category: 'meva' },
//   { id: 3, name: 'sabzi', price: 4000, category: 'sabzavot' },
//   { id: 4, name: 'gilos', price: 15000, category: 'meva' },
//   { id: 5, name: 'kartoshka', price: 3000, category: 'sabzavot' },
//   { id: 6, name: 'behi', price: 11000, category: 'meva' },
// ];

// function filterProducts(products, minPrice, category) {
//   return products.filter(
//     (product) => product.price > minPrice && product.category === category
//   );
// }

// console.log(filterProducts(products, 10000, 'meva'));

//======================================================

// Kamida bitta mahsulot 20,000 dan qimmatroqmi?

// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 12000 },
//   { id: 3, name: 'gilos', price: 25000 },
//   { id: 4, name: 'anor', price: 10000 },
// ];

// function hasExpensiveProduct(products, limitPrice) {
//   return products.some((product) => product.price > limitPrice);
// }

// console.log(hasExpensiveProduct(products, 20000));

//=========================================

// Hamma mahsulotlar arzonmi?
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 9500 },
//   { id: 4, name: 'anor', price: 7000 },
// ];

// function areAllCheap(products, maxPrice) {
//   return products.every((product) => product.price < maxPrice);
// }

// console.log(areAllCheap(products, 10000));
// console.log(areAllCheap(products, 7000));

//=========================================

//Mahsulot kategoriyalarini unikal qilib ajratish
// const products = [
//   { id: 1, name: 'olma', category: 'meva' },
//   { id: 2, name: 'banan', category: 'meva' },
//   { id: 3, name: 'sabzi', category: 'sabzavot' },
//   { id: 4, name: 'gilos', category: 'meva' },
//   { id: 5, name: 'kartoshka', category: 'sabzavot' },
//   { id: 6, name: 'non', category: 'non' },
// ];

// function getUniqueCategories(products) {
//   let mySet = new Set(products.map((prod) => prod.category));
//   return [...mySet];
// }

// console.log(getUniqueCategories(products));

//=========================================================
//Mahsulotga rating qo‘shish yoki yangilash
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function updateProductRating(products, id, rating) {
//   return products.map((product) =>
//     product.id === id ? { ...product, rating } : product
//   );
// }

// console.log(updateProductRating(products, 1, 4.5));

//===============================================

// Yangi mahsulot qo‘shish (id avtomatik bo‘lsin)
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function addNewProduct(products, newProduct) {
//   return [
//     ...products,
//     { id: products[products.length - 1]?.id + 1, ...newProduct },
//   ];
// }

// console.log(addNewProduct(products, { name: 'anor', price: 10000 }));

//==========================================================

//Mahsulotni id bo‘yicha o‘chirish (agar mavjud bo‘lsa)
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function deleteProductById(products, id) {
//   return products.filter((product) => product.id !== id);
// }

// console.log(deleteProductById(products, 4));

//=============================================

//==========================================
//Mahsulot narxini yangilash (agar topilsa)
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function updateProductPrice(products, id, newPrice) {
//   const productExists = products.some((prod) => prod.id === id);

//   if (!productExists) {
//     return 'Mahsulot topilmadi';
//   }

//   return products.map((prod) =>
//     prod.id === id ? { ...prod, price: newPrice } : prod
//   );
// }
// console.log(updateProductPrice(products, 4, 10000));

//==================================================

// Mahsulotni name bo‘yicha topish (case-insensitive)

// Funksiya nima qiladi?
// Mahsulot nomini (name) bo‘yicha topadi
// Harf katta-kichikligiga e’tibor bermaydi (case-insensitive)
// Agar topilsa → obyekt qaytaradi
// Agar topilmasa → "Mahsulot topilmadi" yozuvi qaytarad

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function findProductByName(products, name) {
//   const product = products.find(
//     (prod) => prod.name.toLowerCase() === name.toLowerCase()
//   );

//   return product || 'Mahsulot topilmadi';
// }

// console.log(findProductByName(products, 'banan'));

//==========================================================

// Mahsulotlarni name bo‘yicha izlash (qisman moslik, case-insensitive)
// name ichida searchTerm bo‘lsa — mahsulotni qaytaradi
// Harf katta-kichikligi farq qilmaydi (case-insensitive)
// Yangi massiv qaytaradi
// Agar hech nima topilmasa — bo‘sh massiv []

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
//   { id: 4, name: 'Anor', price: 10000 },
// ];

// function searchProducts(products, searchTerm) {
//   let newProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return newProducts;
// }
// console.log(searchProducts(products, 'k'));

//================================================

//Yangi mahsulot qo‘shish (name bo‘yicha takrorlanmasin)

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function addUniqueProduct(products, newProduct) {
//   let isCheck = products.some(
//     (prod) => prod.name.toLowerCase() === newProduct.name.toLowerCase()
//   );
//   if (!isCheck) {
//     return [
//       ...products,
//       { id: products[products.length - 1].id + 1, ...newProduct },
//     ];
//   } else {
//     return `mahsulot mavjudligi sababli qo‘shilmaydi`;
//   }
// }

// console.log(addUniqueProduct(products, { name: 'anor', price: 10000 }));

//===========================================================================
//Narx oralig‘idagi mahsulotlarni ajratish

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
//   { id: 4, name: 'Anor', price: 10000 },
//   { id: 5, name: 'Uzum', price: 7000 },
// ];

// function filterByPriceRange(products, min, max) {
//   return products.filter(
//     (product) => product.price >= min && product.price <= max
//   );
// }

// console.log(filterByPriceRange(products, 80000, 100000));
//=======================================================

// Mahsulotni name bo‘yicha o‘chirish (case-insensitive)

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function deleteProductByName(products, name) {
//   return products.filter(
//     (prod) => prod.name.toLowerCase() !== name.toLowerCase()
//   );
// }

// console.log(deleteProductByName(products, 'archa'));

//=============================
// //Har bir mahsulotga isAvailable qiymatini qo‘shish
// Funksiya nima qiladi?
// Har bir mahsulotga yangi isAvailable maydoni qo‘shadi
// Qoidaga ko‘ra:
// Agar price >= 10000 bo‘lsa → isAvailable: true
// Aks holda → isAvailable: false
// Har doim yangi array qaytadi

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function addAvailabilityFlag(products) {
//   return products.map((product) => {
//     return { ...product, isAvailable: product.price >= 10000 ? true : false };
//   });
// }

// console.log(addAvailabilityFlag(products));

//=======================================
//Mahsulotlarni category bo‘yicha guruhlab, umumiy narxini hisoblash
// Funksiya vazifasi:
// category bo‘yicha mahsulotlarni guruhlaydi
// Har bir kategoriyadagi price larni yig‘adi
// Quyidagi shakldagi obyekt qaytaradi:
// {
//   meva: 29000,      // 8000 + 9000 + 12000
//   nonvoy: 7000      // 3000 + 4000
// }

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 9000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Bulochka', category: 'nonvoy', price: 4000 },
//   { id: 5, name: 'Gilos', category: 'meva', price: 12000 },
// ];

// function sumPricesByCategory(products) {
//   return products.reduce((acc, curVal) => {
//     if (curVal.category in acc) {
//       acc[curVal.category] += curVal.price;
//     } else {
//       acc[curVal.category] = curVal.price;
//     }
//     return acc;
//   }, {});
// }

// console.log(sumPricesByCategory(products));

//====================================================

// Mahsulotning categorysini yangilash (id orqali topib)
// Funksiya vazifasi:
// id bo‘yicha mahsulotni topadi
// Uning category qiymatini newCategory bilan almashtiradi
// Boshqa mahsulotlarga tegmaydi
// Har doim yangi array qaytaradi
// Agar mahsulot topilmasa — Mahsulot topilmadi deb yozadi

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 9000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function updateProductCategory(products, id, newCategory) {
//   let isCheck = products.some((prod) => prod.id === id);
//   if (isCheck) {
//     return products.map((product) =>
//       product.id === id ? { ...product, category: newCategory } : product
//     );
//   } else {
//     return 'mahsulot topilmadi';
//   }
// }

// console.log(updateProductCategory(products, 2, 'tropik'));

//===================================================
//Meva va arzon mahsulotlarni o‘chirish
// Funksiya vazifasi:
// Faqatgina:
// category === "meva" va price < 10000
// bo‘lgan mahsulotlarni o‘chiradi
// Qolgan barcha mahsulotlar saqlanib qoladi
// Har doim yangi array qaytariladi

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 90000 },
//   { id: 3, name: 'Gilos', category: 'meva', price: 12000 },
//   { id: 4, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function deleteCheapFruits(products) {
//   return products.filter(
//     (prod) => prod.category !== 'meva' && prod.price < 10000
//   );
// }

// console.log(deleteCheapFruits(products));

//====================================================

//Vazifa: Berilgan massivdagi har bir elementni kvadratga ko'tarib, yangi massiv qaytaring.
// const numbers = [1, 2, 3, 4, 5];
// // Natija: [1, 4, 9, 16, 25]

// function elementKv(arr) {
//   return arr.map((item) => item ** 2);
// }

// console.log(elementKv(numbers));

//====================================================
// Quyidagi obyektlarni age bo'yicha o'sish tartibida saralang.
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 30 },
// ];

// function sortedAge(people) {
//   return people.sort((a, b) => a.age - b.age);
// }

// console.log(sortedAge(people));

// Natija: [
//   { name: "Bob", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]

//===================================================

//category="meva" va price >= 10000 bo‘lgan mahsulotlarga 10% chegirma qo‘llash
// Qoidalar:
// Faqat category === "meva" va price >= 10000 bo‘lganlarga 10% chegirma qo‘llang
// (ya’ni newPrice = Math.round(price * 0.9)).
// Chegirma qo‘llanganlarga oldPrice degan maydon ham qo‘shing (chegirmagacha bo‘lgan narx).
// Qolgan mahsulotlar o‘zgarmasdan qoladi.
// Har doim yangi array qaytadi.
// Agar hech kimga chegirma tushmasa — yuqoridagi qoidaga ko‘ra asl ro‘yxatni qaytaring (xohlasangiz console.log("Chegirma qo‘llanmadi") ham qiling).

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Gilos', category: 'meva', price: 15000 },
// ];

// function applyDiscount(products) {
//   return products.map((prod) => {
//     if (
//       prod.category === 'meva' ||
//       (prod.category !== 'meva' && prod.price >= 10000)
//     ) {
//       return {
//         ...prod,
//         oldPrice: prod.price,
//         price: Math.round(prod.price * 0.9),
//       };
//     }
//     return prod;
//   });
// }

// console.log(applyDiscount(products));

//===============================================================

//Kategoriya bo‘yicha saralangan mahsulotlar ro‘yxati

// Qoidalar:
// Faqat berilgan category dagi mahsulotlarni ajratib oladi.
// Ularni price bo‘yicha o‘sish tartibida (low → high) saralaydi.
// Agar berilgan category bo‘yicha mahsulot topilmasa — "Mahsulot topilmadi" deb qaytaradi.
// Har doim yangi array qaytaradi.

// const products = [
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Gilos', category: 'meva', price: 15000 },
//   { id: 5, name: 'Shirin non', category: 'nonvoy', price: 10000 },
// ];

// function getSortedProductsByCategory(products, category) {
//   let isCheck = products.some((item) => item.category === category);
//   if (isCheck) {
//     return products
//       .filter((prod) => prod.category === category)
//       .sort((a, b) => a.price - b.price);
//   } else {
//     return 'Mahsulot topilmadi';
//   }
// }

// console.log(getSortedProductsByCategory(products, 'meva'));

//==================================================================

//Yangi mahsulot qo‘shish (kategoriya tekshiruv bilan)
// Qoidalar:
// allowedCategories degan array bor (masalan: ["meva", "nonvoy", "ichimlik"]).
// Agar yangi mahsulotning category qiymati shu ro‘yxatda bo‘lmasa → "Bunday kategoriya mavjud emas" deb qaytaradi.
// Aks holda yangi mahsulotni ro‘yxat oxiriga qo‘shadi.
// id qiymati — eng oxirgi mahsulot idsi + 1 bo‘lishi kerak.
// Har doim yangi array qaytaradi.

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function addProductWithCategoryCheck(products, newProduct, allowedCategories) {
//   let isCheck = allowedCategories.includes(newProduct.category);
//   if (isCheck) {
//     return [
//       ...products,
//       { id: products[products.length - 1].id + 1, ...newProduct },
//     ];
//   } else {
//     return 'Bunday kategoriya mavjud emas';
//   }
// }

// const allowed = ['meva', 'nonvoy', 'ichimlik'];
// console.log(
//   addProductWithCategoryCheck(
//     products,
//     { name: 'Gilos', category: 'meva', price: 15000 },
//     allowed
//   )
// );

//=====================================================

// Bir nechta mahsulot narxini oshirish
// Qoidalar:
// ids — bu array ([2, 4] kabi) bo‘lib, qaysi mahsulotlar narxi oshishini bildiradi.
// percent — necha foizga oshirish kerakligini bildiradi (masalan: 10 → 10%).
// Faqat ids ichida bo‘lgan mahsulotlarning price qiymati oshiriladi.
// Yangi array qaytaradi.
// Qolgan mahsulotlar o‘zgarishsiz qoladi.

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Gilos', category: 'meva', price: 15000 },
// ];

// function increasePrices(products, ids, percent) {
//   return products.map((product) => {
//     if (ids.includes(product.id)) {
//       return {
//         ...product,
//         price: product.price + (product.price * percent) / 100,
//       };
//     } else {
//       return product;
//     }
//   });
// }

// console.log(increasePrices(products, [2, 4], 10));
//============================================================
// Mahsulotlarni guruhlash va tartiblash

// Vazifa:
// Mahsulotlarni category bo‘yicha guruhlab chiqish (Electronics, Food va h.k.).
// Har bir category ichida mahsulotlarni price bo‘yicha kamayish tartibida (desc) joylashtirish.
// Natija quyidagi formatda bo‘lishi kerak:

// const products = [
//   { id: 1, name: 'Keyboard', category: 'Electronics', price: 120 },
//   { id: 2, name: 'Banana', category: 'Food', price: 2 },
//   { id: 3, name: 'Monitor', category: 'Electronics', price: 300 },
//   { id: 4, name: 'Apple', category: 'Food', price: 3 },
//   { id: 5, name: 'Mouse', category: 'Electronics', price: 25 },
//   { id: 6, name: 'Bread', category: 'Food', price: 1 },
// ];

// function categoryProducts(products) {
//   return products.reduce((acc, curVal) => {
//     if (curVal.category in acc) {
//       acc[curVal.category].push(curVal);
//     } else {
//       acc[curVal.category] = [];
//     }
//     return acc;
//   }, {});
// }

// console.log(categoryProducts(products));

//=================================================

// Delete + Multiple condition
// Qoidalar
// Quyidagi ikki holatga tushadigan mahsulotlar o‘chiriladi (ya’ni qaytgan massivda bo‘lmaydi):
// category === "meva" va price < 12000
// category === "nonvoy" va price < 4000
// Qolganlari saqlanadi. Har doim yangi array qaytadi. Agar hech kim o‘chirilmasa — asl ro‘yxatni qaytaring (xohlasangiz console.log("Hech narsa o‘chmadi") ham qiling).

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Bulochka', category: 'nonvoy', price: 4500 },
//   { id: 5, name: 'Gilos', category: 'meva', price: 15000 },
// ];

// function deleteByRules(products) {
//   return products.filter((product) => {
//     if (
//       (product.category === 'meva' && product.price >= 12000) ||
//       (product.category === 'nonvoy' && product.price > 4000)
//     ) {
//       return product;
//     }
//   });
// }

// console.log(deleteByRules(products));

//===============================================================
//upsertProduct(products, incoming)
// Qoidalar
// Validation:
// name: string, trim().length > 0
// category: string, trim().length > 0
// price: number, > 0
// 👉 Noto‘g‘ri bo‘lsa: "Noto‘g‘ri ma’lumot" qaytaring.
// Upsert:
// Agar incoming.id mavjud bo‘lsa → o‘sha mahsulotni yangilang (name/category/price).
// Agar mavjud bo‘lmasa → yangi mahsulot qilib qo‘shing.
// id = max id + 1.
// Har doim yangi array qaytaring (immutability).

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function upsertProduct(products, incoming) {
//   // 1️⃣ Validation
//   if (
//     typeof incoming.name !== 'string' ||
//     incoming.name.trim().length === 0 ||
//     typeof incoming.category !== 'string' ||
//     incoming.category.trim().length === 0 ||
//     typeof incoming.price !== 'number' ||
//     incoming.price <= 0
//   ) {
//     return 'Noto‘g‘ri ma’lumot';
//   }

//   // 2️⃣ Mavjud id bormi?
//   const exists = products.some((p) => p.id === incoming.id);

//   if (exists) {
//     // 3️⃣ Yangilash
//     return products.map((p) =>
//       p.id === incoming.id
//         ? {
//             ...p,
//             name: incoming.name,
//             category: incoming.category,
//             price: incoming.price,
//           }
//         : p
//     );
//   } else {
//     // 4️⃣ Qo‘shish
//     const newId = Math.max(...products.map((p) => p.id)) + 1;
//     return [...products, { id: newId, ...incoming }];
//   }
// }

// console.log(
//   upsertProduct(products, {
//     id: 2,
//     name: 'Banan Premium',
//     category: 'meva',
//     price: 13500,
//   })
// );

//===========================================================================

// upsertProduct (create yoki update, immutably)

// Vazifa:
// upsertProduct(products, draft, allowedCategories) funksiyasini yozing.
// Agar draft.id mavjud bo‘lsa va products ichida shu id topilsa → o‘sha product update qilinsin (faqat berilgan maydonlar).
// Aks holda → create: yangi product qo‘shilsin va id — massivdagi eng katta id + 1.
// Validatsiya:
// name: bo‘sh emas, unique (case-insensitive). Update’da o‘ziga tekis kelsa ruxsat.
// price: musbat son (0 dan katta).
// category: allowedCategories ichida bo‘lishi shart.
// Immutability: asl products o‘zgarmasin (yangi array qaytaring).
// Natija: id bo‘yicha o‘sish tartibida qayting

// ===========================================================
// addProduct(products, newProduct)

// id avtomatik: agar massiv bo‘sh bo‘lsa 1, aks holda maxId + 1.
// name trim qilinsin; bo‘sh bo‘lsa yoki faqat probel bo‘lsa — xato.
// price > 0 bo‘lsin; aks holda — xato.
// category yuqoridagi to‘rttadan biri bo‘lsin; aks holda — xato.
// inStock boolean bo‘lsin; aks holda — xato.
// Unikal nom: bir xil category ichida name (case-insensitive) takrorlanmasin. Masalan, "Olma" va "olma" — bir xil deb olinadi. Takror bo‘lsa — xato.
// Funksiya eski products ni o‘zgartirmasdan yangi massiv qaytarsin.
// Xatolarda throw new Error('...') qiling — xabar aniq bo‘lsin (masalan: "Name is required", "Price must be greater than 0", "Duplicate name in category").

// const products = [
//   { id: 1, name: 'Olma', price: 12000, category: 'fruit', inStock: true },
//   { id: 2, name: 'Banan', price: 8000, category: 'fruit', inStock: true },
//   { id: 3, name: 'Non', price: 4000, category: 'bakery', inStock: false },
// ];

// function addProduct(products, newProduct) {
//   const lastId = products.length > 0 ? products.at(-1).id : 0;
//   return [...products, { id: lastId + 1, ...newProduct }];
// }
// console.log(
//   addProduct(products, {
//     name: 'Shaftoli',
//     price: 15000,
//     category: 'fruit',
//     inStock: true,
//   })
// );

//==========================================================

// Mahsulotlar ro‘yxatidan berilgan category bo‘yicha filterlab olish funksiyasini yozing.
// Qoidalar
// category qiymati to‘g‘ri keladigan mahsulotlar yangi massiv sifatida qaytishi kerak.
// Agar hech narsa topilmasa → bo‘sh massiv qaytsin.
// Taqqoslash case-insensitive bo‘lsin ('Fruit' bilan 'fruit' bir xil).

// const products = [
//   { id: 1, name: 'Olma', price: 12000, category: 'fruit', inStock: true },
//   { id: 2, name: 'Banan', price: 8000, category: 'fruit', inStock: true },
//   { id: 3, name: 'Non', price: 4000, category: 'bakery', inStock: false },
// ];

// function getProductsByCategory(products, category) {
//   // shu yerga yozing

//   return [...products].filter(
//     (product) => product.category.toLowerCase() === category.toLowerCase()
//   );
// }

// console.log(getProductsByCategory(products, 'fruit'));

//======================================================================
// Mahsulotlar ro‘yxatida berilgan id ga teng mahsulotning price qiymatini yangilash.
// Qoidalar
// id topilsa — faqat o‘sha mahsulotning price qiymati yangilansin.
// Eski massiv o‘zgarmasligi kerak (immutable).
// Agar id topilmasa — eski massiv o‘zgarishsiz qaytsin.
// newPrice qiymati 0 dan katta bo‘lishi kerak, aks holda xato (throw new Error('Price must be greater than 0'))

// function updateProductPrice(products, id, newPrice) {
//   // shu yerga yozing
//   if (0 < newPrice) {
//     return products.map((product) =>
//       product.id === id ? { ...product, price: newPrice } : product
//     );
//   } else {
//     throw new Error('Price must be greater than 0');
//   }
// }

// const products = [
//   { id: 1, name: 'Olma', price: 12000, category: 'fruit', inStock: true },
//   { id: 2, name: 'Banan', price: 8000, category: 'fruit', inStock: true },
//   { id: 3, name: 'Non', price: 4000, category: 'bakery', inStock: false },
// ];

// console.log(updateProductPrice(products, 2, 9000));

//===========================================

// updateProductPrice(products, id, newPrice) funksiyasini yozing.
// Funksiya id bo‘yicha mahsulotni topib, narxini newPrice ga o‘zgartirsin.
// Agar id topilmasa, asl massivni o‘zgartirmasdan qaytarsin.
// newPrice 0 dan kichik bo‘lmasligi kerak. Aks holda xato (Error) chiqarsin.

// const products = [
//   { id: 1, name: 'Olma', price: 12000 },
//   { id: 2, name: 'Banan', price: 8000 },
//   { id: 3, name: 'Gilos', price: 15000 },
// ];

// function updateProductPrice(products, id, newPrice) {
//   if (newPrice <= 0) {
//     throw new Error('Price must be greater than 0');
//   }

//   return products.map((item) =>
//     item.id === id ? { ...item, price: newPrice } : item
//   );
// }
// console.log(updateProductPrice(products, 2, 9000));

//=======================================

// const products = [
//   { id: 1, name: 'Olma', price: 12000 },
//   { id: 2, name: 'Banan', price: 8000 },
//   { id: 3, name: 'Gilos', price: 15000 },
// ];

// deleteProductById(products, id) funksiyasini yozing:
// Funksiya berilgan id bo‘yicha mahsulotni o‘chirib tashlasin.
// Agar id topilmasa, massiv o‘zgarmagan holda qaytarsin.
// Asl massivni o‘zgartirmasligi kerak (immutable).

// function deleteProductById(products, id) {
//   return products.filter((prod) => prod.id !== id);
// }

// console.log(deleteProductById(products, 2));

//===============================================

// products massivida turli kategoriyadagi mahsulotlar bor.
// Faqatgina "meva" kategoriyasidagi mahsulotlarni qaytaradigan funksiya yozing.

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 12000 },
//   { id: 2, name: 'Non', category: 'nonvoy', price: 4000 },
//   { id: 3, name: 'Banan', category: 'meva', price: 15000 },
//   { id: 4, name: 'Sut', category: 'ichimlik', price: 8000 },
// ];

// function getFruits(products) {
//   // shu yerga yozing
//   return products.filter((product) => product.category === 'meva');
// }

// console.log(getFruits(products));
// // Natija: [{id:1, name:"Olma", ...}, {id:3, name:"Banan", ...}]

//================================================

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 12000 },
//   { id: 2, name: 'Non', category: 'nonvoy', price: 4000 },
//   { id: 3, name: 'Banan', category: 'meva', price: 15000 },
// ];

// function updatePrice(products, id, newPrice) {
//   // shu yerga yozing
//   return products.map((prod) =>
//     prod.id === id ? { ...prod, price: newPrice } : prod
//   );
// }

// console.log(updatePrice(products, 2, 5000));
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000 },
//   { id: 2, name: "Non", category: "nonvoy", price: 5000 },
//   { id: 3, name: "Banan", category: "meva", price: 15000 },
// ]

//==========================================================

// Vazifa:
// Sizda mahsulotlar ro‘yxati bor, har bir mahsulotda reviews (izohlar) mavjud.
// Berilgan productId bo‘yicha izoh qo‘shuvchi funksiya yozing.
// Funksiya yangi array qaytarishi kerak (immutability saqlanadi).

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: ['Yaxshi meva'],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [],
//   },
// ];

// function addReview(products, productId, reviewText) {
//   // shu yerga yozing
//   return products.map((product) =>
//     product.id == productId
//       ? { ...product, reviews: [...product.reviews, reviewText] }
//       : product
//   );
// }

// console.log(addReview(products, 2, 'Juda mazali non edi!'));
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000, reviews: ["Yaxshi meva"] },
//   { id: 2, name: "Non", category: "nonvoy", price: 4000, reviews: ["Juda mazali non edi!"] }
// ]

//==========================================================

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: [{ userId: 1, text: 'Yaxshi meva' }],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [],
//   },
// ];

// function addReview(products, productId, review) {
//   return products.map((prod) =>
//     prod.id == productId
//       ? { ...prod, reviews: [...prod.reviews, review] }
//       : prod
//   );
// }

// console.log(
//   addReview(products, 2, { userId: 2, text: 'Issiq holda zo‘r ekan!' })
// );
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000, reviews: [{ userId: 1, text: "Yaxshi meva" }] },
//   { id: 2, name: "Non", category: "nonvoy", price: 4000, reviews: [{ userId: 2, text: "Issiq holda zo‘r ekan!" }] }
// ]

//========================================================================
// Berilgan productId va userId bo‘yicha izohni yangilang.
// Agar izoh topilmasa, arrayni o‘zgarishsiz qaytarishi kerak.

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: [{ userId: 1, text: 'Yaxshi meva' }],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [{ userId: 2, text: 'Issiq holda zo‘r ekan!' }],
//   },
// ];

// function updateReview(products, productId, userId, newText) {
//   return products.map((prod) => {
//     if (prod.id === productId) {
//       return {
//         ...prod,
//         reviews: prod.reviews.map((item) =>
//           item.userId === userId ? { ...item, text: newText } : item
//         ),
//       };
//     }
//     return prod;
//   });
// }

// console.log(updateReview(products, 2, 2, 'Biroz quruqroq edi'));
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000, reviews: [{ userId: 1, text: "Yaxshi meva" }] },
//   { id: 2, name: "Non", category: "nonvoy", price: 4000, reviews: [{ userId: 2, text: "Bi...roq edi" }] }
// ]

//========================================================
// Vazifa:
// Berilgan productId va userId bo‘yicha reviews ichidan tegishli review’ni o‘chiradigan funksiya yozing.
// Agar bunday review topilmasa, array o‘zgarishsiz qaytsin.

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: [
//       { userId: 1, text: 'Yaxshi meva' },
//       { userId: 3, text: 'Shirin ekan' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [{ userId: 2, text: 'Issiq holda zo‘r ekan!' }],
//   },
// ];

// function deleteReview(products, productId, userId) {
//   // shu yerga yozing
//   return products.map((prod) => {
//     if (prod.id == productId) {
//       return {
//         ...prod,
//         reviews: prod.reviews.filter((item) => item.userId !== userId),
//       };
//     } else {
//       return prod;
//     }
//   });
// }

// console.log(deleteReview(products, 1, 3));
